var self;
var sx = 100, sy = 100, cy, flag;
var angles = [0, 3.14 / 2, 3.14, 3.14 / 2 * 3, 3.14 * 2, 3.14 / 2 * 5, 3.14 / 2 * 6, 3.14 / 2 * 7];
var turn;
var dif = [0, 1, 2, 3];

//渲染器初始化
var renderer;
function initThree() {
    width = document.getElementById('canvas-frame').clientWidth;
    height = document.getElementById('canvas-frame').clientHeight;
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(width, height);
    document.getElementById('canvas-frame').appendChild(renderer.domElement);
    renderer.setClearColorHex(0xF9F9F9, 1.0);
    flag = 0;
}
//相机
var camera;

function initCamera() {
    cy = 100;
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.x = 300;
    camera.position.y = cy;
    camera.position.z = 300;
    camera.up.x = 0;
    camera.up.y = 0;
    camera.up.z = 1;
    camera.lookAt({x: 100, y: 100, z: 0});
}

function setCamera() {
    camera.position.x = 300;
    camera.position.y = cy;
    camera.position.z = 300;
    camera.up.x = 0;
    camera.up.y = 0;
    camera.up.z = 1;
    camera.lookAt({
        x: 100, y: 100, z: 0
    });
}
//场景
var scene;
function initScene() {
    scene = new THREE.Scene();
}
//灯光
var light;
function initLight() {
    light = new THREE.DirectionalLight(0xF9F9F9, 1.0, 0);
    light.position.set(100, 200, 300);
    scene.add(light);
}
//立方体

function initObject() {
    //sx = sy = 100;
    var cube1 = new THREE.Mesh(
        new THREE.CubeGeometry(30, 30, 150), //设置形状
        new THREE.MeshLambertMaterial({color: 0x5F9EA0}) //设置材质
    );
    scene.add(cube1);
    cube1.position.set(0, 75, 0);

    var cube2 = new THREE.Mesh(
        new THREE.CubeGeometry(30, 30, 150), //设置形状
        new THREE.MeshLambertMaterial({color: 0x5F9EA0}) //设置材质
    );
    scene.add(cube2);
    cube2.position.set(0, 115, 0);

    var cube3 = new THREE.Mesh(
        new THREE.CubeGeometry(30, 90, 50), //设置形状
        new THREE.MeshLambertMaterial({color: 0xD3D3D3}) //设置材质
    );
    scene.add(cube3);
    cube3.position.set(0, 95, -50);

    var circle = new THREE.Mesh(
        new THREE.CircleGeometry(30, 30), //设置形状
        new THREE.MeshLambertMaterial({color: 0x00FA9A}) //设置材质
    );
    scene.add(circle);
    circle.position.set(120, 100, 0);

    var cube4 = new THREE.Mesh(
        new THREE.CubeGeometry(80, 30, 30), //设置形状
        new THREE.MeshLambertMaterial({color: 0xDC143C}) //设置材质
    );
    scene.add(cube4);
    cube4.position.set(30, 0, -30);


    var cube5 = new THREE.Mesh(
        new THREE.CubeGeometry(80, 30, 30), //设置形状
        new THREE.MeshLambertMaterial({color: 0xDC143C}) //设置材质
    );
    scene.add(cube5);
    cube5.position.set(30, 190, -30);


    var cube6 = new THREE.Mesh(
        new THREE.CubeGeometry(30, 50, 30), //设置形状
        new THREE.MeshLambertMaterial({color: 0xDC143C}) //设置材质
    );
    scene.add(cube6);
    cube6.position.set(130, 190, -30);

    var cube7 = new THREE.Mesh(
        new THREE.CubeGeometry(30, 50, 30), //设置形状
        new THREE.MeshLambertMaterial({color: 0xDC143C}) //设置材质
    );
    scene.add(cube7);
    cube7.position.set(130, 0, -30);

    var cube8 = new THREE.Mesh(
        new THREE.CubeGeometry(5, 5, 20), //设置形状
        new THREE.MeshLambertMaterial({color: 0xDC143C}) //设置材质
    );
    scene.add(cube8);
    cube8.position.set(160, 85, -30);


    var cube9 = new THREE.Mesh(
        new THREE.CubeGeometry(5, 5, 20), //设置形状
        new THREE.MeshLambertMaterial({color: 0xDC143C}) //设置材质
    );
    scene.add(cube9);
    cube9.position.set(160, 105, -30);

    var cube10 = new THREE.Mesh(
        new THREE.CubeGeometry(5, 25, 5), //设置形状
        new THREE.MeshLambertMaterial({color: 0x808080}) //设置材质
    );
    scene.add(cube10);
    cube10.position.set(160, 95, -20);

    var cube10 = new THREE.Mesh(
        new THREE.CubeGeometry(3, 125, 3), //设置形状
        new THREE.MeshLambertMaterial({color: 0x000000}) //设置材质
    );
    scene.add(cube10);
    cube10.position.set(160, 17, -40);

    var cube11 = new THREE.Mesh(
        new THREE.CubeGeometry(3, 125, 3), //设置形状
        new THREE.MeshLambertMaterial({color: 0x000000}) //设置材质
    );
    scene.add(cube11);
    cube11.position.set(160, 173, -40);

    var cube12 = new THREE.Mesh(
        new THREE.CubeGeometry(3, 270, 3), //设置形状
        new THREE.MeshLambertMaterial({color: 0x000000}) //设置材质
    );
    scene.add(cube12);
    cube12.position.set(-40, 97, -30);

    var cube13 = new THREE.Mesh(
        new THREE.CubeGeometry(205, 3, 3), //设置形状
        new THREE.MeshLambertMaterial({color: 0x000000}) //设置材质
    );
    scene.add(cube13);
    cube13.position.set(60, -40, -30);


    var cube14 = new THREE.Mesh(
        new THREE.CubeGeometry(205, 3, 3), //设置形状
        new THREE.MeshLambertMaterial({color: 0x000000}) //设置材质
    );
    scene.add(cube14);
    cube14.position.set(60, 230, -30);
    var loader = new THREE.OBJLoader();
    loader.load('./people.obj', function (result) {
        self = result;
        self.rotateX(3.14 / 2);
        self.rotateY(3.14 / 2);
        turn = 0;
        scene.add(self);
        self.position.set(sx, sy, 0);
        renderer.render(scene, camera);
    });

    //self = new THREE.Mesh(
    //    new THREE.CubeGeometry(3, 3, 3), //设置形状
    //    new THREE.MeshLambertMaterial({color: 0x000000}) //设置材质
    //);


}

