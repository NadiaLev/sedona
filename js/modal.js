"use strict"
const search = document.querySelector(".search");
const button = search.querySelector(".button-search");
const modal = search.querySelector(".modal");
const form = modal.querySelector("form");
const arrival = form.querySelector("[name=arrival]");

modal.classList.add("modal-hidden");

button.addEventListener("click", function () {
  if (modal.classList.contains("modal-hidden")) {
    modal.classList.remove("modal-hidden");
    arrival.focus();
  } else {
    modal.classList.add("modal-hidden");
  }
});
