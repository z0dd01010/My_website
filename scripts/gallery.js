document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");

  window.scrollLeft = function () {
    slider.scrollBy({ left: -350, behavior: "smooth" });
  };

  window.scrollRight = function () {
    slider.scrollBy({ left: 350, behavior: "smooth" });
  };
});