"use strict";

// FAQ accordion
document.addEventListener("DOMContentLoaded", function () {
  const faqContainer = document.querySelector(".faq-content");

  faqContainer.addEventListener("click", function (e) {
    const faqQuestion = e.target.closest(".faq-question");
    if (!faqQuestion) {
      return;
    }

    const faqGroup = faqQuestion.parentElement; // select the FAQ group
    const faqAnswer = faqGroup.querySelector(".faq-answer");
    const icon = faqGroup.querySelector("i");

    // toggle icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // toggle content (text)
    faqAnswer.classList.toggle("open");

    // hide other 'open' FAQ answers
    const otherGroups = faqContainer.querySelectorAll(".faq-group"); // select all the FAQ groups
    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== faqGroup) {
        const otherGroupAnswer = otherGroup.querySelector(".faq-answer");
        const otherGroupIcon = otherGroup.querySelector(".faq-question i");

        otherGroupAnswer.classList.remove("open");
        otherGroupIcon.classList.remove("fa-minus");
        otherGroupIcon.classList.add("fa-plus");
      }
    });
  });
});

// mobile menu navigation
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-btn");
  const mobileMenu = document.querySelector(".mobile-menu-links");

  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});
