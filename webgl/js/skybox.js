var camera, scene, renderer, controls;
var geometry, material, mesh;

function init() {


	scene = new THREE.Scene();
	var width = window.innerWidth;
	var height = window.innerHeight;

	camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 20000);
	camera.position.set(-100, 200, 700); // back out on the z-axis
	scene.add(camera);

	var light = new THREE.DirectionalLight(0xeeddff, 1);
	light.position.set(1, 1, 1); // x, y, z
	scene.add(light);

	var light2 = new THREE.DirectionalLight(0xffffee, .3);
	light.position.set(-1, 1, 1); // x, y, z
	scene.add(light2);


	var spotlight = new THREE.SpotLight(0x00ff00);
	spotlight.position.set(800, 800, -800);
	// spotlight.shadowCameraVisible = true;
	spotlight.shadowDarkness = 0.3;
	spotlight.intensity = 2;
	spotlight.castShadow = true; // must be set to true
	// scene.add(spotlight);

	//
	// var light = new THREE.AmbientLight( 0x404040 ); // soft white light
	// scene.add( light );



		var loader = new THREE.STLLoader();
		loader.load( 'images/death-star.stl', function ( geometry ) {

		var deathTexture = THREE.ImageUtils.loadTexture('images/ds3-bw.jpg'); // not working
		var material = new THREE.MeshLambertMaterial({map: deathTexture, side: THREE.DoubleSide}); //not working
		object = new THREE.Mesh( geometry, material)
		object.scale.set(5,5,5);
		object.rotation.x = 300;
		object.position.x = -170
		object.position.z = -50;
		object.position.y = -50;
		object.castShadow = true;



		scene.add(object);

		});

			// var objLoader = new THREE.OBJLoader();
	    // objLoader.load('images/death-star.obj', function (obj) {
	    //     obj.traverse(function (child) {
			// 			var deathTexture = THREE.ImageUtils.loadTexture('images/ds3-bw.jpg');
			// 			var material = new THREE.MeshLambertMaterial({color: 0xffeeff});
	    //         if (child instanceof THREE.Mesh) {
	    //             child.material = material;
	    //         }
			//
	    //     });
			// 		obj.position.y = 100;
	    //     scene.add(obj);
	    // });

	var objectTexture = THREE.ImageUtils.loadTexture('images/ds3-bw.jpg');

	material = new THREE.MeshLambertMaterial({map: objectTexture});

	geometry = new THREE.SphereGeometry(100, 50, 50);
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.y = -50;
	mesh.position.x = 200;
	mesh.castShadow = true;
	scene.add(mesh);

	var planeTexture = THREE.ImageUtils.loadTexture('images/clouds.png');

	planeGeometry = new THREE.PlaneGeometry(8000, 8000, 10, 10);
	planeMaterial = new THREE.MeshLambertMaterial({map: planeTexture, transparent:true, opacity: 0.1, side: THREE.DoubleSide});
	plane = new THREE.Mesh(planeGeometry, planeMaterial);
	plane.rotation.x = Math.PI / -2;
	plane.position.y = 50;
	plane.receiveShadow = true;
	scene.add(plane);


	plane2 = new THREE.Mesh(planeGeometry, planeMaterial);
	plane2.rotation.x = Math.PI / -2;
	plane2.position.y = 150;
	plane2.receiveShadow = true;
	scene.add(plane2);

	plane3 = new THREE.Mesh(planeGeometry, planeMaterial);
	plane3.rotation.x = Math.PI / -2;
	plane3.position.y = 200;
	plane3.receiveShadow = true;
	scene.add(plane3);

	scene.fog = new THREE.Fog(0x000111,.5,5000); // hex, density


	var materialArray = [];

	var xpos = THREE.ImageUtils.loadTexture('images/space-xpos.png');
	materialArray.push(new THREE.MeshBasicMaterial({map: xpos}));

	var xneg = THREE.ImageUtils.loadTexture('images/space-xneg.png');
	materialArray.push(new THREE.MeshBasicMaterial({map: xneg}));

	var ypos = THREE.ImageUtils.loadTexture('images/space-ypos.png');
	materialArray.push(new THREE.MeshBasicMaterial({map: ypos}));

	var yneg = THREE.ImageUtils.loadTexture('images/space-yneg.png');
	materialArray.push(new THREE.MeshBasicMaterial({map: yneg}));

	var zpos = THREE.ImageUtils.loadTexture('images/space-zpos.png');
	materialArray.push(new THREE.MeshBasicMaterial({map: zpos}));

	var zneg = THREE.ImageUtils.loadTexture('images/space-zneg.png');
	materialArray.push(new THREE.MeshBasicMaterial({map: zneg}));

	for (var i = 0; i < 6; i++) {
		materialArray[i].side = THREE.BackSide; // set each image to backside
	}

	var skyboxMaterial = new THREE.MeshFaceMaterial(materialArray);
	var skyboxGeometry = new THREE.BoxGeometry(5000, 5000, 5000);
	var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
	scene.add(skybox);

	renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
	renderer.setSize(width, height);
	renderer.shadowMapEnabled = true;
	controls = new THREE.OrbitControls(camera, renderer.domElement);

	document.body.appendChild(renderer.domElement);
}

function animate() {
	requestAnimationFrame(animate);

	var date = new Date();
		var timer = date.getTime() * 0.0002; // get time string
		camera.position.x = 800 * Math.cos(timer);
		camera.position.z = 800 * Math.sin(timer);
		controls.update();

	renderer.render(scene, camera);
	controls.update();
}

function windowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix(); // updates camera
	renderer.setSize(window.innerWidth, window.innerHeight);
}

init();
animate();


window.addEventListener('resize', windowResize);
