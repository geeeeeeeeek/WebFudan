var self;
var sx = 260, sy = 100, cy = 100, flag;
var angles = [0, 3.14 / 2, 3.14,3.14 / 2 * 3, 3.14 * 2, 3.14 / 2 * 5, 3.14 / 2 * 6,     3.14 / 2 * 7];
var spinx = [10,0,-10,0];
var spiny = [0,10,0,-10];
var lookx = [50,0,-50,0];
var looky = [0,50,0,-50];
var backx = [-20,0,20,0];
var backy = [0,-20,0,20];
var cha = 0;
var turn = 0;
var nextx = spinx[turn];
var nexty = spiny[turn];
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
    cha = 0;
}
//相机
var camera;

function initCamera() {
    cy = 100;
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.x = sx + backx[turn];
    camera.position.y = sy + backy[turn];
    camera.position.z = 20;
    camera.up.x = 0;
    camera.up.y = 0;
    camera.up.z = 1;
    camera.lookAt({x: sx + lookx[turn], y: sy + looky[turn], z: 20});
}

function moveCamera(){
    camera.position.x = sx + backx[turn];
    camera.position.y = sy + backy[turn];
    camera.position.z = 20;
    camera.up.x = 0;
    camera.up.y = 0;
    camera.up.z = 1;
    camera.lookAt({x: sx + lookx[turn], y: sy + looky[turn], z: 20});
}

function setCamera() {
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.x = 300;
    camera.position.y = cy;
    camera.position.z = 300;
    camera.up.x = 0;
    camera.up.y = 0;
    camera.up.z = 1;
    camera.lookAt({x: 100, y: 100, z: 20});
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
    light.position.set(500, 100, 300);
    scene.add(light);
}
//立方体

function initObject() {
    //sx = sy = 100;
    var groundGeometry = new THREE.PlaneGeometry(2000, 2000, 1, 1);
    ground = new THREE.Mesh(groundGeometry,  new THREE.MeshLambertMaterial({
        color: 0xD3D3D3
    }));
    ground.position.y = -500;
    ground.position.x = -500;
    this.scene.add(ground);

    var skyBoxGeometry = new THREE.CubeGeometry(700, 500, 500);
    var skyBoxMaterial = new THREE.MeshBasicMaterial(
        { color: 0x87CEEB, side: THREE.BackSide });
    var skyBox = new THREE.Mesh(skyBoxGeometry, skyBoxMaterial);
    scene.add(skyBox);
    var cube1 = new THREE.Mesh(
        new THREE.CubeGeometry(20, 40, 33), //设置形状
        new THREE.MeshLambertMaterial({color: 0x646C75}) //设置材质
    );
    scene.add(cube1);
    cube1.position.set(58, 150, 20);

    var loade = new THREE.ColladaLoader();
    loade.load("GuangHua_Building.dae",function(result){
        scene.add(result.scene);
        result.scene.rotateZ(-3.14/2);
        result.scene.position.set(20,130,0);

        renderer.render(scene, camera);

    });

    var loade = new THREE.ColladaLoader();
    loade.load("sushe.dae",function(result){
        scene.add(result.scene);
        result.scene.position.set(100,-90,0);
        renderer.render(scene, camera);

    });

    var loade = new THREE.ColladaLoader();
    loade.load("teaching.dae",function(result){
        scene.add(result.scene);
        result.scene.position.set(0,0,0);
        renderer.render(scene, camera);

    });

    var geometry = new THREE.ImageUtils.loadTexture("Max/grass.jpg")
    var cube = new THREE.Mesh(
        new THREE.CubeGeometry(50, 120,2), //设置形状
        new THREE.MeshBasicMaterial({map:geometry,color:0xffffff,wireframe:false}) //设置材质
    );
    scene.add(cube);
    cube.position.set(125, 100, 0);

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
                sy = sy + spiny[turn];
            if (cha == 0)
                moveCamera();
            else setCamera();
            ip = 1;
        } else if (k == 38) {
            var key = 2;
            var d = key - turn + 4;
            self.rotateY(angles[d]);
            turn = 2;

            if (d == 0 || d == 4)
                sx = sx + spinx[turn];
            if (cha == 0)
                moveCamera();
            else setCamera();
            ip = 1;
        } else if (k == 39) {
            var key = 1;
            var d = key - turn + 4;
            self.rotateY(angles[d]);
            turn = 1;

            if (d == 0 || d == 4)
                sy = sy + spiny[turn];
            if (cha == 0)
                moveCamera();
            else setCamera();
            ip = 1;
        } else if (k == 40) {
            var key = 0;
            var d = key - turn + 4;
            self.rotateY(angles[d]);
            turn = 0;

            if (d == 0 || d == 4)
                sx = sx + spinx[turn];
            if (cha == 0)
                moveCamera();
            else setCamera();
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
        } else if (k == 80) {
            cha = 1 - cha;
            if (cha == 1)
                setCamera();
            else moveCamera();
        }else if (k == 65 && cha == 1) {
            if (cy >= 0) {
                cy -= 40;
                setCamera();
            }
        }
        else if (k == 68 && cha == 1) {
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
