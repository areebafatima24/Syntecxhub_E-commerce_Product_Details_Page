function changeImage(element) {
  document.getElementById("mainImage").src = element.src;
}

function addToCart() {
  const size = document.getElementById("size").value;
  if (!size) {
    alert("Please select a size first!");
  } else {
    alert("Added to cart successfully!");
  }
}

function toggleWishlist() {
  const btn = document.querySelector(".wishlist");
  btn.textContent = btn.textContent === "♡" ? "♥" : "♡";
}

function toggleAccordion(button) {
  const content = button.nextElementSibling;
  content.style.display =
    content.style.display === "block" ? "none" : "block";
}
