function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');
    let linkOff = menu.find('.link')

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    linkOff.on('click', () => closeMenu())

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow-y', 'visible');
        }
    }

    function closeMenu() {
        menu.toggleClass('burger-menu_active');
        if (menu.hasClass('burger-menu')) {
            $('body').css('overflow-y', 'visible');
        }
    }
}

burgerMenu('.burger-menu');