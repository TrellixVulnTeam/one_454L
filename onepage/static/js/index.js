let body = document.getElementsByClassName("core");
let mobileNav = document.getElementById("mobile-nav");
let mobileMenuBg = document.getElementsByClassName("nav__mobile__background");
let mobileNavItems = document.getElementsByClassName("nav__mobile__items");
let mobileMenuItem = document.getElementsByClassName(
  "nav__mobile__items__item"
);
let hamburger = document.getElementById("hamburger");
let menuItem = document.getElementsByClassName("nav__desktop__items__item");
let menuItems = document.getElementsByClassName("nav__desktop__items");
let upChevron = document.getElementsByClassName("core__scroll-top");
let themeToggleInput = document.getElementById("themeToggleInput");
let themeLabel = document.getElementById("themeLabel");
let skillBars = document.querySelectorAll(".skills__box__loader__inner");
let sections = document.querySelectorAll("section");
let logo = document.getElementById("logo");

$(document).ready(function () {
  hamburger.addEventListener("click", navStatus);
  document.querySelector("#emailCopy").addEventListener("click", copy);

  setTimeout(function() {
    $(".map__text").addClass("loaded");
  }, 500);

  setTimeout(function() {
    $("themeLabel").fadeIn();
  }, 5000);

  for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", navUnderline);
  }

  for (let i = 0; i < mobileMenuItem.length; i++) {
    mobileMenuItem[i].addEventListener("click", mobileNavUnderline);
  }

  $(upChevron).on("click", function () {
    $("html, body").animate({ scrollTop: $("#body").offset().top }, 500);
  });

  $(document).scroll(function () {
    let y = $(this).scrollTop();
    if (y > 100) {
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

function navUnderline() {
  $(menuItem).removeClass("active");
  $(this).addClass("active");
}

function mobileNavUnderline() {
  $(mobileMenuItem).removeClass("active");
  $(this).addClass("active");
}

function setMapStyle(mapStyle) {
  map.setOptions({ styles: mapStyle });
}

$(themeToggleInput).on("click", function() {
  if ($(this).hasClass("fas")) {
    $(body).addClass("dark");
    setMapStyle(darkTheme);
    $(themeToggleInput).removeClass("fas").addClass("far");
  } else {
    $(body).removeClass("dark");
    setMapStyle(lightTheme);
    $(themeToggleInput).removeClass("far").addClass("fas");
  }
  if ($("themeLabel").is(":visible")) {
    $("themeLabel").fadeOut();
  }
})

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
      skillsObserver.unobserve(entry.target);
    }
  }, config);
});

skillBars.forEach((bar) => {
  skillsObserver.observe(bar);
});

if ('IntersectionObserver' in window) {
  let config = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      };

let observer = new IntersectionObserver(onChange, config);

sections.forEach(section => observer.observe(section));

function onChange(changes, observer) {
  changes.forEach(change => {
      if (change.intersectionRatio > 0.5) {

          let hash = change.target.id;
          let newStr = hash.replace("-section", "");
    
          $(menuItem).removeClass('active');
         
          let navEl = document.querySelector('.nav__desktop__items__item#' + newStr);
          navEl.classList.add('active');
      }
  });
}
} else {
}

$(menuItem).on("click", function () {
  let data = $(this).data("section");
  let matchingSection = $("body").find("section#" + data + "-section");

  setTimeout(function () {
    $("html, body").animate(
      {
        scrollTop: $(matchingSection).offset().top - 150,
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
  }, 1000);
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
