// gallary application
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
    }else{
        slide.style.transform = `translateX(-${(img.length-1)*100}%)`
        slideNumber = img.length;
    }
});
// end

// script for theme change
const currentTab = document.querySelector(".selected-tab");
const tab = document.querySelectorAll(".navigation-tab");
const body = document.querySelector("body");

if (currentTab.textContent.match("Illustrations")) {
    document.body.classList.toggle("red-theme");
}
if (currentTab.textContent.match("Vector Drawings")) {
    document.body.classList.toggle("yellow-theme");
}
if (currentTab.textContent.match("Cartoon Stripes")) {
    document.body.classList.toggle("green-theme");
}
if (currentTab.textContent.match("Designs")) {
    document.body.classList.toggle("blue-theme");
}
// end



// script for image zoom-in window
const windo = document.querySelector(".img-window");
const imgShow = document.querySelector(".selected-img")
const closeBtn = document.querySelector(".close-button");
const container = document.querySelector(".container");
const navBar = document.querySelector(".navigation-bar");
const title = document.querySelector(".title");

for (let index = 0; index < img.length; index++) {
    const imgIn = img[index];
    
    imgIn.addEventListener('click',()=>{
        windo.style.opacity= `1`;
        windo.style.visibility= `visible`;
        imgShow.src = imgIn.src;
        title.style.filter = `blur(5px)`;
        navBar.style.filter = `blur(5px)`;
        container.style.filter = `blur(5px)`;
    });
    
    closeBtn.addEventListener('click',()=>{
        windo.style.opacity= `0`;
        windo.style.visibility= `hidden`;
        title.style.filter = `none`;
        navBar.style.filter = `none`;
        container.style.filter = `none`;
    });
}
// end

