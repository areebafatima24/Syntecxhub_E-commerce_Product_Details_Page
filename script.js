function changeImage(element) {
    const mainImage = document.getElementById("mainImage");
    mainImage.style.opacity = 0;

    setTimeout(() => {
        mainImage.src = element.src;
        mainImage.style.opacity = 1;
    }, 200);
}

function selectSize(button) {
    document.querySelectorAll(".sizes button")
        .forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
}

function addToCart() {
    const button = document.querySelector(".cart-btn");

    button.innerText = "Adding...";
    button.style.background = "#555";

    setTimeout(() => {
        button.innerText = "Added ✓";
        button.style.background = "green";
    }, 1000);
}
