let expand = document.querySelector('#expand');
let modal = document.querySelector('.modal');
let isExpanded = false;
expand.addEventListener('click', () => {
    if (isExpanded) {
        expand.className = "fa fa-chevron-up"
        isExpanded = false;
        modal.style.display = "none";
    } else {
        expand.className = "fas fa-times"
        isExpanded = true;
        modal.style.display = "flex";
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        isExpanded = false;
        modal.style.display = "none";
        expand.className = "fa fa-chevron-up"
    }
});