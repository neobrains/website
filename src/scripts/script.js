let expand = document.getElementById("expand");
let collapse = document.getElementById("collapse");
let modal = document.getElementById("modal");
let isExpanded = false;

expand.addEventListener("click", () => {
  isExpanded = true;
  modal.style.display = "flex";
})

collapse.addEventListener("click", () => {
  isExpanded = false;
  modal.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    isExpanded = false;
    modal.style.display = "none";
  }
});
