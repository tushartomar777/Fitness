const hiddenButton = document.querySelector(".close-button");
const hiddenMenu = document.querySelector(".hidden-menu");
const openMenu = document.querySelector(".fa-list");
openMenu.addEventListener('click', () => {
    hiddenMenu.style.display = "flex";
    hiddenButton.style.display = "block";
})
hiddenButton.addEventListener('click', () => {
    hiddenMenu.style.display = "none";
    hiddenButton.style.display = "none";
})
