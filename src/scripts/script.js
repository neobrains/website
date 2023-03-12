let expand = document.getElementById("expand");
let modal = document.getElementById("modal");
let isExpanded = false;
expand.addEventListener("click", () => {
  if (isExpanded) {
    expand.className = "fa-solid fa-bars";
    isExpanded = false;
    modal.style.display = "none";
  } else {
    expand.className = "fa-solid fa-xmark";
    isExpanded = true;
    modal.style.display = "flex";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    isExpanded = false;
    modal.style.display = "none";
    expand.className = "fa-solid fa-bars";
  }
});

