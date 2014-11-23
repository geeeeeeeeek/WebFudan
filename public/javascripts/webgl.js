var self;
var sx,sy;

//渲染器初始化
    var renderer;
    function initThree() {
        width = document.getElementById('canvas-frame').clientWidth;
        height = document.getElementById('canvas-frame').clientHeight;
        renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(width, height );
        document.getElementById('canvas-frame').appendChild(renderer.domElement);
        renderer.setClearColorHex(0xf9f9f9, 1.0);
   }
   //相机
   var camera;
   function initCamera() {
      camera = new THREE.PerspectiveCamera( 45 , width / height , 1 , 10000 );
      camera.position.x = 300;
      camera.position.y = 100;
      camera.position.z = 300;
      camera.up.x = 0;
      camera.up.y = 0;
      camera.up.z = 1;
      camera.lookAt( {x:100, y:100, z:0 } );
  }
  //场景
  var scene;
      function initScene() {
      scene = new THREE.Scene();
  }
  //灯光
  var light;
  function initLight() {
      light = new THREE.DirectionalLight(0xFFFFFF, 1.0, 0);
      light.position.set( 100, 200, 300 );
      scene.add(light);
  }
  //立方体
  
  function initObject(){
    sx = sy = 100;
      var cube1 = new THREE.Mesh(
         new THREE.CubeGeometry(30,30,150), //设置形状
         new THREE.MeshLambertMaterial({color: 0x5F9EA0}) //设置材质
      );
   scene.add(cube1);
   cube1.position.set(0,75,0);

   var cube2 = new THREE.Mesh(
         new THREE.CubeGeometry(30,30,150), //设置形状
         new THREE.MeshLambertMaterial({color: 0x5F9EA0}) //设置材质
      );
   scene.add(cube2);
   cube2.position.set(0,115,0);

	var cube3 = new THREE.Mesh(
         new THREE.CubeGeometry(30,90,50), //设置形状
         new THREE.MeshLambertMaterial({color: 0xD3D3D3}) //设置材质
      );
   scene.add(cube3);
   cube3.position.set(0,95,-50);

   var circle = new THREE.Mesh(
         new THREE.CircleGeometry(30,30), //设置形状
         new THREE.MeshLambertMaterial({color: 0x00FA9A}) //设置材质
      );
   scene.add(circle);
   circle.position.set(120,100,0);

	var cube4 = new THREE.Mesh(
         new THREE.CubeGeometry(80,30,30), //设置形状
         new THREE.MeshLambertMaterial({color: 0xDC143C}) //设置材质
      );
   scene.add(cube4);
   cube4.position.set(30,0,-30);


	var cube5 = new THREE.Mesh(
         new THREE.CubeGeometry(80,30,30), //设置形状
         new THREE.MeshLambertMaterial({color: 0xDC143C}) //设置材质
      );
   scene.add(cube5);
   cube5.position.set(30,190,-30);


	var cube6 = new THREE.Mesh(
         new THREE.CubeGeometry(30,50,30), //设置形状
         new THREE.MeshLambertMaterial({color: 0xDC143C}) //设置材质
      );
   scene.add(cube6);
   cube6.position.set(130,190,-30);

	var cube7 = new THREE.Mesh(
         new THREE.CubeGeometry(30,50,30), //设置形状
         new THREE.MeshLambertMaterial({color: 0xDC143C}) //设置材质
      );
   scene.add(cube7);
   cube7.position.set(130,0,-30);

	var cube8 = new THREE.Mesh(
         new THREE.CubeGeometry(5,5,20), //设置形状
         new THREE.MeshLambertMaterial({color: 0xDC143C}) //设置材质
      );
   scene.add(cube8);
   cube8.position.set(160,85,-30);
   

	var cube9 = new THREE.Mesh(
         new THREE.CubeGeometry(5,5,20), //设置形状
         new THREE.MeshLambertMaterial({color: 0xDC143C}) //设置材质
      );
   scene.add(cube9);
   cube9.position.set(160,105,-30);

	var cube10 = new THREE.Mesh(
         new THREE.CubeGeometry(5,25,5), //设置形状
         new THREE.MeshLambertMaterial({color: 0x808080}) //设置材质
      );
   scene.add(cube10);
   cube10.position.set(160,95,-20);

	var cube10 = new THREE.Mesh(
         new THREE.CubeGeometry(3,125,3), //设置形状
         new THREE.MeshLambertMaterial({color: 0x000000}) //设置材质
      );
   scene.add(cube10);
   cube10.position.set(160,17,-40);

	var cube11 = new THREE.Mesh(
         new THREE.CubeGeometry(3,125,3), //设置形状
         new THREE.MeshLambertMaterial({color: 0x000000}) //设置材质
      );
   scene.add(cube11);
   cube11.position.set(160,173,-40);

	var cube12 = new THREE.Mesh(
         new THREE.CubeGeometry(3,270,3), //设置形状
         new THREE.MeshLambertMaterial({color: 0x000000}) //设置材质
      );
   scene.add(cube12);
   cube12.position.set(-40,97,-30);

	var cube13 = new THREE.Mesh(
         new THREE.CubeGeometry(205,3,3), //设置形状
         new THREE.MeshLambertMaterial({color: 0x000000}) //设置材质
      );
   scene.add(cube13);
   cube13.position.set(60,-40,-30);


	var cube14 = new THREE.Mesh(
         new THREE.CubeGeometry(205,3,3), //设置形状
         new THREE.MeshLambertMaterial({color: 0x000000}) //设置材质
      );
   scene.add(cube14);
   cube14.position.set(60,230,-30);

	self = new THREE.Mesh(
         new THREE.CubeGeometry(3,3,3), //设置形状
         new THREE.MeshLambertMaterial({color: 0x000000}) //设置材质
      );
   scene.add(self);
   self.position.set(sx,sy,0);


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
	window.addEventListener('keydown',function(event){
		var k = event.keyCode;
		if (k == 37){
			sy = sy - 10;
		}else if (k == 38){
			sx = sx - 10;
		}else if (k == 39){
			sy = sy + 10;
		}else if (k == 40) {
			sx = sx + 10;
		}
		self.position.set(sx,sy,0);
		renderer.render(scene,camera);
	},false);
}
