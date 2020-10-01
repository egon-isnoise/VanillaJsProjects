"use strict";

var modalBtn = document.querySelector(".modal-btn");
var closeBtn = document.querySelector(".close-btn");
var overlay = document.querySelector(".modal-overlay");
modalBtn.addEventListener('click', function () {
  overlay.classList.add("open-modal");
});
closeBtn.addEventListener('click', function () {
  overlay.classList.remove("open-modal");
});