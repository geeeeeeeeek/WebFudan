/**
 * Created by Tong on 11.27.
 */
var ws = io.connect('http://localhost:11111');

ws.on('connect', function () {
    /**
     * Initialize user's WebGL data, like user's location, behavior, etc. Data packed in one variable.
     * */
    var webgldata = [100, 90];
    update(webgldata);
});


ws.on('user.update', function (data) {
    reset(data);
});


/**
 * When some other client updates, it will send a package to all clients.
 * Reset all users in your client by implementing reset.
 * */
function reset(update) {
    /*
     * @param update: all users' WebGL data
     * */
    // Do something to update user
    var nickname = document.getElementById("name").value;
    drawUser(nickname, update);
}

/**
 * As long as the user in this client changes, invoke update with its WebGl data.
 * */
function update(webgldata) {
    ws.emit('user.update', webgldata);
}

function init(data) {

}