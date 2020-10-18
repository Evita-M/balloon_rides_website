const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});


const colors = ["#E5CDCA", "#cae2e5", "	#e5dbca", "#cae5cd", "#cdcae5"];
let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach((item) => {
  item.style.cssText = `background-color:${colors[i++]}`;
});



Array.from(document.querySelectorAll(".navigation-btn")).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  }
})