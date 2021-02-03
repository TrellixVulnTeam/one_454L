let body = document.getElementsByClassName("core");

let mobileNav = document.getElementById("mobile-nav");
let mobileMenuBg = document.getElementsByClassName("nav__mobile__background");
let mobileMenuItem = document.getElementsByClassName(
  "nav__mobile__items__item"
);
let hamburger = document.getElementById("hamburger");

let menuItem = document.getElementsByClassName("nav__desktop__items__item");

let upChevron = document.getElementsByClassName("core__scroll-top");

let themeBox = document.getElementById("themeBox");
let themeToggleInput = document.getElementById("themeToggleInput");

let skillBars = document.querySelectorAll(".skills__box__loader__inner");

$(document).ready(function() {
  hamburger.addEventListener("click", navStatus);
  themeToggleInput.addEventListener("click", themeClassChanges);
  document.querySelector("#emailCopy").addEventListener("click", copy);

  for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", navUnderline);
  }

  for (let i = 0; i < mobileMenuItem.length; i++) {
    mobileMenuItem[i].addEventListener("click", mobileNavUnderline);
  }

  $(upChevron).on("click", function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#nav").offset().top,
      },
      500
    );
  });

  $(themeBox).on("click", function () {
    console.log("theme box clicked");
    if (themeBox.classList.contains("active")) {
      $(themeBox).removeClass("active");
    } else {
      $(themeBox).addClass("active");
    }
  });

  $(document).scroll(function () {
    let y = $(this).scrollTop();
    if (y > 300) {
      $(upChevron).css("opacity", "100%");
    } else {
      $(upChevron).css("opacity", "0");
    }
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
}

function navOpen() {
  $(mobileNav).addClass("active");
  $(mobileMenuBg).addClass("active");
  $(hamburger).addClass("active");
}

function navUnderline() {
  $(menuItem).removeClass("active");
  $(this).addClass("active");
}

function mobileNavUnderline() {
  $(mobileMenuItem).removeClass("active");
  $(this).addClass("active");
}

function themeClassChanges() {
  if ($(themeToggleInput).is(":checked")) {
    $(body).addClass("dark");
  } else {
    $(body).removeClass("dark");
  }
}

function copy() {
  let copyText = document.querySelector("#emailInput");
  copyText.select();
  document.execCommand("copy");
}

const config = {
  root: null,
  rootMargin: "-100px 0 0 -100px",
};

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.9) {
      entry.target.classList.add("loaded");
      observer.unobserve(entry.target);
    }
  }, config);
});

skillBars.forEach((bar) => {
  observer.observe(bar);
});

$(menuItem).on("click", function () {
  let data = $(this).data("section");
  let matchingSection = $("body").find("section#" + data + "-section");

  setTimeout(function () {
    $("html, body").animate(
      {
        scrollTop: $(matchingSection).offset().top - 50,
      },
      500
    );
  }, 500);
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
  }, 1500);
});

function soulmate(event) {
  let element = $(event.target);
  let element_id = element.attr("id");
  let sid;

  if (element_id.indexOf("smallscreen-") >= 0) {
    sid = "#" + element_id.replace("smallscreen-", "");
    $(menuItem).removeClass("active");
    $(sid).addClass("active");
  } else {
    sid = "#" + "smallscreen-" + element_id;
    $(mobileMenuItem).removeClass("active");
    $(sid).addClass("active");
  }
}

$(mobileMenuItem).on("click", function (event) {
  soulmate(event);
});

$(menuItem).on("click", function (event) {
  soulmate(event);
});
