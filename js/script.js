$(document).ready(function(){
    $('.feedback__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinity: true,
      autoplay: true,
      autoplaySpeed: 7000
    });
});

const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav");
const menuItem = document.querySelectorAll(".burger__item");

burger.addEventListener("click", function() {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});

for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener("click", function() {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });
}