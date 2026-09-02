/* Nav toggle and utilities */
(function () {
  "use strict";

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  const yearEl = document.querySelector("#year");
  const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function setNavOpen(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNavOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        setNavOpen(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setNavOpen(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 720) setNavOpen(false);
    });
  }

  function updateNavCurrent() {
    const sections = ["about", "experience", "contact"];
    let current = null;

    sections.forEach(function (id) {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      if (top - 100 <= 0) current = id;
    });

    if (window.scrollY < 100) current = null;

    navLinks.forEach(function (link) {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        const match = href === "#" + current;
        if (match) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      }
    });
  }

  window.addEventListener("scroll", updateNavCurrent, { passive: true });
  updateNavCurrent();

  /* Parallax ink illustrations */
  (function () {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    if (prefersReducedMotion.matches) return;

    const illustrations = document.querySelectorAll(".ink-illustration");
    
    function updateParallax() {
      const scrolled = window.scrollY;
      
      illustrations.forEach(function (el, index) {
        const speed = 0.15 + (index % 3) * 0.05;
        const direction = index % 2 === 0 ? 1 : -1;
        const yOffset = scrolled * speed * direction;
        const rotation = (scrolled * 0.02 * direction) % 360;
        
        el.style.transform = "translateY(" + yOffset + "px) rotate(" + rotation + "deg)";
      });
    }

    window.addEventListener("scroll", updateParallax, { passive: true });
    updateParallax();
  })();
})();
