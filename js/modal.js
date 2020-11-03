"use strict";
const search = document.querySelector(".search");
const button = search.querySelector(".button-search");
const modal = search.querySelector(".modal");
const arrival = modal.querySelector("[name=arrival]");
const form = modal.querySelector("form");
const departure = modal.querySelector("[name=departure]");

modal.classList.add("modal-hidden");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-show");
  modal.classList.toggle("modal-hidden");
  arrival.focus();
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value) {
    evt.preventDefault();
    modal.classList.add("modal-error");
    if (!arrival.value) {
      arrival.focus();
    } else {
      departure.focus();
     }
  }
});
