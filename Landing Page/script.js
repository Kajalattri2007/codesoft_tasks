// ==============================
// AOS Animation
// ==============================

AOS.init({
    duration: 1000,
    once: true
});

// ==============================
// Sticky Navbar Shadow
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
        header.style.background = "#fff";
    } else {
        header.style.boxShadow = "none";
        header.style.background = "#fff";
    }

});

// ==============================
// Active Navigation Link
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ==============================
// Scroll To Top Button
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="flex";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ==============================
// Contact Form
// ==============================

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("✨ Thank you! Your message has been sent successfully.");

    form.reset();

});

// ==============================
// Gallery Image Hover
// ==============================

const galleryImages = document.querySelectorAll(".gallery-container img");

galleryImages.forEach(image=>{

    image.addEventListener("mouseover",()=>{

        image.style.transform="scale(1.05)";

    });

    image.addEventListener("mouseout",()=>{

        image.style.transform="scale(1)";

    });

});

// ==============================
// Button Ripple Effect
// ==============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transition=".3s";

    });

});

// ==============================
// Console Message
// ==============================

console.log("🌸 Glow With Kajal Website Loaded Successfully!");