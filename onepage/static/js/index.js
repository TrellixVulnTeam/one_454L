import {init, resetCanvas, step} from "./particles.js";

let body = document.getElementsByClassName('core');

let mapText = document.getElementsByClassName('map__text');
let mapShadow = document.getElementsByClassName('map__shadow');

let particlesText = document.getElementsByClassName('particles__text');

let binaryText = document.getElementsByClassName('binary__container__content');
let binaryForeground = document.querySelector('path');

let mobileMenu = document.getElementsByClassName('nav__mobile__hamburger-icon-container');
let mobileMenuBg = document.getElementsByClassName('nav__mobile__background');
let mobileMenuItem = document.getElementsByClassName('nav__mobile__items__item');
let menu = document.getElementById('menu');

let hamburger = document.getElementById('hamburger');
let menuItem = document.getElementsByClassName('nav__desktop__items__item');

let upChevron = document.getElementById('upChevron');

let themeBox = document.getElementById('themeBox');
let themeToggle = document.getElementById('themeToggle');
let themeToggleInput = document.getElementById('themeToggleInput');
let themeToggleSlider = document.getElementById('themeToggleSlider');
let themeChevron = document.getElementById('themeChevron');
let themeChevronContainer = document.getElementById('themeChevronContainer');

window.onload = function() {

    hamburger.addEventListener('click', navStatus);

    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].addEventListener('click', navUnderline);
    }

    for (let i = 0; i < mobileMenuItem.length; i++) {
        mobileMenuItem[i].addEventListener('click', mobileNavUnderline);
    }

    function navStatus() {
        if ((hamburger).classList.contains('active')) {
            navClose();
        } else {
            navOpen();
        }
    }

    function navClose() {
        $(mobileMenuBg).removeClass('active');
        $(hamburger).removeClass('active');
        $(menu).removeClass('active');
    }

    function navOpen() {
        $(mobileMenuBg).addClass('active');
        $(hamburger).addClass('active');
        $(menu).addClass('active');
    }

    function navUnderline() {
        $(menuItem).removeClass('active');
        $(this).addClass('active');
    }

    function mobileNavUnderline() {
        $(mobileMenuItem).removeClass('active');
        $(this).addClass('active');
    }

    $(upChevron).on('click', function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#nav").offset().top
        }, 500);
    });

    $(document).scroll(function() {
        let y = $(this).scrollTop();
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

    document.querySelector("#emailCopy").addEventListener("click", copy);

    init();
    step();
};

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
        $(binaryText).addClass('dark');
        $(mobileMenu).addClass('dark');
        $(mobileMenuBg).addClass('dark');
        $(mobileMenuItem).addClass('dark');
        $(binaryForeground).addClass('dark');
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
        $(binaryText).removeClass('dark');
        $(mobileMenu).removeClass('dark');
        $(mobileMenuBg).removeClass('dark');
        $(mobileMenuItem).removeClass('dark');
        $(binaryForeground).removeClass('dark');
        resetCanvas();
    }
}

function copy() {
    let copyText = document.querySelector("#emailInput");
    copyText.select();
    document.execCommand("copy");
  }

let skillBars = document.querySelectorAll(".skills__box__loader__inner");

const config = {
    root: null,
    rootMargin: '-100px 0 0 -100px',
  };

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.9) {
            entry.target.classList.add('loaded');
            observer.unobserve(entry.target);
      }
    }, config);
  });
  
  skillBars.forEach(bar => {
    observer.observe(bar);
  });

$(menuItem).on('click', function() {
    let data = $(this).data('section');
    let matchingSection = $('body').find('section#' + data + '-section');

    $('html, body').animate({
        scrollTop: $(matchingSection).offset().top-50
    }, 500);
});

$(mobileMenuItem).on('click', function() {
    let data = $(this).data('section');
    let section = $('body').find('section#' + data + '-section');

    $(mobileMenuBg).removeClass('active');
    $(hamburger).removeClass('active');
    $(menu).removeClass('active');

    setTimeout(function() {
        $('html, body').animate({
            scrollTop: $(section).offset().top-50
        }, 500);
    }, 1000);
})
