import './style.css'

import  * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import "@lottiefiles/lottie-player";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth /window.innerHeight,0.1,1000);

const light = new THREE.PointLight(0x404040,1)

light.position.set(0,0,-30)
scene.add(light)

var amlight = new THREE.AmbientLight(0x404040,0.2);
scene.add(amlight);

const directionalLight = new THREE.DirectionalLight( 0xffffff,0.6);
directionalLight.position.set(85, 25.4,40)
scene.add( directionalLight );

const directionalLight2 = new THREE.DirectionalLight( 0xffffff,0.2);
directionalLight2.position.set(-85, 25.4,40)
scene.add( directionalLight2 );

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2(1, 1);
var intersects = [];

var nave,navemesh,letras,rayo,astro,p1,p2,p3,p4,emp1,serv1,serv2,serv3,serv4,serv5,serv6,serv7,serv8,serv9,serv10,serv11,serv12;
var planes = [];

planes.push(navemesh);
planes.push(letras);
planes.push(rayo);
planes.push(astro);
planes.push(p1);
planes.push(p2);
planes.push(p3);
planes.push(p4);
const loader = new GLTFLoader().setPath( 'models/' );

loader.load( 'nave.glb', function ( gltf ) {
  navemesh = gltf.scene;
  scene.add( gltf.scene );
 
  navemesh.scale.x =60;
  navemesh.scale.y =60;
  navemesh.scale.z =60;

  navemesh.position.y=-20;
  renderer.render(scene,camera);
  createjs.Tween.get(navemesh.position, { loop: true }).to({ y: -18.5 }, 1500, createjs.Ease.getPowInOut(1)).wait(50).to({ y: -20 },1500,createjs.Ease.getPowInOut(1));
} );

loader.load( 'letras.glb', function ( gltf ) {
  letras = gltf.scene;
  scene.add( gltf.scene );
 
  letras.scale.x =-60;
  letras.scale.y =60;
  letras.scale.z =60;

  letras.position.x=0;
  letras.position.y=-2;
  letras.position.z=-65;

  letras.rotation.x=0.1;
  renderer.render(scene,camera);

} );
loader.load( 'astronaut.glb', function ( gltf ) {
  astro = gltf.scene;
  scene.add( gltf.scene );
 
  astro.scale.x =-60;
  astro.scale.y =60;
  astro.scale.z =60;

  astro.position.x=0;
  astro.position.y=-20;
  astro.position.z=0;
  renderer.render(scene,camera);

} );
loader.load( 'rayo.glb', function ( gltf ) {
  rayo = gltf.scene;
  scene.add( gltf.scene );
 
  rayo.scale.x =-60;
  rayo.scale.y =60;
  rayo.scale.z =60;

  rayo.position.x=0;
  rayo.position.y=-20;
  rayo.position.z=0;
  renderer.render(scene,camera);

} );


loader.load( 'p1.glb', function ( gltf ) {
  p1 = gltf.scene;
  scene.add( gltf.scene );
 
  p1.scale.x =-85;
  p1.scale.y =85;
  p1.scale.z =85;

  p1.position.x=-75;
  p1.position.y=5;
  p1.position.z=-250;
  renderer.render(scene,camera);

} );
loader.load( 'p2new.glb', function ( gltf ) {
  p2 = gltf.scene;
  scene.add( gltf.scene );
 
  p2.scale.x =80;
  p2.scale.y =80;
  p2.scale.z =80;

  p2.position.x=150;
  p2.position.y=-55;
  p2.position.z=-150;

  p2.rotation.x=0.7;
  p2.rotation.z=5.5;
  renderer.render(scene,camera);

} );
loader.load( 'p3new.glb', function ( gltf ) {
  p3 = gltf.scene;
  scene.add( gltf.scene );
 
  p3.scale.x =180;
  p3.scale.y =180;
  p3.scale.z =180;

  p3.position.x=100;
  p3.position.y=10;
  p3.position.z=-50;

  renderer.render(scene,camera);


} );
loader.load( 'p4new.glb', function ( gltf ) {
  p4 = gltf.scene;
  scene.add( gltf.scene );
 
  p4.scale.x =120;
  p4.scale.y =120;
  p4.scale.z =120;

  p4.position.x=-105;
  p4.position.y=-55;
  p4.position.z=-55;

  renderer.render(scene,camera);

} );

