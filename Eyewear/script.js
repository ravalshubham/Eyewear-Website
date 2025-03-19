
// horiontal scroll bar for brands

const scrollContainer = document.getElementById("scroll-container");
const leftButton = document.querySelector(".scroll-button.left");
const rightButton = document.querySelector(".scroll-button.right");

function scrollRight() {
  scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
}
function scrollL() {
  scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
}


function updateScrollButtons() {
  const scrollLeftPos = scrollContainer.scrollLeft;
  const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

  leftButton.style.display = scrollLeftPos > 0 ? "flex" : "none";
  rightButton.style.display = scrollLeftPos < maxScrollLeft ? "flex" : "none";

}

function updateScrollButtons() {
  const scrollLeftPos = scrollContainer.scrollLeft;
  leftButton.style.left = '0';
}






scrollContainer.addEventListener("scroll", updateScrollButtons);
window.addEventListener("resize", updateScrollButtons);

setTimeout(updateScrollContainer, 1);








window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".sticky-top");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

