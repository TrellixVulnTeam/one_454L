window.onload = function() {
    var menu = document.getElementById('menu');
    var hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click', navStatus);

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
}
