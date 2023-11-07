// initial data
const btnMenu = document.querySelector('.icon-menu');
const menuMobile = document.querySelector('.container-menu-mobile');
const menu = document.querySelector('menu');

// functions
function removeDisplay() {
    menuMobile.style.display = "none";
}

//events
btnMenu.addEventListener('click', () => {
    menuMobile.style.display == "flex";
    if (menuMobile.style.display == "flex") {
        removeDisplay();
    } else {
        menuMobile.style.display = "flex";
    }
})
menuMobile.addEventListener('click', removeDisplay);
document.body.onresize = () => {
    if (document.body.clientWidth > 678) {
        removeDisplay();
    }
}

//slides

let slideIndex = 1;
mostrarSlide(slideIndex);

function mostrarSlide(n) {

    let slides = document.getElementsByClassName("slide");
    let thumbnails = document.getElementsByClassName("thumbnail");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("active");
    }
    slides[n - 1].style.display = "block";
    thumbnails[n - 1].classList.add("active");
}
