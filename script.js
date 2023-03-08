const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const mobileView = document.getElementById("mobile-view");

menuOpen.addEventListener("click", () => {
  mobileView.style.width = "100%";
});

menuClose.addEventListener("click", () => {
  mobileView.style.width = "0";
});
