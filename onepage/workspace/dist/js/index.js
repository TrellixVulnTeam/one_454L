window.onload = function() {
    let menu = document.getElementById('menu');
    let hamburger = document.getElementById('hamburger');
    let menu_item = document.getElementsByClassName('nav__desktop__items__item');
    let mobile_menu_item = document.getElementsByClassName('nav__mobile__items__item');
    let mobile_background = document.getElementsByClassName('nav__mobile__background');
    let upChevron = document.getElementById('upChevron');

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
