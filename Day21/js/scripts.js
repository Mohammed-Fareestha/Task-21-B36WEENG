var addToCart = document.getElementsByClassName("AddtoCart");
console.log(addToCart.length);
for (let i = 0; i < addToCart.length; i++) {
  console.log(addToCart[i]);
  addToCart[i].setAttribute("onClick", "addtoCartFun(" + i + ")");
  addToCart[i].id = i;
}

var removefromcart = document.getElementsByClassName("removeFromCart");
console.log(removefromcart.length);
for (let i = 0; i < removefromcart.length; i++) {
  console.log(removefromcart[i]);
  removefromcart[i].setAttribute(
    "onClick",
    "removeFromcartFun(" + (i + addToCart.length) + ")"
  );
  removefromcart[i].id = i + addToCart.length;
}
function addtoCartFun(i) {
  var cartvalue = document.getElementsByClassName("rounded-pill");
  var addele = document.getElementById(i);
  var removeElement = document.getElementById(i + addToCart.length);

  console.log(addele, removeElement);
  addele.style.display = "none";
  removeElement.style.display = "block";
  for (let i = 0; i < cartvalue.length; i++) {
    console.log(cartvalue[i].innerText);
    cartvalue[i].innerText = parseInt(cartvalue[i].innerText) + 1;
  }
}

function removeFromcartFun(i) {
  var cartvalue = document.getElementsByClassName("rounded-pill");
  var addele = document.getElementById(i - addToCart.length);
  var removeElement = document.getElementById(i);
  console.log(addele, removeElement);
  addele.style.display = "block";
  removeElement.style.display = "none";
  for (let i = 0; i < cartvalue.length; i++) {
    console.log(cartvalue[i].innerText);
    cartvalue[i].innerText = parseInt(cartvalue[i].innerText) - 1;
  }
}
