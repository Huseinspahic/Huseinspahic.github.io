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
    img.src = images[idx];
    img.alt = images[idx].split('/').pop();
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

// Collapsible logic (if not already present)
document.querySelectorAll(".collapsible").forEach(function(btn) {
  btn.addEventListener("click", function() {
    btn.classList.toggle("active");
    var content = btn.nextElementSibling;
    if (btn.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.padding = "14px 18px";
    } else {
      content.style.maxHeight = null;
      content.style.padding = "0 18px";
    }
  });
});