function sendAlert() {
    //alert("hello");
}


count = 0;
array = [];

function drawUser(from, webgldata) {
    //alert(webgldata);
    //定时更新其他用户的信息，其中省略号表示通过通讯获得的变量
    //其中x和y是两个位置信息表示
    initScene();
    initLight();
    initObject();
    count = 0;
    array = webgldata;
    console.log('welgldata  ' + array);
    for (var i = 0; i < array.length; i++) {
        if (array[i][0] == from) {
            self.position.set(array[i][1][0], array[i][1][1], 0);
            console.log('after' + array[i][1][0] + "   " + array[i][1][1]);
            array.splice(i, 1);
            renderer.render(scene, camera);
            break;
        }
    }
    for (var i = 0; i < array.length; i++) {
        var loader = new THREE.OBJLoader();
        loader.load('./people.obj', function (result) {
            console.log('draw' + array[count][1][0] + " " + array[count][1][1]);
            result.rotateX(3.14 / 2);
            result.rotateY(3.14 / 2);
            scene.add(result);
            result.position.set(array[count][1][0], array[count][1][1], 0);
            count += 1;
            //alert('from ' + from + " to " + dname);
            renderer.render(scene, camera);
        })

    }
    //renderer.render(scene, camera);

}

//ThreeJs的启动过程
function threeStart() {
    initThree();//初始化
    initCamera();//初始化相机
    initScene();//初始化场景
    initLight();//初始化灯光
    initObject();//初始化物体
    renderer.clear();//渲染器
    renderer.render(scene, camera);//开始渲i
    //var timeID = window.setInterval(drawUser, 500);
    window.addEventListener('keydown', function (event) {
        if ($('#input').is(':focus')) {
            //DO NOT interrupt user's input
            return;
        }
        var ip = 0;
        var k = event.keyCode;
        if (k == 37) {
            var key = 3;
            var d = key - turn + 4;
            self.rotateY(angles[d]);
            turn = 3;
            if (d == 0 || d == 4)
                sy = sy - 10;
            ip = 1;
        } else if (k == 38) {
            var key = 2;
            var d = key - turn + 4;
            self.rotateY(angles[d]);
            turn = 2;
            if (d == 0 || d == 4)
                sx = sx - 10;
            ip = 1;
        } else if (k == 39) {
            var key = 1;
            var d = key - turn + 4;
            self.rotateY(angles[d]);
            turn = 1;
            if (d == 0 || d == 4)
                sy = sy + 10;
            ip = 1;
        } else if (k == 40) {
            var key = 0;
            var d = key - turn + 4;
            self.rotateY(angles[d]);
            turn = 0;
            if (d == 0 || d == 4)
                sx = sx + 10;
            ip = 1;
        } else if (k == 32) {
            if (sx <= 90 && sx >= 20 && sy >= 0 && sy <= 20) {
                alert("entering...");
                alert("computer center!");
                window.open("http://www.ecampus.fudan.edu.cn");
            }
            if (sx <= 60 && sx >= 40 && sy >= 70 && sy <= 120) {
                alert("entering...");
                alert("guanghua building");
                window.open("http://www.fudan.edu.cn");
            }
            if (sx >= 40 && sx <= 90 && sy >= 170 && sy <= 190) {

                alert("entering...");
                alert("dining hall");
            }
            if (sx >= 140 && sx <= 160 && sy >= 160 && sy <= 200) {
                alert("entering...");
                alert("dormitory");
                window.open("http://elife.fudan.edu.cn");
            }
            if (sx >= 140 && sx <= 160 && sy >= -10 && sy <= 30) {
                alert("entering...");
                alert("Teaching building");
                window.open("http://www.jwc.fudan.edu.cn");
            }
            if (sx >= 100 && sx <= 140 && sy >= 80 && sy <= 120) {
                alert("entering...");
                alert("guangcao");
                window.open("http://www.fdty.fudan.edu.cn");
            }
        } else if (k == 65) {
            if (cy >= 0) {
                cy -= 40;
                setCamera();
            }
        }
        else if (k == 68) {
            if (cy <= 240) {
                cy += 40;
                setCamera();
            }
        }
        self.position.set(sx, sy, 0);
        renderer.render(scene, camera);
        if (ip == 1) {
            //用户的位置发生改变
            update([sx, sy]);
        }
    }, false);
}
