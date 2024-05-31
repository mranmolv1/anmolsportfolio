const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const slide = document.querySelector(".img-wrapper");
const img = document.querySelectorAll(".gallery-img");
let slideNumber = 1;

rightBtn.addEventListener('click',()=>{
    if(slideNumber < img.length) {
    slide.style.transform = `translateX(${-(slideNumber)*100}%)`;
    slideNumber++;
    }else{
        slide.style.transform = `translateX(0px)`;
        slideNumber = 1;
    }
});

leftBtn.addEventListener('click',()=>{
    if(slideNumber > 1) {
    slide.style.transform = `translateX(${-(slideNumber-2)*100}%)`;
    slideNumber--;
    console.log(slideNumber);
    }else{
        slide.style.transform = `translateX(-${(img.length-1)*100}%)`
        slideNumber = img.length;
    }
});
