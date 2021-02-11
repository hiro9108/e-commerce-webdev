const showcaseBtn = document.getElementById("showcase-btn");
const showcasevideos = document.querySelectorAll(".video");

let previousNum;

showcaseBtn.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * 10 + 1);
  if (randomNum === previousNum && randomNum <= 9) {
    randomNum++;
  } else if (randomNum === previousNum && randomNum == 10) {
    randomNum = 5;
  }
  showcasevideos.forEach((el) => {
    el.src = `./assets/videos/video_${randomNum}.mp4`;
    previousNum = randomNum;
  });
});
