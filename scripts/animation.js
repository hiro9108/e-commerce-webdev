// gsap.from("header", { opacity: 0, duration: 1, y: -50 });

gsap.from(".logo-box", { opacity: 0, duration: 1, delay: 1, x: -50 });
gsap.from(".nav-link", { opacity: 0, duration: 1, delay: 1, x: 50 });

gsap.from(".top-content", {
  opacity: 0,
  duration: 2,
  delay: 1,
  ease: Bounce.easeOut,
  y: -500,
});
