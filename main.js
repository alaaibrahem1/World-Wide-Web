let searchbtn = document.querySelector('#search-btn');
let searchform = document.querySelector('.search-form');
let loginform = document.querySelector('.login-form');
let menubar = document.querySelector('#menu-bar');
let amenu = document.querySelector('.navbar');
let vidbtn = document.querySelectorAll('.video-btn');

function showbar() {
    searchbtn.classList.toggle("fa-times");
    searchform.classList.toggle("active");
}

function showform() {
    loginform.classList.add("active");
}

function hideform() {
    loginform.classList.remove("active");
}

function showmenu() {
    menubar.classList.toggle("fa-times");
    amenu.classList.toggle("active");
}

vidbtn.forEach(slide => {
    slide.addEventListener("click", function () {
        document.querySelector(".controls .blue").classList.remove("blue");
        slide.classList.add("blue");
        let src = slide.getAttribute("data-src");
        document.querySelector("#video-slider").src = src;
    });
});