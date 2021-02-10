(function () {
  const cards = document.getElementById("product-cards");
  const totalPrice = document.getElementById("totalPrice");
  const orderList = document.getElementById("order-list");
  const clearButton = document.getElementById("clear-button");
  const checkoutButton = document.getElementById("checkout-button");
  const search = document.getElementById("search");

  let itemArr = [];

  search.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchValue = e.target.children[0].value;
    searchItemHandler(itemArr, searchValue);
    e.target.children[0].value = "";
  });

  checkoutButton.addEventListener("click", () => {
    if (orderClearHandler()) alert("Your order is complited!");
  });
  clearButton.addEventListener("click", () => {
    orderClearHandler();
  });

  const createElementHandler = (array) => {
    array.forEach((el) => {
      cards.innerHTML += `
        <div class="card">
          <div class="img-box">
            <img src=${el.image_url} alt=${el.name} />
          </div>
          <div class="content-box">
            <h3>${el.name}</h3>
            <p>${el.description}</p>
          </div>
          <div class="product-footer">
            <span>$${el.price}</span>
            <div class="btn add-cart" >Add Cart</div>
          </div>
        </div>
      `;
    });
  };

  const searchItemHandler = (searchArr, target) => {
    cards.innerHTML = "";
    searchArr.forEach((el) => {
      if (el.name.includes(target.toLowerCase())) {
        cards.innerHTML += `
          <div class="card">
            <div class="img-box">
              <img src=${el.image_url} alt=${el.name} />
            </div>
            <div class="content-box">
              <h3>${el.name}</h3>
              <p>${el.description}</p>
            </div>
            <div class="product-footer">
              <span>$${el.price}</span>
              <div class="btn add-cart" >Add Cart</div>
            </div>
          </div>
        `;
      }
    });
  };

  const orderClearHandler = () => {
    if (parseInt(totalPrice.innerText)) {
      const orderItemLists = document.querySelectorAll(".order-item-list");
      orderItemLists.forEach((el) => el.remove());
      totalPrice.innerText = 0;
      return true;
    } else {
      alert("You can add Sometings to cart!");
    }
  };

  // Add remove functions
  const removeItemHandler = (cardItemPrice, index) => {
    const removeItems = document.getElementById(`removeItem${index}`);
    removeItems.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.parentElement.parentElement.remove();
      totalAmountHandler(cardItemPrice);
    });
  };

  const totalAmountHandler = (cardItemPrice) => {
    // update total price
    let itemPrice = cardItemPrice.replace("$", "");
    let newTotalPrice =
      parseFloat(totalPrice.innerText) - parseFloat(itemPrice);
    totalPrice.innerText = Math.round(newTotalPrice * 100) / 100;
  };

  const checkCartHandler = (cardItemName) => {
    const checkCarts = document.querySelectorAll(".order-content-box");
    for (let checkCart of checkCarts) {
      if (checkCart.children[0].innerText === cardItemName) return true;
    }
    return false;
  };

  const addItemToCart = (cardItemImage, cardItemName, cardItemPrice, index) => {
    if (checkCartHandler(cardItemName)) {
      alert("Already you added to cart!");
      return false;
    }
    let div = document.createElement("div");
    div.classList.add("order-item-list");
    div.innerHTML = `
      <div class="order-item">
        <div class="order-img-box">
          <img src=${cardItemImage} alt="order-img" />
        </div>
        <div class="order-content-box">
          <div>${cardItemName}</div>
          <div><span>${cardItemPrice}</span></div>
          <div>
            <input type="number" class="number" placeholder="amount" />
          </div>
          <div class="removeItem" id=removeItem${index}><i class="fas fa-trash-alt"></i></div>
        </div>
      </div>
    `;
    orderList.appendChild(div);

    // Add total price
    let itemPrice = cardItemPrice.replace("$", "");
    let newTotalPrice =
      parseFloat(totalPrice.innerText) + parseFloat(itemPrice);
    totalPrice.innerText = newTotalPrice;

    alert("Add to cart!");
  };

  const response = fetch("https://e-commerce-webdev.herokuapp.com/api/products")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  response
    .then((result) => {
      itemArr = result; // Get items data
      createElementHandler(itemArr);
    })
    .then(() => {
      const addCartButton = document.querySelectorAll(".add-cart");
      addCartButton.forEach((el, index) => {
        el.addEventListener("click", (e) => {
          let cardItem = e.target.parentElement.parentElement;

          let cardItemImage = cardItem.children[0].children[0].src;
          let cardItemName = cardItem.children[1].children[0].innerText;
          let cardItemPrice = cardItem.children[2].children[0].innerText;

          addItemToCart(cardItemImage, cardItemName, cardItemPrice, index);

          // Add remove functions
          removeItemHandler(cardItemPrice, index);
        });
      });
    });
})();
