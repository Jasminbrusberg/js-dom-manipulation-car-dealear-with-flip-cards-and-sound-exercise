"use strict";

const sections = document.querySelectorAll("section");

// Overvåg scroll og aktiver .section1 på sektioner

window.onscroll = () => {
  sections.forEach((sec) => {
    const scrollDistance = window.scrollY;
    const secDistance = sec.offsetTop;

    if (scrollDistance >= secDistance) {
      sec.classList.add("sec1");
    } else {
      sec.classList.remove("sec1");
    }
  });
};

/* -------------------------------------------------
   2) HOVER-EFFEKT PÅ FØRSTE SEKTION (eksempel)
--------------------------------------------------- */
const sectionOne = document.querySelector(".sec1");

if (sectionOne) {
  sectionOne.addEventListener("mouseover", function () {
    this.classList.add("scale");
  });

  sectionOne.addEventListener("mouseout", function () {
    this.classList.remove("scale");
  });
}


// NYT NYT Vanilla JS

const soundCar1 = new Audio("../sound/car-engine-sound.mp3");
const soundCar2 = new Audio("../sound/car-engine-sound.mp3");
const soundCar3 = new Audio("../sound/car-engine-sound.mp3");

const car1Card = document.getElementById("car1Card");
const car2Card = document.getElementById("car2Card");
const car3Card = document.getElementById("car3Card");

if (car1Card) {
   car1Card.addEventListener("click", function() {
      soundCar1.play();
      car1Card.classList.toggle("flipped");
   });
}

if (car2Card) {
   car2Card.addEventListener("click", function() {
      soundCar2.play();
      car2Card.classList.toggle("flipped");
   });
}

if (car3Card) {
   car3Card.addEventListener("click", function() {
      soundCar3.play();
      car3Card.classList.toggle("flipped");
   });
}