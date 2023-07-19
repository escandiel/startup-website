const $btnMenu = document.getElementById("btn-mobile");
const $nav = document.getElementById("nav");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  $nav.classList.toggle("active");
}
$btnMenu.addEventListener("click", toggleMenu);
$btnMenu.addEventListener("touchstart", toggleMenu);
