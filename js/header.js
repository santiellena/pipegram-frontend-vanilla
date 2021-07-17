const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const backMenu = document.getElementById('back-menu');

menuButton.addEventListener('click', () => {

    menu.classList.toggle('position-menu');
});

backMenu.addEventListener('click', () => {
    
    menu.classList.toggle('position-menu');
});

