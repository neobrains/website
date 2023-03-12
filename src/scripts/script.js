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

document.getElementById("cards").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}