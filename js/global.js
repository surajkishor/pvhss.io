// Nav Buttons
let home  = document.querySelectorAll(".nav-links a")[0];
home.addEventListener("click", ()=>{
   home.className = "active";
document.querySelectorAll(".nav-links li a")[1].className = "inactive";
document.querySelectorAll(".nav-links li a")[2].className = "inactive";
document.querySelectorAll(".nav-links li a")[3].className = "inactive";
document.querySelectorAll(".nav-links li a")[4].className = "inactive";
})

let service  = document.querySelectorAll(".nav-links li a")[1];
service.addEventListener("click", ()=>{
   service.className = "active";
document.querySelectorAll(".nav-links li a")[0].className = "inactive";
document.querySelectorAll(".nav-links li a")[2].className = "inactive";
document.querySelectorAll(".nav-links li a")[3].className = "inactive";
document.querySelectorAll(".nav-links li a")[4].className = "inactive";
})

let about  = document.querySelectorAll(".nav-links li a")[2];
about.addEventListener("click", ()=>{
   about.className = "active";
document.querySelectorAll(".nav-links li a")[0].className = "inactive";
document.querySelectorAll(".nav-links li a")[1].className = "inactive";
document.querySelectorAll(".nav-links li a")[3].className = "inactive";
document.querySelectorAll(".nav-links li a")[4].className = "inactive";
})

let contact  = document.querySelectorAll(".nav-links li a")[3];
contact.addEventListener("click", ()=>{
   contact.className = "active";
document.querySelectorAll(".nav-links li a")[0].className = "inactive";
document.querySelectorAll(".nav-links li a")[1].className = "inactive";
document.querySelectorAll(".nav-links li a")[2].className = "inactive";
document.querySelectorAll(".nav-links li a")[4].className = "inactive";
})

let fbgvn  = document.querySelectorAll(".nav-links li a")[4];
fbgvn.addEventListener("click", ()=>{
   fbgvn.className = "active";
document.querySelectorAll(".nav-links li a")[0].className = "inactive";
document.querySelectorAll(".nav-links li a")[1].className = "inactive";
document.querySelectorAll(".nav-links li a")[2].className = "inactive";
document.querySelectorAll(".nav-links li a")[3].className = "inactive";
})


const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const navBar = document.querySelector("nav");

hamburger.addEventListener("click",()=>{
    navlinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    })
   
})


dropdownlist =()=>{
   document.getElementById("mydrop").classList.toggle("show");
}

drdropdownlist =()=>{
   document.getElementById("dropmy").classList.toggle("show");
}