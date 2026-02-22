function changeImage(el){
  document.getElementById("mainImage").src = el.src;
}

let quantity = 1;

function changeQty(val){
  quantity += val;
  if(quantity < 1) quantity = 1;
  document.getElementById("qty").innerText = quantity;
}

function openCart(){
  document.getElementById("cartDrawer").classList.add("open");
  document.querySelector(".overlay").classList.add("active");
}

function closeCart(){
  document.getElementById("cartDrawer").classList.remove("open");
  document.querySelector(".overlay").classList.remove("active");
}

function addToCart(btn){
  btn.innerText = "Added ✓";
  btn.style.background = "#4CAF50";
  setTimeout(()=>{
    btn.innerText = "Add to Cart";
    btn.style.background = "";
  },1500);

  document.getElementById("cartItems").innerHTML =
  `<p>Vanilla 28 × ${quantity}</p>`;

  openCart();
}

/* VARIANT ACTIVE SWITCH */
document.querySelectorAll(".variant").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".variant").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
  });
});

/* FADE IN ON LOAD */
window.addEventListener("load",()=>{
  document.querySelectorAll(".fade-in").forEach(el=>{
    el.classList.add("show");
  });
});
