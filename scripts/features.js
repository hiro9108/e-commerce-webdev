(function () {
  const FEATURES_API = "https://e-commerce-webdev.herokuapp.com/api/features";
  const cards = document.getElementById("feature-cards");

  fetch(FEATURES_API)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((el) => {
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
    })
    .catch((err) => console.log(err));
})();
