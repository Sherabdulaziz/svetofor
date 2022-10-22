// Buttons
let Red = document.querySelector(".main2-span1");
let Yellow = document.querySelector(".main2-span2");
let Green = document.querySelector(".main2-span3");
let All = document.querySelector(".main2-span4");

// Colors
let redColor = document.querySelector(".main-span1");
let yellowColor = document.querySelector(".main-span2");
let greenColor = document.querySelector(".main-span3");

// Working
Red.addEventListener("click", function () {
  redColor.classList.toggle("open");
  yellowColor.classList.remove("yello");
  greenColor.classList.remove("grin");
});
Yellow.addEventListener("click", function () {
  redColor.classList.remove("open");
  yellowColor.classList.toggle("yello");
  greenColor.classList.remove("grin");
});
Green.addEventListener("click", function () {
  redColor.classList.remove("open");
  yellowColor.classList.remove("yello");
  greenColor.classList.toggle("grin");
});
All.addEventListener("click", function () {
  redColor.classList.remove("open");
  yellowColor.classList.remove("yello");
  greenColor.classList.remove("grin");
});
