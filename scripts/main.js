const div1 = document.getElementById("first");
const div2 = document.getElementById("second");
const div3 = document.getElementById("third");

const img = document.getElementById("art");
const desc = document.getElementById("desc");
const price = document.getElementById("price");
const free = document.getElementById("free");
const express = document.getElementById("express");
const shippingField = document.getElementById("shipping");
const total = document.getElementById("total");

//update total
function updateTotal() {
    const shippingCharge=Number(shippingField.innerText);
    const productPrice=Number(price.innerText);
    const grandTotal=shippingCharge+productPrice;
    total.innerText=grandTotal;
}

free.addEventListener("click", function () {
  shippingField.innerText = "5";
  updateTotal();
});
express.addEventListener("click", function () {
  shippingField.innerText = "30";
  updateTotal();
});
div1.addEventListener("click", function () {
  img.src = "images/1.jpg";
  desc.innerText =
    " First---Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, omnis nemo, ex repellendus ipsa molestiae illum labore sapiente rem doloremque reprehenderit ut eligendi pariatur quos.";
  price.innerText = "750";
});
div2.addEventListener("click", function () {
  img.src = "images/2.jpg";
  desc.innerText =
    " second---Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, omnis nemo, ex repellendus ipsa molestiae illum labore sapiente rem doloremque reprehenderit ut eligendi pariatur quos.";
  price.innerText = "1150";
});
div3.addEventListener("click", function () {
  img.src = "images/3.jpg";
  desc.innerText =
    " third---Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, omnis nemo, ex repellendus ipsa molestiae illum labore sapiente rem doloremque reprehenderit ut eligendi pariatur quos.";
  price.innerText = "330";
});
