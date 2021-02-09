(function () {
  const cards = document.getElementById("cards");

  const response = fetch("https://e-commerce-webdev.herokuapp.com/api/features")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  response.then((result) => {
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
        </div>
      `;
      cards.appendChild(div);
    });
  });
})();
