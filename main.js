// DOM Elements

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const navEl = document.getElementById("nav");
const navLink = document.querySelectorAll(".nav-link");

// Navigation(hamburger) funcitonality

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
})

// Nav-bar desing change on scroll
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


// Redirects to a url if not there already.

function redirect(url, development){
    let url = "https://semirkardovich.github.io/MyWeb/";
    if(!document.location.href != url && !development){
        document.location.href = url;
    }
}
redirect("https://semirkardovich.github.io/MyWeb/", false);