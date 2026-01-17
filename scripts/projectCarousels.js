const projectCarousels = {
  "ZBGA": [
    "images/ZBGA/thumbnail_Logo-ZBGA.png",
    "images/ZBGA/zbga.org image.PNG",
    "images/ZBGA/connect reader.PNG",
    "images/ZBGA/secured backend cart.PNG"
  ],
  "BosnianPine": [
    "images/bosnianpine/BosnianPineThumbnail.png",
    "images/bosnianpine/BosnianPineLandingPage.png"
  ]
};

document.querySelectorAll(".carousel").forEach((carousel) => {
  const project = carousel.getAttribute("data-project");
  const images = projectCarousels[project];
  let currentIdx = 0;
  const img = carousel.querySelector(".carousel-image");
  const leftBtn = carousel.querySelector(".carousel-control.left");
  const rightBtn = carousel.querySelector(".carousel-control.right");

  function showImage(idx) {
    img.style.opacity = 0.6;
    setTimeout(() => {
      img.src = images[idx];
      img.alt = images[idx].split('/').pop();
      img.style.opacity = 1;
    }, 60);
  }
  showImage(currentIdx);

  leftBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    currentIdx = (currentIdx - 1 + images.length) % images.length;
    showImage(currentIdx);
  });
  rightBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    currentIdx = (currentIdx + 1) % images.length;
    showImage(currentIdx);
  });
});
