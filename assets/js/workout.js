
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 4000);
}

const button_hamburg = document.querySelector(".hamburg");
const tabletMenu = document.querySelector(".tablet-menu");
const close_button = document.querySelector(".hamburg-2");
const headerElem = document.querySelector(".header");
button_hamburg.addEventListener('click', () => {
    console.log('hello')
    tabletMenu.style.display = 'flex';
    close_button.style.visibility = 'visible';
    headerElem.style.display = 'none'
    button_hamburg.style.display = "none"
})
close_button.addEventListener('click', () => {
    tabletMenu.style.display = 'none';
    close_button.style.visibility = 'hidden';
    headerElem.style.display = 'flex'
    button_hamburg.style.display = "flex"
})
