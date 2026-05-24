console.log("Portfolio Website Loaded Successfully");

/* Navbar shadow on scroll */

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
    }
    else{
        header.style.boxShadow = "none";
    }

});

/* Contact Form */

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Message Sent Successfully!");

    form.reset();

});