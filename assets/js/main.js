const linkedInIcon = document.getElementById("icon-linkedin-nav");
const dribbbleIcon = document.getElementById("icon-dribbble-nav");
const githubIcon = document.getElementById("icon-github-nav");
let tm = new TimelineMax();
tm.from(linkedInIcon, 0.5, { y: 100, ease: Back.easeIn });
tm.from(dribbbleIcon, 0.5, { y: 100, ease: Back.easeIn });
tm.from(githubIcon, 0.5, { y: 100, ease: Back.easeIn });

// const themeBut = document.getElementById("theme-button");
// TweenMax.from(themeBut, 5, { alpha: 0 });

const profileImg = document.getElementById("home__img");
TweenMax.from(profileImg, 2, { alpha: 0 });

/*=======MENU SHOW Y HIDDEN ======*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* ==== MENU SHOW ===*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* ==== MENU HIDDEN ===*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*===== REMOVE MENU MOBILE =====*/
const navLinks = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  //When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}

navLinks.forEach((n) => n.addEventListener("click", linkAction));
/*===== ACCORDION SKILLS =====*/
const skillsContents = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className; //the clicked one is the context

  for (i = 0; i < skillsContents.length; i++) {
    //Turn every skills to close first no mater it is already open or closed
    skillsContents[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    //Check clicked one's state, it it is closed, then just open it
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*===== QUALIFICATION TABS =====*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });

    target.classList.add("qualification__active");

    tabs.forEach((t) => {
      t.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*===== SERVICES MODAL =====*/
const dBody = document.body;
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  dBody.classList.add("cannotScroll");
  modalViews[modalClick].classList.add("active-modal");
  TweenMax.from(modalViews[modalClick], 0.5, {
    x: window.innerWidth,
    ease: Elastic.easeOut,
  });
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modelView) => {
      modelView.classList.remove("active-modal");
      dBody.classList.remove("cannotScroll");
    });
  });
});
/*===== Porfolio MODAL =====*/
// const portfolioModalViews = document.querySelectorAll(".services__modal"),
//   portfolioModalBtns = document.querySelectorAll(".services__button"),
//   portfolioModalCloses = document.querySelectorAll(".services__modal-close");

// let m = function (modalClick) {
//   portfolioModalViews[modalClick].classList.add("active-porfolio-modal");
// };

// portfolioModalBtns.forEach((modalBtn, i) => {
//   modalBtn.addEventListener("click", () => {
//     m(i);
//   });
// });

// portfolioModalCloses.forEach((modalClose) => {
//   modalClose.addEventListener("click", () => {
//     portfolioModalViews.forEach((modelView) => {
//       modelView.classList.remove("active-porfolio-modal");
//     });
//   });
// });
/*===== PORTFOLIO SWIPER =====*/
let swiperPorfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/*===== TESIMONIAL =====*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dymamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

/* ==== SCROLL SECTIONS ACTIVE LINK ===*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*=== CHANGE BACKGROUND HEADER ===*/
function scrollHeader() {
  const nav = document.getElementById("header");
  //when the scroll is geater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=== SHOW SCROLL UP ===*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  //When the scroll is higher than 560 viewport height, add the show-scoll class to the tag with the scroll
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=== DARK LIGHT THEME ===*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

//Previsouly selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//we obtain the current them that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

//we validate if the user previously chose a topic
if (selectedTheme) {
  //if the vaidation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

//Avtivate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  //We save the theme and the current icon that the user chose
  localStorage.setItem("selected-them", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

//For submissions
const form = document.getElementById("my_contact_form");

async function handleSubmit(event) {
  console.log("i am getting called");
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML =
        "Message Send Successfully. Thanks for your submission!";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
