const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const navEl = document.getElementById("nav");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
})


document.addEventListener("scroll", ()=>{
    const scrollPosition = window.scrollY;
    if(scrollPosition > 250){
        navEl.style.backgroundColor = " rgba(0, 0, 0, 0.9)"; 
    }else{
        navEl.style.backgroundColor = "transparent";   
    }
})
//Close navigation on click
navLink.forEach(function(link){
    link.addEventListener("click", function(){
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    })
});

// Smooth scroll

let scroll = new SmoothScroll('a[href*="#"]', {
    speed:800
});