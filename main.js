const elements = document.querySelectorAll(".reveal-left, .reveal-right");

const revealVisibleElements = () => {
  const viewportHeight = window.innerHeight;

  elements.forEach((element) => {
    const bounds = element.getBoundingClientRect();
    const isVisible =
      bounds.top < viewportHeight * 0.85 &&
      bounds.bottom > viewportHeight * 0.15;

    element.classList.toggle("show", isVisible);
  });
};

window.addEventListener("scroll", revealVisibleElements, { passive: true });
window.addEventListener("resize", revealVisibleElements);
window.requestAnimationFrame(revealVisibleElements);

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  });
});

const backToTop = document.querySelector(".back-to-top");

const toggleBackToTop = () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 500);
};

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", toggleBackToTop, { passive: true });
toggleBackToTop();
