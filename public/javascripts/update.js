/**
 * Created by Tong on 11.27.
 */
var ws = io.connect('http://localhost:11111');

ws.on('connect', function () {
    /**
     * Initialize user's WebGL data, like user's location, behavior, etc. Data packed in one variable.
     * */
    var webgldata = null;
    ws.emit('user.update', webgldata);
    log('WebGL data successfully initialized.');
});


ws.on('user.update', function (from, data) {
    reset(from, data);
});

/**
 * When some other client updates, it will be sent to all clients.
 * Reset that user in your client by implementing reset.
 * */
function reset(from, update) {
    /*
    * @param from: the user's nickname
    * @param update: the user's WebGL data
    * */
    // Do something to update user
    log('ALL: WebGL data of User ' + from + ' successfully updated.');
}

/**
 * As long as the user in this client changes, invoke update with its WebGl data.
 * */
function update(webglldata) {
    ws.emit('user.update', webgldata);
    log('WebGL data successfully updated.');
}
