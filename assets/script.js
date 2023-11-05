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
