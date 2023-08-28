
let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
menuBtn.addEventListener("click", (function() {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
    if (menuBtn.classList.contains("active")) document.body.style.overflow = "hidden"; else document.body.style.overflow = "";
}));
menu.addEventListener("click", (e => {
    if (e.target === menu) {
        menu.classList.remove("active");
        menuBtn.classList.remove("active");
        document.body.style.overflow = "";
    }
}));


//----------скрол-------------------//

window.onscroll = function() {myFunction()};

const header = document.querySelector("header");
const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


//const mainBtn = document.querySelector('.main__btn');
//mainBtn.addEventListener('click', function() {
//    location.href = '#bottom';
//})
  