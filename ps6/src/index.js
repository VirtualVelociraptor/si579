////////BELOW ARE THE 3rd PARTY JS LIBRARIES THAT I USED. THEY ARE REFERENCED IN MY HTML FILE ////////////
/////// I USED THEM COLLECTIVLEY TO ADD USER INTERACTIVTY TO THE VR PORTION OF THE WEB PAGE /////////////

//<script src="https://kit.fontawesome.com/28511594f3.js" crossorigin="anonymous"></script>

// <script src="js/play-on-click.js"></script>
// <script src="js/controller-menu.js"></script>

// <script src="https://aframe.io/releases/1.1.0/aframe.min.js"></script>
// <script src="https://unpkg.com/aframe-environment-component@1.1.0/dist/aframe-environment-component.min.js"></script>
// <script src="https://rawgit.com/mayognaise/aframe-gif-shader/master/dist/aframe-gif-shader.min.js"></script>
    
// <script src="//cdn.rawgit.com/donmccurdy/aframe-physics-system/v3.1.2/dist/aframe-physics-system.min.js"></script>
// <script src="https://unpkg.com/aframe-physics-extras/dist/aframe-physics-extras.min.js"></script>
// <script src="https://unpkg.com/aframe-event-set-component@4.0.1/dist/aframe-event-set-component.min.js"></script>
// <script src="https://unpkg.com/aframe-layout-component/dist/aframe-layout-component.min.js"></script>
// <script src="https://unpkg.com/super-hands@3.0.0/dist/super-hands.min.js"></script>
// <script src="https://rawgit.com/fernandojsg/aframe-teleport-controls/master/dist/aframe-teleport-controls.min.js"></script>
// <script src="https://unpkg.com/aframe-controller-cursor-component@0.2.7/dist/aframe-controller-cursor-component.min.js"></script> 

// <script src="//unpkg.com/aframe-particle-system-component@1.0.x/dist/aframe-particle-system-component.min.js"></script>
// <script src="https://rawgit.com/protyze/aframe-curve-component/master/dist/aframe-curve-component.min.js"></script>
// <script src="https://rawgit.com/protyze/aframe-alongpath-component/master/dist/aframe-alongpath-component.min.js"></script> 

import aframe from 'aframe';
//require('aframe');

const cards = document.querySelectorAll(".card_single");
const compcards = document.querySelectorAll(".comp_card_single");
let firstFlip = true;

cards.forEach((card) => card.addEventListener("click", flipCard));

compcards.forEach((compcard) => compcard.addEventListener("mouseenter", flipCompCardEnter));

compcards.forEach((compcard) => compcard.addEventListener("mouseleave", flipCompCardLeave));

function flipCard() {

  this.classList.toggle("flip");
  if(firstFlip){
    let tablmnt = document.createElement("h3");
    let node = document.createTextNode("Front view of Table Mountain");
    tablmnt.appendChild(node);  
    let element = document.getElementById("back-of-card");
    element.appendChild(tablmnt);


    firstFlip = false;
  }

}

function flipCompCardEnter() {
    this.classList.toggle("flip");
    this.style.backgroundColor = "white";
    this.style.color = "black";
  }

  function flipCompCardLeave() {
    this.classList.toggle("flip");
    this.style.backgroundColor = "white";
  }

////////////////////////////////////
// SOURCE: SUPER HANDS 

  // turn controller's physics presence on only while button held down
  aframe.registerComponent("phase-shift", {
    init: function () {
      console.warn("installing phase shift");
      var el = this.el;
      el.addEventListener("gripdown", function () {
        el.setAttribute("collision-filter", {
          collisionForces: true,
        });
      });
      el.addEventListener("gripup", function () {
        el.setAttribute("collision-filter", {
          collisionForces: false,
        });
      });
    },
  });



  // Component to change to a sequential color on click.
  aframe.registerComponent("cursor-listener", {
    init: function () {
      var lastIndex = -1;
      var COLORS = ["red", "green", "blue", "white"];
      this.el.addEventListener("fusing", function (evt) {
        lastIndex = (lastIndex + 1) % COLORS.length;
        this.setAttribute("material", "color", COLORS[lastIndex]);
        console.log(
          "I was clicked at: ",
          evt.detail.intersection.point
        );
      });
    },
  });

  //////////////////// THREE JS ///////////////////////////
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x990000 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 2;

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();



