(function () {
  const cards = document.getElementById("product-cards");

  const addItemToCart = (cardItemImage,cardItemName,cardItemPrice) => {
    let div = document.createElement("div");
    div.classList.add("order-item-list");
    div.innerHTML = `
    <div class="order-item">
    <div class="order-img-box">
      <img src=${cardItemImage} alt="order-img" />
    </div>
    <div class="order-content-box">
      <div>${cardItemName}</div>
      <div>$<span>${cardItemPrice}</span></div>
      <div>
        <input type="number" class="number" placeholder="amount" />
      </div>
      <div><i class="fas fa-trash-alt"></i></div>
    </div>
  </div>
    `;
    let orderContainer = document.querySelector('#order-container')
    orderContainer.appendChild(div)
  };

  


  const response = fetch("https://e-commerce-webdev.herokuapp.com/api/products")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  response
    .then((result) => {
      result.forEach((el) => {
        let div = document.createElement("div");
        div.innerHTML = `
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
              <div class="add-cart" >add cart</div>
            </div>
          </div>
        `;
        cards.appendChild(div);
      });
    })
    .then(() => {
      const addCartButton = document.querySelectorAll(".add-cart");
      console.log(addCartButton);
      addCartButton.forEach((el) => {
        console.log(el);
        el.addEventListener("click", (e) => {
          let cardItem = e.target.parentElement.parentElement;
          //   console.log(cardItem.children[0].children[0].src);
          let cardItemImage = cardItem.children[0].children[0].src;
          let cardItemName = cardItem.children[1].children[0].innerText;
          let cardItemPrice = cardItem.children[2].children[0].innerText;

          addItemToCart(cardItemImage,cardItemName,cardItemPrice,);
        });
      });
    });
})();
