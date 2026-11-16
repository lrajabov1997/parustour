/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Show menu */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Hide menu */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

const swiperHome = new Swiper(".home__swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: "auto",
  grabCursor: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoPlay: {
    delay: 500,
    disableOnInteraction: false,
  },
});

const bgHeader = () => {
  const header = document.getElementById("header");
  // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);

const swiperTestimonial = new Swiper(".testimonial__swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 48,
  grabCursor: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoPlay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // Add the .scroll-header class if the bottom scroll of the viewport is greater than 350
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]",
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

const popup = document.getElementById("popupModal");
const closeBtn = document.getElementById("closePopup");

// 🔥 HAMMA knopkalarni olish
document.querySelectorAll(".openPopup").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    popup.style.display = "flex";

    // scroll fix
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = scrollBarWidth + "px";
  });
});

// yopish
closeBtn.onclick = () => {
  popup.style.display = "none";
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
};

// tashqariga bosganda yopish
window.onclick = (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }
};

document.querySelectorAll(".telegram-form").forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value;
    const phone = form.querySelector('[name="phone"]').value;
    const direction = form.querySelector('[name="direction"]').value;
    const messageBox = form.querySelector(".form-message");

    const message = `🧳 Новая заявка!\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n🌍 Направление: ${direction}`;

    const token = "8769982742:AAH68_0YvTjCWwQ7VS9Qr8b9iHAkjG-Rp0A";
    const chat_id = "-5261510461";

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: message,
      }),
    })
      .then(() => {
        messageBox.style.display = "block";
        messageBox.textContent = "Отправлено!";
        form.reset();

        setTimeout(() => {
          messageBox.style.display = "none";
        }, 3000);
      })
      .catch(() => {
        messageBox.style.display = "block";
        messageBox.style.color = "red";
        messageBox.textContent = "Ошибка!";
      });
  });
});



