/**
 * Soft premium particles — theme-matched, cursor-reactive.
 * Warm copper palette only. pointer-events: none.
 */
(function () {
  "use strict";

  function boot() {
    var canvas = document.getElementById("particles-canvas");
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.id = "particles-canvas";
      canvas.setAttribute("aria-hidden", "true");
      document.body.appendChild(canvas);
    }

    canvas.style.cssText = [
      "position:fixed",
      "top:0",
      "left:0",
      "width:100vw",
      "height:100vh",
      "z-index:4",
      "pointer-events:none",
      "display:block",
      "opacity:1"
    ].join(";");

    var ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    var particles = [];
    var mouse = { x: -9999, y: -9999, active: false };
    var width = 0;
    var height = 0;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Portfolio theme only — copper / warm gold / soft cream (no neon rainbow)
    var COLORS = [
      "rgba(219, 154, 100, 0.9)",
      "rgba(204, 173, 133, 0.85)",
      "rgba(232, 196, 150, 0.8)",
      "rgba(245, 222, 179, 0.7)",
      "rgba(255, 255, 255, 0.45)",
      "rgba(186, 140, 95, 0.8)"
    ];

    function particleCount() {
      var area = width * height;
      var count = Math.floor(area / 18000);
      return Math.max(35, Math.min(count, 85));
    }

    function createParticle() {
      var x = Math.random() * width;
      var y = Math.random() * height;
      var size = 0.8 + Math.random() * 1.8;
      return {
        ox: x,
        oy: y,
        x: x,
        y: y,
        vx: 0,
        vy: 0,
        size: size,
        baseSize: size,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        driftX: (Math.random() - 0.5) * 0.12,
        driftY: (Math.random() - 0.5) * 0.12,
        phase: Math.random() * Math.PI * 2,
        speed: 0.002 + Math.random() * 0.005,
        alpha: 0.25 + Math.random() * 0.35
      };
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      var target = reducedMotion ? Math.min(30, particleCount()) : particleCount();
      particles = [];
      for (var i = 0; i < target; i++) {
        particles.push(createParticle());
      }
    }

    function onMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }

    function onLeave() {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function onTouch(e) {
      if (!e.touches || !e.touches.length) return;
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
      mouse.active = true;
    }

    function update(p, t) {
      var floatX = Math.sin(t * p.speed + p.phase) * 5;
      var floatY = Math.cos(t * p.speed * 0.9 + p.phase) * 5;
      var targetX = p.ox + floatX;
      var targetY = p.oy + floatY;
      var near = 0;

      if (mouse.active) {
        var dx = p.x - mouse.x;
        var dy = p.y - mouse.y;
        var dist = Math.sqrt(dx * dx + dy * dy) || 1;
        var radius = 110;

        if (dist < radius) {
          near = 1 - dist / radius;
          // Soft push away from cursor
          var force = near * 2.2;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      }

      // Gently brighten / grow near cursor
      var wantSize = p.baseSize * (1 + near * 0.9);
      p.size += (wantSize - p.size) * 0.08;

      p.vx += (targetX - p.x) * 0.028;
      p.vy += (targetY - p.y) * 0.028;
      p.vx *= 0.9;
      p.vy *= 0.9;
      p.x += p.vx + p.driftX;
      p.y += p.vy + p.driftY;
    }

    function drawParticle(p, nearBoost) {
      var a = p.alpha + nearBoost * 0.35;
      if (a > 0.85) a = 0.85;

      // Soft glow halo
      var glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
      glow.addColorStop(0, "rgba(219, 154, 100, " + (a * 0.22) + ")");
      glow.addColorStop(1, "rgba(219, 154, 100, 0)");
      ctx.beginPath();
      ctx.fillStyle = glow;
      ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
      ctx.fill();

      // Core dot
      ctx.beginPath();
      ctx.globalAlpha = a;
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    function drawCursorAura() {
      if (!mouse.active) return;
      var g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 90);
      g.addColorStop(0, "rgba(219, 154, 100, 0.08)");
      g.addColorStop(0.5, "rgba(219, 154, 100, 0.03)");
      g.addColorStop(1, "rgba(219, 154, 100, 0)");
      ctx.beginPath();
      ctx.fillStyle = g;
      ctx.arc(mouse.x, mouse.y, 90, 0, Math.PI * 2);
      ctx.fill();
    }

    function connectSoft() {
      var maxDist = 75;
      var limit = Math.min(particles.length, 70);
      for (var i = 0; i < limit; i++) {
        for (var j = i + 1; j < limit; j++) {
          var a = particles[i];
          var b = particles[j];
          var dx = a.x - b.x;
          var dy = a.y - b.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = "rgba(219, 154, 100, " + (0.06 * (1 - dist / maxDist)) + ")";
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
    }

    function frame(ts) {
      var t = ts || 0;
      ctx.clearRect(0, 0, width, height);

      drawCursorAura();

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        var nearBoost = 0;
        if (mouse.active) {
          var dx = p.x - mouse.x;
          var dy = p.y - mouse.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) nearBoost = 1 - dist / 110;
        }
        if (!reducedMotion) update(p, t);
        drawParticle(p, nearBoost);
      }

      if (!reducedMotion) connectSoft();

      requestAnimationFrame(frame);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onLeave);

    resize();
    requestAnimationFrame(frame);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
