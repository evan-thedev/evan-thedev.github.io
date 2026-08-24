/* Nav, scroll spy, reduced-motion reveals, year. */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  const yearEl = document.querySelector("#year");
  const sectionIds = ["about", "skills", "experience", "projects", "contact"];

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

    nav.querySelectorAll("a").forEach(function (link) {
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

  const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));

  function setCurrent(id) {
    navLinks.forEach(function (link) {
      const match = link.getAttribute("href") === "#" + id;
      if (match) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }

  function updateSpy() {
    const offset = (header ? header.offsetHeight : 68) + 24;
    let current = null;
    sectionIds.forEach(function (id) {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      if (top - offset <= 0) current = id;
    });
    if (window.scrollY < 80) current = null;
    setCurrent(current);
  }

  window.addEventListener("scroll", updateSpy, { passive: true });
  updateSpy();

  if (!reduceMotion && "IntersectionObserver" in window) {
    const targets = document.querySelectorAll(".section, .hero-inner, .project, .skill-card");
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    targets.forEach(function (el) {
      io.observe(el);
    });
  }
})();
