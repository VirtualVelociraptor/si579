const cards = document.querySelectorAll(".card_single");
const compcards = document.querySelectorAll(".comp_card_single");
let firstFlip = true;

cards.forEach((card) => card.addEventListener("click", flipCard));

compcards.forEach((compcard) => compcard.addEventListener("mouseenter", flipCompCardEnter));

compcards.forEach((compcard) => compcard.addEventListener("mouseleave", flipCompCardLeave));

function flipCard() {

  this.classList.toggle("flip");
  if(firstFlip){
    let tablmnt = document.createElement("h2");
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



