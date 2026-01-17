window.addEventListener("scroll", function() {
  const hint = document.querySelector(".scroll-hint");
  if (window.scrollY > 20) {     // threshold: user started scrolling
    hint.classList.add("hidden");
  } else {
    hint.classList.remove("hidden");
  }
});
