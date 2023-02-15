const btn = document.getElementById("menuBtn");
const menu = document.getElementById('mobileMenu')

btn.addEventListener('click', navToggle);

function navToggle () {
    btn.classList.toggle('open');
    menu.classList.toggle('showMenu');
}

