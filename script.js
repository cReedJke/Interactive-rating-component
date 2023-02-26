"use strict";


const rates = document.querySelector(".rates");
let rate;

const submit = document.querySelector(".submit");
const rating_state = document.querySelector(".rating_state")
const thank_you_state = document.querySelector(".thank_you_state");
const final_rate = document.querySelector(".final_rate");

function disableChosenRateStyle() {
  const buttons = rates.querySelectorAll("button");
  for(let button of buttons) {
    if (button.style.backgroundColor == "grey") {
      button.style.backgroundColor = "";
      button.style.color = "";
    }
  }
}

rates.addEventListener("click", (event) => {
  if (event.target.className !== "rates") {
  disableChosenRateStyle();
  rate = event.target.textContent;
  event.target.style.backgroundColor = "grey";
  event.target.style.color = "white";
  }
})

submit.addEventListener("click", (event) => {
  if (rate != undefined) {
    rating_state.style.display = "none";
    thank_you_state.style.display = "grid";
    final_rate.textContent = rate;
  }
})


