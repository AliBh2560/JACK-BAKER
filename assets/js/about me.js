
let btn = document.getElementById("btn");
let fotter = document.querySelector(".footer");
let menu = document.getElementById("hidden-menu");
let header = document.getElementById("amh");



function hm (){
header.classList.toggle("nav-hidden");
fotter.classList.toggle("nav-hidden");
menu.classList.toggle("nav-show");


    
}



btn.addEventListener("click",hm)