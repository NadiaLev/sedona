"use strict";
const search = document.querySelector(".search");
const button = search.querySelector(".button-search");
const modal = search.querySelector(".modal");
const arrival = modal.querySelector("[name=arrival]");

modal.classList.add("modal-hidden");

button.addEventListener("click", function () {
  if (modal.classList.contains("modal-hidden")) {
    modal.classList.remove("modal-hidden");
    modal.classList.add("modal-show");
     arrival.focus();
  } else {
    modal.classList.add("modal-hidden");
    modal.classList.remove("modal-show");
  }
});
