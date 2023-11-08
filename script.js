"use strict";

// START BUTTON ANIMATION ----------------------------
const startButton = document.querySelector(".start-btn");

startButton.addEventListener("click", (e) => {
  e.preventDefault();
  startButton.classList.add("animate");

  setTimeout(() => {
    startButton.classList.remove("animate");
  }, 600); // 1s = 1000ms
});

// START BUTTON ANIMATION END ----------------------------
