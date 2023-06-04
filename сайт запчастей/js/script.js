//menu
const nav = document.querySelector(".nav"),
searchIcon = document.querySelector("#searchIcon"),
navOpenBtn = document.querySelector(".navOpenBtn"),
navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");
if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
}
    searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
});

//slider
let slideIndex = 1;

showSlides(slideIndex);

function nextSlides(){
    showSlides(slideIndex += 1);
}

function previonsSlides(){
    showSlides(slideIndex -= 1);
}

function currentSlide(n){
    showSlides(slideIndex = n);
} 

function showSlides(n){
let slides = document.getElementsByClassName("item");
if(n > slides.length){
    slideIndex = 1;
}
if(n < 1){
    slideIndex = slides.length;
} 
for(let slide of slides){
    slide.style.display = "none";
    slides[slideIndex - 1].style.display = "flex";
}
}

// tab
function openTab(evt, tabName){
let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("luagedesined");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}
    tablinks = document.getElementsByClassName("makupus-lansedage");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" operativen", "");
}
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

//  slider 2
let slidesIndex1 = 1;

showSlides1(slidesIndex1);

function nextSlides1(){
    showSlides1(slidesIndex1 += 1);
}

function previonsSlides1(){
    showSlides1(slidesIndex1 -= 1);
}

function currentSlides(n){
    showSlides1(slidesIndex1 = n);
}
function showSlides1(n){
let slidess = document.getElementsByClassName("item2");
if(n > slidess.length){
    slidesIndex1 = 1;
}
if(n < 1) {
    slidesIndex1 = slidess.length;
}
for(let slide of slidess){
    slide.style.display = "none";
    slidess[slidesIndex1 - 1].style.display = "flex";
}
}

// modal-tab
let delay_popup = 2500;//изменить на 2500 
setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);

// slide 4
let slideIndex4 = 1;

showSlides4(slideIndex4);

function nextSlides3(){
    showSlides4(slideIndex4 += 1);
}
function previonsSlides3(){
    showSlides4(slideIndex4 -= 1);
}
function currentSlide3(n){
    showSlides4(slideIndex4 = n);
}
function showSlides4(n){
let slidesx = document.getElementsByClassName("item4");
if(n > slidesx.length){
    slideIndex4 = 1;
}
if(n < 1) {
    slideIndex4 = slidesx.length;
}
for(let slide of slidesx){
    slide.style.display = "none";
    slidesx[slideIndex4 - 1].style.display = "flex";
}
}

// up arrow
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");
const pageProgressBar = document.querySelector(".progress-bar");

const scrollContainer = () => {
    return document.documentElement || document.body;
};

const goToTop = () => {
    document.body.scrollIntoView({
    behavior: "smooth"
});
};

    document.addEventListener("scroll", () => {
    console.log("Scroll Height: ", scrollContainer().scrollHeight);
    console.log("Client Height: ", scrollContainer().clientHeight);

const scrolledPercentage =
(scrollContainer().scrollTop /
(scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

    pageProgressBar.style.width = `${scrolledPercentage}%`;

if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
} else {
    backToTopButton.classList.add("hidden");
}
});

backToTopButton.addEventListener("click", goToTop);

// modal-tab

let delay_popup2 = 3000;//изменить на 3000 
setTimeout("document.getElementById('overlay2').style.display='block'", delay_popup2);

