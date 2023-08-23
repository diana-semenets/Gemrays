
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






 

//const mainBtn = document.querySelector('.main__btn');
//mainBtn.addEventListener('click', function() {
//    location.href = '#bottom';
//})
  