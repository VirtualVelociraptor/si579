////////BELOW ARE THE 3rd PARTY JS LIBRARIES THAT I USED. THEY ARE REFERENCED IN MY HTML FILE ////////////

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
    this.style.backgroundColor = "#990000";
    this.style.color = "white";
  }

  function flipCompCardLeave() {
    this.classList.toggle("flip");
    this.style.backgroundColor = "white";
  }



