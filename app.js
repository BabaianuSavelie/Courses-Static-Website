let typed = new Typed(".changeable", {
  strings: ["JavaScript", "React", "Angular"],
  typeSpeed: 0,
  backSpeed: 0,
  loop: true,
});

const toggler = document.getElementById("toggler");
const target = document.getElementById("target");
toggler.addEventListener("click", () => {
  target.classList.toggle("hidden");
});
