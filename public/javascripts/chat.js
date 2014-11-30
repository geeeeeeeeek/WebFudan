/**
 * Created by Tong on 11.23.
 */


var ws = io.connect('http://localhost:11111');
var sendMsg = function (msg) {
    ws.emit('send.message', msg);
};
var addMessage = function (from, msg) {
    var avatar_index = Math.ceil(Math.random() * 5);
    var item = document.createElement('div');
    item.className = 'item';
    var src = 'template/img/avatar' + avatar_index + '.png';
    item.innerHTML = '<img src=' + src + ' alt="user image" class="online"/>' +
    '<p class="message"><a class="name"><small class="text-muted pull-right">' +
    '<i class="fa fa-clock-o"></i>' + new Date().getHours() + ':'
    + new Date().getMinutes() + '</small>' + from + '</a>' + msg + '</p>';
    document.querySelector('#chat-box').appendChild(item);
    document.querySelector('#chat-box').scrollTop = document.querySelector('#chat-box').scrollHeight;
    document.querySelector('#input').focus();
};

var send = function () {
    var ele_msg = document.querySelector('#input');
    var msg = ele_msg.value.replace('\r\n', '').trim();
    console.log(msg);
    if (!msg) return;
    sendMsg(msg);
    // Add message to my chat
    addMessage('我', msg);
    ele_msg.value = '';
};

ws.on('connect', function () {
    var nickname = document.getElementById("name").value;
    while (!nickname) {
        nickname = window.prompt('昵称不能为空，请重新输入!')
    }
    document.querySelector('#username').innerHTML = '你好，' + nickname;
    ws.emit('join', nickname);
});

// Nickname has existed
ws.on('nickname', function () {
    var nickname = window.prompt('昵称有重复，请重新输入!');
    while (!nickname) {
        nickname = window.prompt('昵称不能为空，请重新输入!')
    }
    ws.emit('join', nickname);
});

ws.on('send.message', function (from, msg) {
    addMessage(from, msg);
});

ws.on('announcement', function (from, msg) {
    addMessage(from, msg);
});

document.querySelector('#input').addEventListener('keypress', function (event) {
    if (event.which == 13) {
        send();
    }
});

document.querySelector('#send').addEventListener('click', function () {
    send();
});