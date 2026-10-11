/* FORMA STUDIO — MOBILE MENU */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
    });
  });
}

/* AUTOMATIC FOOTER YEAR */

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* CONTACT FORM */

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      return;
    }

    const formData = new FormData(contactForm);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const interest = String(formData.get("interest") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(
      `FORMA Studio — ${interest} enquiry`
    );

    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Project type: ${interest}\n\n` +
      `Project details:\n${message}`
    );

    formStatus.textContent =
      "Opening your email application to prepare the enquiry...";

    window.location.href =
      `mailto:hello@yourcompany.com?subject=${subject}&body=${body}`;
  });
}
