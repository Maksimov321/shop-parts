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