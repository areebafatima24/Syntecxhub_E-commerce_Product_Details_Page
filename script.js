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
   
