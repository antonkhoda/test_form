const closeBtn = document.querySelector('.main-menu__footer-close');
const menuBlock = document.querySelector('.main-menu');

closeBtn.addEventListener('click', function() {
    menuBlock.classList.add('main-menu--isclose');
    menuBlock.textContent = ''
    console.log(menuBlock);
})