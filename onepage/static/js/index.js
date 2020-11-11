import {init, resetCanvas, step} from "./particles";

let body = document.getElementsByClassName('core');
let mapText = document.getElementsByClassName('map__text');
let mapShadow = document.getElementsByClassName('map__shadow');
let particlesText = document.getElementsByClassName('particles__text');
let mobileNav = document.getElementsByClassName('nav__mobile__hamburger-icon-container');
let mobileNavBg = document.getElementsByClassName('nav__mobile__background');
let mobileNavItems = document.getElementsByClassName('nav__mobile__items__item');
let menu = document.getElementById('menu');
let hamburger = document.getElementById('hamburger');
let menu_item = document.getElementsByClassName('nav__desktop__items__item');
let mobile_menu_item = document.getElementsByClassName('nav__mobile__items__item');
let mobile_background = document.getElementsByClassName('nav__mobile__background');
let upChevron = document.getElementById('upChevron');
let themeBox = document.getElementById('themeBox');
let themeToggle = document.getElementById('themeToggle');
let themeToggleInput = document.getElementById('themeToggleInput');
let themeToggleSlider = document.getElementById('themeToggleSlider');
let themeChevron = document.getElementById('themeChevron');
let themeChevronContainer = document.getElementById('themeChevronContainer');

window.onload = function() {

    hamburger.addEventListener('click', navStatus);

    for (let i = 0; i < menu_item.length; i++) {
        menu_item[i].addEventListener('click', navUnderline);
    }

    for (let i = 0; i < mobile_menu_item.length; i++) {
        mobile_menu_item[i].addEventListener('click', mobileNavUnderline);
    }

    function navStatus() {
        if ((hamburger).classList.contains('active')) {
            navClose();
        } else {
            navOpen();
        }
    }

    function navClose() {
        $(mobile_background).removeClass('active');
        $(hamburger).removeClass('active');
        $(menu).removeClass('active');
    }

    function navOpen() {
        $(mobile_background).addClass('active');
        $(hamburger).addClass('active');
        $(menu).addClass('active');
    }

    function navUnderline() {
        $(menu_item).removeClass('active');
        $(this).addClass('active');
    }

    function mobileNavUnderline() {
        $(mobile_menu_item).removeClass('active');
        $(this).addClass('active');
    }

    $(upChevron).on('click', function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#nav").offset().top
        }, 500);
    });

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 300) {
            $(upChevron).css('opacity', '100%');
        } else {
            $(upChevron).css('opacity', '0');
        }
    });

    $(themeChevron).on('click', function() {
        if ((themeBox).classList.contains('active')) {
            themeBoxClose();
        } else {
            themeBoxOpen();
        }
    });

    function themeBoxOpen() {
        $(themeChevron).addClass('active');
        $(themeBox).addClass('active');
        $(themeToggle).addClass('active');
    }

    function themeBoxClose() {
        $(themeChevron).removeClass('active');
        $(themeBox).removeClass('active');
        $(themeToggle).removeClass('active');
    }

    themeToggleInput.addEventListener('click', themeClassChanges);

    init();
    step();
};

$(document).ready(function() {
    setTimeout(fadeOutPlayer, 1500);
    setTimeout(displayNone, 3000);
});

function fadeOutPlayer() {
    let player = document.getElementById("lottieLogo");
    player.addEventListener('complete', function(){
        $(this).css('opacity', '0');
    });
}

function displayNone() {
    let player = document.getElementById("lottieLogo");
    $(player).css('display', 'none');
}

function themeClassChanges() {
    if ($(themeToggleInput).is(":checked")) {
        $(themeBox).addClass('dark');
        $(themeToggleSlider).addClass('dark');
        $(themeChevron).addClass('dark');
        $(themeChevronContainer).addClass('dark');
        $(body).addClass('dark');
        $(mapShadow).addClass('dark');
        $(mapText).addClass('dark');
        $(particlesText).addClass('dark');
        $(mobileNav).addClass('dark');
        $(mobileNavBg).addClass('dark');
        $(mobileNavItems).addClass('dark');
        resetCanvas();
    } else {
        $(themeBox).removeClass('dark');
        $(themeToggleSlider).removeClass('dark');
        $(themeChevron).removeClass('dark');
        $(themeChevronContainer).removeClass('dark');
        $(body).removeClass('dark');
        $(mapShadow).removeClass('dark');
        $(mapText).removeClass('dark');
        $(particlesText).removeClass('dark');
        $(mobileNav).addClass('dark');
        $(mobileNavBg).removeClass('dark');
        $(mobileNavItems).removeClass('dark');
        resetCanvas();
    }
}