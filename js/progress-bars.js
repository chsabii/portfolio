(function () {
  "use strict";

  var groups = document.querySelectorAll(".progress_skills");
  if (!groups.length) return;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function targetOf(bar) {
    var data = bar.getAttribute("data-progress");
    if (data) return parseFloat(data);
    var style = bar.getAttribute("style") || "";
    var match = style.match(/width:\s*([\d.]+)/);
    return match ? parseFloat(match[1]) : 0;
  }

  function valueLabel(bar) {
    var row = bar.closest(".single_progress");
    return row ? row.querySelector(".progress-value") : null;
  }

  function setWidth(bar, pct, animate) {
    bar.style.transition = animate
      ? "width 1.15s cubic-bezier(0.22, 1, 0.36, 1)"
      : "none";
    bar.style.width = pct + "%";
    bar.setAttribute("aria-valuenow", String(Math.round(pct)));
  }

  function countLabel(label, from, to, duration) {
    if (!label) return;
    var start = performance.now();
    function tick(now) {
      var t = Math.min(1, (now - start) / duration);
      var eased = 1 - Math.pow(1 - t, 3);
      label.textContent = Math.round(from + (to - from) * eased) + "%";
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function fillGroup(group, on) {
    var bars = group.querySelectorAll(".progress-bar");
    bars.forEach(function (bar, index) {
      var target = parseFloat(bar.dataset.progress || "0");
      var label = valueLabel(bar);
      window.setTimeout(function () {
        if (on) {
          bar.classList.add("is-filled");
          setWidth(bar, target, true);
          if (label) countLabel(label, 0, target, 1150);
        } else {
          bar.classList.remove("is-filled");
          setWidth(bar, 0, true);
          if (label) label.textContent = "0%";
        }
      }, on ? index * 140 : 0);
    });
  }

  groups.forEach(function (group) {
    group.querySelectorAll(".progress-bar").forEach(function (bar) {
      var target = targetOf(bar);
      bar.dataset.progress = String(target);
      if (reduced) {
        setWidth(bar, target, false);
      } else {
        setWidth(bar, 0, false);
        var label = valueLabel(bar);
        if (label) label.textContent = "0%";
      }
    });

    if (reduced) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          fillGroup(entry.target, entry.isIntersecting);
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(group);
  });
})();
