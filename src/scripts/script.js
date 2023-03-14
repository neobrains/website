let expand = document.getElementById("expand");
let collapse = document.getElementById("collapse");
let modal = document.getElementById("modal");
let isExpanded = false;

expand.addEventListener("click", (ev) => {
  isExpanded = true;
  modal.style.display = "flex";
  ev.stopPropagation();
})

collapse.addEventListener("click", (event) => {
  event.stopPropagation();
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