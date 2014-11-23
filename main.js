var express = require('express'),
    io = require('socket.io');
var app = express();

app.use(express.static(__dirname));

var server = app.listen(11111, 'localhost');


var ws = io.listen(server);

// 检查昵称是否重复
var checkNickname = function (name) {
    for (var k in ws.sockets.sockets) {
        if (ws.sockets.sockets.hasOwnProperty(k)) {
            if (ws.sockets.sockets[k] && ws.sockets.sockets[k].nickname == name) {
                return true;
            }
        }
    }
    return false;
};
// 获取所有的昵称数组
var getAllNickname = function () {
    var result = [];
    for (var k in ws.sockets.sockets) {
        if (ws.sockets.sockets.hasOwnProperty(k)) {
            result.push({
                name: ws.sockets.sockets[k].nickname
            });
        }
    }
    return result;
};
ws.on('connection', function (client) {
    console.log('\033[96msomeone is connect\033[39m \n');
    client.on('join', function (msg) {
        // 检查是否有重复
        if (checkNickname(msg)) {
            client.emit('nickname', '昵称有重复!');
        } else {
            client.nickname = msg;
            ws.sockets.emit('announcement', '系统', msg + ' 加入了聊天室!', {type: 'join', name: getAllNickname()});
        }
    });
    // 监听发送消息
    client.on('send.message', function (msg) {
        client.broadcast.emit('send.message', client.nickname, msg);
    });

    client.on('disconnect', function () {
        if (client.nickname) {
            client.broadcast.emit('send.message', '系统', client.nickname + '离开聊天室!', {
                type: 'disconnect',
                name: client.nickname
            });
        }
    })

});

