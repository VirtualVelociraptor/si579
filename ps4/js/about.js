const cards = document.querySelectorAll(".card_single");
const compcards = document.querySelectorAll(".comp_card_single");

cards.forEach((card) => card.addEventListener("click", flipCard));

compcards.forEach((compcard) => compcard.addEventListener("mouseenter", flipCompCardEnter));

compcards.forEach((compcard) => compcard.addEventListener("mouseleave", flipCompCardLeave));

function flipCard() {
  this.classList.toggle("flip");
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



