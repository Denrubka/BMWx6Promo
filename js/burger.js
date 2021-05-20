const burgerButton = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu');
const headerWrapper = document.querySelector('.header-wrapper');



headerWrapper.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains('humburger-menu') && !target.classList.contains('humburger-menu-active')) {
        burgerButton.classList.add('humburger-menu-active');
        menu.classList.add('menu-active');
    } else if(target.classList.contains('humburger-menu-active') || target.classList.contains('menu-list__link')){
        burgerButton.classList.remove('humburger-menu-active');
        menu.classList.remove('menu-active');
    }
});
