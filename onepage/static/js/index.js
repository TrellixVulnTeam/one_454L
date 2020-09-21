window.onload = function() {
    let menu = document.getElementById('menu');
    let hamburger = document.getElementById('hamburger');
    let menu_item = document.getElementsByClassName('nav__desktop__items__item');
    let mobile_menu_item = document.getElementsByClassName('nav__mobile__items__item');

    hamburger.addEventListener('click', navStatus);

     for (let i = 0; i < menu_item.length; i++) {
        menu_item[i].addEventListener('click', navUnderline);
    }

     for (let i = 0; i < mobile_menu_item.length; i++) {
         mobile_menu_item[i].addEventListener('click', mobileNavUnderline);
     }

    function navStatus() {
        if ((hamburger).classList.contains('nav__mobile__hamburger-icon-container-active')) {
            navClose();
        } else {
            navOpen();
        }
    }

    function navClose() {
        (hamburger).classList.remove('nav__mobile__hamburger-icon-container-active');
        (menu).classList.remove('nav__mobile__items-is-open');
    }

    function navOpen() {
        (hamburger).classList.add('nav__mobile__hamburger-icon-container-active');
        (menu).classList.add('nav__mobile__items-is-open');
    }

    function navUnderline() {
            $(menu_item).removeClass('active');
            $(this).addClass('active');
        }

     function mobileNavUnderline() {
         $(mobile_menu_item).removeClass('active');
         $(this).addClass('active');
     }
};