loader.load( 'emp1new.glb', function ( gltf ) {
  emp1 = gltf.scene;
  scene.add( gltf.scene );
 
  emp1.scale.x =120;
  emp1.scale.y =120;
  emp1.scale.z =120;

  emp1.position.x=0;
  emp1.position.y=0;
  emp1.position.z=80;

  emp1.rotation.z=-0;
  renderer.render(scene,camera);

} );
loader.load( 'juegosdevideo.glb', function ( gltf ) {
  serv1 = gltf.scene;
  scene.add( gltf.scene );
 
  serv1.scale.x =60;
  serv1.scale.y =60;
  serv1.scale.z =60;

  serv1.position.x=320;
  serv1.position.y=22;
  serv1.position.z=-50;

  serv1.rotation.y=3.15;
  renderer.render(scene,camera);

} );

loader.load( 'realidadvirtual.glb', function ( gltf ) {
  serv2 = gltf.scene;
  scene.add( gltf.scene );
 
  serv2.scale.x =60;
  serv2.scale.y =60;
  serv2.scale.z =60;

  serv2.position.x=320;
  serv2.position.y=15;
  serv2.position.z=-50;

  serv2.rotation.y=3.15;
  renderer.render(scene,camera);

} );
loader.load( 'realidadaumentada.glb', function ( gltf ) {
  serv3 = gltf.scene;
  scene.add( gltf.scene );
 
  serv3.scale.x =60;
  serv3.scale.y =60;
  serv3.scale.z =60;

  serv3.position.x=320;
  serv3.position.y=8;
  serv3.position.z=-50;

  serv3.rotation.y=3.15;
  renderer.render(scene,camera);

} );

loader.load( 'tour.glb', function ( gltf ) {
  serv4 = gltf.scene;
  scene.add( gltf.scene );
 
  serv4.scale.x =60;
  serv4.scale.y =60;
  serv4.scale.z =60;

  serv4.position.x=320;
  serv4.position.y=1;
  serv4.position.z=-50;

  serv4.rotation.y=3.15;
  renderer.render(scene,camera);

} );
loader.load( 'gamification.glb', function ( gltf ) {
  serv5 = gltf.scene;
  scene.add( gltf.scene );
 
  serv5.scale.x =60;
  serv5.scale.y =60;
  serv5.scale.z =60;

  serv5.position.x=320;
  serv5.position.y=-6;
  serv5.position.z=-50;

  serv5.rotation.y=3.15;
  renderer.render(scene,camera);

} );

loader.load( 'archivizplus.glb', function ( gltf ) {
  serv6 = gltf.scene;
  scene.add( gltf.scene );
 
  serv6.scale.x =60;
  serv6.scale.y =60;
  serv6.scale.z =60;

  serv6.position.x=320;
  serv6.position.y=-13;
  serv6.position.z=-50;

  serv6.rotation.y=3.15;
  renderer.render(scene,camera);

} );
loader.load( 'apps.glb', function ( gltf ) {
  serv7 = gltf.scene;
  scene.add( gltf.scene );
 
  serv7.scale.x =60;
  serv7.scale.y =60;
  serv7.scale.z =60;

  serv7.position.x=320;
  serv7.position.y=-20;
  serv7.position.z=-50;

  serv7.rotation.y=3.15;
  renderer.render(scene,camera);

} );

loader.load( 'tienda.glb', function ( gltf ) {
  serv8 = gltf.scene;
  scene.add( gltf.scene );
 
  serv8.scale.x =60;
  serv8.scale.y =60;
  serv8.scale.z =60;

  serv8.position.x=320;
  serv8.position.y=-27;
  serv8.position.z=-50;

  serv8.rotation.y=3.15;
  renderer.render(scene,camera);

} );
loader.load( 'redes.glb', function ( gltf ) {
  serv9 = gltf.scene;
  scene.add( gltf.scene );
 
  serv9.scale.x =60;
  serv9.scale.y =60;
  serv9.scale.z =60;

  serv9.position.x=320;
  serv9.position.y=-34;
  serv9.position.z=-50;

  serv9.rotation.y=3.15;
  renderer.render(scene,camera);

} );

loader.load( 'disenografico.glb', function ( gltf ) {
  serv10 = gltf.scene;
  scene.add( gltf.scene );
 
  serv10.scale.x =60;
  serv10.scale.y =60;
  serv10.scale.z =60;

  serv10.position.x=320;
  serv10.position.y=-41;
  serv10.position.z=-50;

  serv10.rotation.y=3.15;
  renderer.render(scene,camera);

} );
loader.load( 'web.glb', function ( gltf ) {
  serv11 = gltf.scene;
  scene.add( gltf.scene );
 
  serv11.scale.x =60;
  serv11.scale.y =60;
  serv11.scale.z =60;

  serv11.position.x=320;
  serv11.position.y=-48;
  serv11.position.z=-50;

  serv11.rotation.y=3.15;
  renderer.render(scene,camera);

} );

