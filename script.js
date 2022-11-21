
const menubarf=()=>{
    document.getElementById("menu-bar").style.display="none"
    document.querySelector("#menu-cancel").style.display="initial"
    document.querySelector(".nav-items").style.display="initial"
    
};

const menucancelf=()=>{
    document.getElementById("menu-bar").style.display="initial";
    document.querySelector("#menu-cancel").style.display="none";
    document.querySelector(".nav-items").style.display="none";

}
//   popup box

window.addEventListener("load",function(){
    setTimeout(
        function open(event){
            
            document.querySelector("#pop-up").style.display="block";
        },
        10000
    )
});


document.querySelector("#x-close").addEventListener("click",function(){
    document.querySelector("#pop-up").style.display="none";
});

let slideIndex=0;
showSlides();

// function showSlides(){
//     if(document.querySelector(".carosel")){
//         let slideShowPage=document.querySelector(".carosel");
//         if(slideShowPage.classList.contains("carosel")){
//             let slides=slideShowPage.querySelectorAll(".myslides");
//             if(slideIndex > slides.length){
//                 slideIndex=1;
//             };
//             for(let i=0;i<slides.length;i++){
//                 slides[i].style.display="none";
//             };
//             slides[slideIndex-1].style.display="block";
//             slideIndex++;

//         };
        
//     };
//     setTimeout(showSlides,1000000);
// };


function showSlides() {
    let i;
    let slides = document.getElementsByClassName("myslides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    slides[slideIndex-1].style.display = "block";

    const mq = window.matchMedia( "(min-width: 870px)" );

    if (mq.matches) {
        slides[slideIndex-1].style.display ="flex";

        // window width is at least 500px
    } else {
        slides[slideIndex-1].style.display ="grid";
        // window width is less than 500px
    }  
    //  slides[slideIndex-1].style.display = "flex"; 
    setTimeout(showSlides,7000); // Change image every 2 seconds
  }


/////counter
$(document).ready(function(){
    $(".box-counter").counterUp({
        delay:10,
        time:1200
    });
});
