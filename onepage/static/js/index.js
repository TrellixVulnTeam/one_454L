let body = document.getElementsByClassName("core");
let mobileNav = document.getElementById("mobile-nav");
let mobileMenuBg = document.getElementsByClassName("nav__mobile__background");
let mobileNavItems = document.getElementsByClassName("nav__mobile__items");
let mobileMenuItem = document.getElementsByClassName(
  "nav__mobile__items__item"
);
let hamburger = document.getElementById("hamburger");
let upChevron = document.getElementsByClassName("core__scroll-top");
let themeToggleInput = document.getElementById("themeToggleInput");
let themeLabel = document.getElementById("themeLabel");
let skillBars = document.querySelectorAll(".skills__box__loader__inner");
let sections = document.querySelectorAll("section");
let logo = document.getElementById("logo");

$(document).ready(function () {
  $(window).scroll(function () {
    var s = $(window).scrollTop(),
      d = $(document).height(),
      c = $(window).height();
    let scrollPercent = (s / (d - c)) * 100;
    let position = scrollPercent + "%";
    $(".core__scroll-progress").css("width", position);
  });

  $(window).scroll(function () {
    let y = $(this).scrollTop();
    if (y > 100) {
      $(upChevron).css("opacity", "100%");
    } else {
      $(upChevron).css("opacity", "0");
    }
  });

  let theme = localStorage.getItem("theme");
  if (!theme) {
    theme = "light";
    localStorage.setItem("theme", "light");
  }

  hamburger.addEventListener("click", navStatus);
  document.querySelector("#emailCopy").addEventListener("click", copy);

  setTimeout(function () {
    $(".map__text").addClass("loaded");
    $(".map__name").addClass("loaded");
    loadTheme();
  }, 200);

  function themeLabelAppear() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        $(themeLabel).fadeIn();
        resolve("Label appeared!");
      }, 2000);
    });
  }

  function themeLabelDissapear() {
    setTimeout(function () {
      $(themeLabel).fadeOut();
    }, 5000);
  }

  themeLabelAppear().then(themeLabelDissapear);

  for (let i = 0; i < mobileMenuItem.length; i++) {
    mobileMenuItem[i].addEventListener("click", mobileNavUnderline);
  }

  $(upChevron).on("click", function () {
    $("html, body").animate({ scrollTop: $("#body").offset().top }, 500);
  });
});

function navStatus() {
  if (mobileNav.classList.contains("active")) {
    navClose();
  } else {
    navOpen();
  }
}

function navClose() {
  $(mobileNav).removeClass("active");
  $(mobileMenuBg).removeClass("active");
  $(hamburger).removeClass("active");
  setTimeout(function () {
    $(logo).removeClass("active");
  }, 200);
}

function navOpen() {
  $(mobileNav).addClass("active");
  $(mobileMenuBg).addClass("active");
  $(hamburger).addClass("active");
  setTimeout(function () {
    $(logo).addClass("active");
  }, 200);
}

function mobileNavUnderline() {
  $(mobileMenuItem).removeClass("active");
  $(this).addClass("active");
}

function setMapStyle(mapStyle) {
  map.setOptions({ styles: mapStyle });
}

$(themeToggleInput).on("click", function () {
  if ($(this).hasClass("fas")) {
    localStorage.setItem("theme", "dark");
    $(body).addClass("dark");
    setMapStyle(darkTheme);
    $(themeToggleInput).removeClass("fas").addClass("far");
  } else {
    $(body).removeClass("dark");
    localStorage.setItem("theme", "light");
    $(body).removeClass("dark");
    setMapStyle(lightTheme);
    $(themeToggleInput).removeClass("far").addClass("fas");
  }
  if ($(themeLabel).is(":visible")) {
    $(themeLabel).fadeOut();
  }
});

function copy() {
  let copyText = document.querySelector("#emailInput");
  copyText.select();
  document.execCommand("copy");
}

const config = {
  root: null,
  rootMargin: "0px 0px 0px 0px;",
  threshold: 0,
};

let skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.3) {
      entry.target.classList.add("loaded");
      $(".nav__scroll-down").fadeOut();
      $(".nav__name").fadeIn();
      console.log("scrolled down");
      skillsObserver.unobserve(entry.target);
    }
  }, config);
});

skillBars.forEach((bar) => {
  skillsObserver.observe(bar);
});

$(mobileMenuItem).on("click", function () {
  let data = $(this).data("section");
  let section = $("body").find("section#" + data + "-section");

  navStatus();

  setTimeout(function () {
    $("html, body").animate(
      {
        scrollTop: $(section).offset().top - 50,
      },
      500
    );
  }, 1000);
});

function loadTheme() {
  if (localStorage && localStorage.getItem("theme")) {
    var storedTheme = localStorage.getItem("theme");

    if (storedTheme == "light") {
      $(body).removeClass("dark");
      setMapStyle(lightTheme);
      $(themeToggleInput).removeClass("far").addClass("fas");
    } else {
      $(body).addClass("dark");
      setMapStyle(darkTheme);
      $(themeToggleInput).removeClass("fas").addClass("far");
    }
  }
}
