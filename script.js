function selectSize(button) {
    document.querySelectorAll(".sizes button")
        .forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
}

function addToCart() {
    const btn = document.querySelector(".cta");
    btn.innerText = "Added ✓";
    btn.style.background = "#2ecc71";
}

/* Scroll Reveal */
window.addEventListener("scroll", function() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
});
   
