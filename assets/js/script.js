"use strict";

const navScrol = document.querySelector('.navbar');

window.addEventListener('scroll', (event)=>{
    if(window.scrollY > 275){
        navScrol.classList.add('navbar__fixed');
    }
})