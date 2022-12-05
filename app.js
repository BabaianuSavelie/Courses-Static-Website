let typed = new Typed(".changeable", {
  strings: ["JavaScript", "React", "Angular"],
  typeSpeed: 0,
  backSpeed: 0,
  loop: true,
});

// const toggler = document.getElementById("toggler");
// const target = document.getElementById("target");
// toggler.addEventListener("click", () => {
//   target.classList.toggle("hidden");
// });

const toggleBtn = document.querySelector("#toggler");
const target = document.querySelector("#target");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("is-active");
  target.classList.toggle("hidden");
});
