//SOURCE: https://codepen.io/mnebeling/pen/XOVqqW?editors=1010 

const menu = document.querySelector("#controller-menu");
const leftHand = document.querySelector("#left-hand");
const rightHand = document.querySelector("#right-hand"); 
let item = document.querySelector(".menu-item");
const user = document.querySelector("#cameraRig");
const head = document.querySelector("#head");

leftHand.addEventListener("triggerdown", function(e) {
  // console.log(e.type);
  toggle(menu);
});

item.addEventListener("raycaster-intersected", function(e) {
  if (!menu.object3D.visible) return; 

  let target = document.querySelector(this.getAttribute("location-target"));
  teleport(target);
});

function toggle(el) {
  el.setAttribute("visible", !el.object3D.visible);
}

function teleport(target) {
  console.log(target);
  //user.setAttribute("position", target.getAttribute("position"));
  user.object3D.position.x = target.object3D.position.x;
  user.object3D.position.z = target.object3D.position.z;
  console.log(user.position);
  
  head.setAttribute("position", "0 1.6 0");
}
