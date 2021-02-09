(function () {
  const shoppingCart = document.getElementById("shopping-cart");
  const shoppingCartClose = document.getElementById("shopping-cart-close");
  const orderItems = document.getElementById("order-items");

  const shoppingCartToggle = (shoppingCartDom) => {
    shoppingCartDom.addEventListener("click", () => {
      orderItems.classList.toggle("toggle");
      shoppingCart.classList.toggle("toggle");
      shoppingCartClose.classList.toggle("toggle");
    });
  };

  shoppingCartToggle(shoppingCart);
  shoppingCartToggle(shoppingCartClose);
})();
