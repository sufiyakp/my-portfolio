// Welcome message
console.log("Welcome to Sufiya's Portfolio!");

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Contact form message
const contactForm = document.querySelector("form");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for contacting me! 🤎");
        contactForm.reset();
    });
}