loader.load( 'writing.glb', function ( gltf ) {
  serv12 = gltf.scene;
  scene.add( gltf.scene );
 
  serv12.scale.x =60;
  serv12.scale.y =60;
  serv12.scale.z =60;

  serv12.position.x=320;
  serv12.position.y=-55;
  serv12.position.z=-50;

  serv12.rotation.y=3.15;
  renderer.render(scene,camera);

} );
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),alpha:true
});
const loaderbg = new THREE.TextureLoader();
loaderbg.load('imgs/bg.jpg' , function(texture)
            {
             scene.background = texture;  
            });

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setClearColor(0xffffff, 0);
camera.position.setZ(30);

renderer.render(scene,camera);


let GoUp=true;
let LimitPos=15;
var camactual=0;
/*
const controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 8;
controls.maxDistance = 800;
controls.target.set( 0, 0, 0);
controls.update();
*/


document.getElementById("contacto").addEventListener("click", contacto);
document.getElementById("servicios").addEventListener("click", servicio);



function servicio(){
  const posxallegar=20;
  document.getElementById("writeme").style.opacity=0;
  createjs.Tween.get(camera.rotation, { loop: false }).to({y:0 }, 1500, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv1.position, { loop: false }).to({x:posxallegar }, 1000, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv2.position, { loop: false }).to({x:posxallegar }, 1100, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv3.position, { loop: false }).to({x:posxallegar }, 1200, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv4.position, { loop: false }).to({x:posxallegar }, 1300, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv5.position, { loop: false }).to({x:posxallegar }, 1400, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv6.position, { loop: false }).to({x:posxallegar }, 1500, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv7.position, { loop: false }).to({x:posxallegar }, 1600, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv8.position, { loop: false }).to({x:posxallegar }, 1700, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv9.position, { loop: false }).to({x:posxallegar }, 1800, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv10.position, { loop: false }).to({x:posxallegar }, 1900, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv11.position, { loop: false }).to({x:posxallegar }, 2000, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv12.position, { loop: false }).to({x:posxallegar }, 2100, createjs.Ease.getPowInOut(2));
}
function returnservicioinicial(){
  const posxallegar=320;
  createjs.Tween.get(serv1.position, { loop: false }).to({x:posxallegar }, 1000, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv2.position, { loop: false }).to({x:posxallegar }, 1100, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv3.position, { loop: false }).to({x:posxallegar }, 1200, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv4.position, { loop: false }).to({x:posxallegar }, 1300, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv5.position, { loop: false }).to({x:posxallegar }, 1400, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv6.position, { loop: false }).to({x:posxallegar }, 1500, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv7.position, { loop: false }).to({x:posxallegar }, 1600, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv8.position, { loop: false }).to({x:posxallegar }, 1700, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv9.position, { loop: false }).to({x:posxallegar }, 1800, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv10.position, { loop: false }).to({x:posxallegar }, 1900, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv11.position, { loop: false }).to({x:posxallegar }, 2000, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(serv12.position, { loop: false }).to({x:posxallegar }, 2100, createjs.Ease.getPowInOut(2));

}
function nosotros(){
  createjs.Tween.get(document.getElementById("writeme").style, { loop: false }).to({opacity:0 }, 500, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(camera.rotation, { loop: false }).to({y:3.15 }, 1500, createjs.Ease.getPowInOut(2));
  returnservicioinicial()
}
function contacto(){

  createjs.Tween.get(document.getElementById("writeme").style, { loop: false }).to({opacity:1 }, 1500, createjs.Ease.getPowInOut(2));
  createjs.Tween.get(camera.rotation, { loop: false }).to({y:3.15 }, 1500, createjs.Ease.getPowInOut(2));
  returnservicioinicial()
}

function onClick() {

  event.preventDefault();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObject(scene, true);

  if (intersects.length > 0) {
	
		var object = intersects[0].object;

    object.material.color.set( Math.random() * 0xffffff );

  }
	
}
function animate(){
  requestAnimationFrame(animate);
    TWEEN.update()
  if(p1 && p2 && p3 && p4){
  p1.position.z -= 0.001;
  p2.rotation.z -= 0.001;
  p3.rotation.y -= 0.0004;
  p4.rotation.y -= 0.004;
  p4.rotation.x -= 0.002;
  raycaster.setFromCamera(mouse, camera);
 /*
  if(GoUp){
    navemesh.position.y += 0.001;

    if(navemesh.position.y>-17.5){
      GoUp=false;
    }
  }
  else{
    navemesh.position.y -= 0.001;
    if(navemesh.position.y<-19){
      GoUp=true;
    }
  }*/
  astro.rotation.y +=0.01;
}

  renderer.render(scene,camera);
}


renderer.domElement.addEventListener('click', onClick, false);
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  

}

animate();
