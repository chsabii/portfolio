(function () {
  "use strict";
  var KEY = "portfolio-theme";
  var SUN = '<svg class="icon-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M12 3v1.6M12 19.4V21M4.9 4.9l1.1 1.1M18 18l1.1 1.1M3 12h1.6M19.4 12H21M4.9 19.1L6 18M18 6l1.1-1.1"/></svg>';
  var MOON = '<svg class="icon-moon" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M16.5 13.2A6.2 6.2 0 0 1 10.8 7 6.3 6.3 0 1 0 16.5 13.2z"/></svg>';

  function current() {
    return document.documentElement.getAttribute("data-theme") || "dark";
  }

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(KEY, theme);
    } catch (e) {}
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.setAttribute("aria-label", theme === "light" ? "Switch to dark mode" : "Switch to light mode");
      btn.setAttribute("title", theme === "light" ? "Dark mode" : "Light mode");
    });
  }

  var saved = "dark";
  try {
    saved = localStorage.getItem(KEY) || "dark";
  } catch (e) {}
  apply(saved);

  function toggle() {
    apply(current() === "light" ? "dark" : "light");
  }

  function mount() {
    if (document.querySelector("[data-theme-toggle]")) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "theme-toggle";
    btn.setAttribute("data-theme-toggle", "1");
    btn.innerHTML = SUN + MOON;
    btn.addEventListener("click", toggle);
    document.body.appendChild(btn);
    apply(current());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
