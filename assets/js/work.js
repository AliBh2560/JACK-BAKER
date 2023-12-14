
let btn = document.getElementById("btn");
let fotter = document.querySelector(".footer");
let menu = document.getElementById("hidden-menu");


let header = document.querySelector(".work-header");
let slider = document.querySelector(".work-first-slider")


function hm (){
header.classList.toggle("nav-hidden");
slider.classList.toggle("nav-hidden")


fotter.classList.toggle("nav-hidden");
menu.classList.toggle("nav-show");


    
}



btn.addEventListener("click",hm)