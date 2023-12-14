
let btn = document.getElementById("btn");
let header = document.querySelector(".header");
let fSlider = document.querySelector(".home--first-slider");
let sSlider = document.querySelector(".second-slider");
let tSlider = document.querySelector(".third-slider");
let fotter = document.querySelector(".footer");
let menu = document.getElementById("hidden-menu");



function hm (){
header.classList.toggle("nav-hidden");
fSlider.classList.toggle("nav-hidden");
sSlider.classList.toggle("nav-hidden");
tSlider.classList.toggle("nav-hidden");
fotter.classList.toggle("nav-hidden");
menu.classList.toggle("nav-show");


    
}



btn.addEventListener("click",hm)