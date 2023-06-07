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