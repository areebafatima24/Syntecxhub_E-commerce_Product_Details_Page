function changeImage(element) {
  document.getElementById("mainImage").src = element.src;
}

let cartCount = 0;

function addToCart() {
  const size = document.getElementById("size").value;

  if (!size) {
    showToast("Please select a size.");
    return;
  }

  cartCount++;
  document.getElementById("cartCount").innerText = cartCount;
  document.getElementById("cartCount").style.display = "flex";

  showToast("Added to bag ✨");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function toggleAccordion(button) {
  const content = button.nextElementSibling;
  content.classList.toggle("active");
}
