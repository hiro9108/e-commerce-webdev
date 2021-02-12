// gsap.from("header", { opacity: 0, duration: 1, y: -50 });

gsap.from(".navbar span", { opacity: 0, duration: 1, delay: 1, y: -50 });
gsap.from(".logo-box", { opacity: 0, duration: 1, delay: 1, x: -50 });
gsap.from(".nav-link", { opacity: 0, duration: 1, delay: 1, x: 50 });

gsap.from(".sphere video", {
  opacity: 0,
  duration: 10,
  delay: 3,
  ease: Bounce.easeOut,
});

gsap.from(".sphere h1", {
  opacity: 0,
  duration: 10,
  delay: 9,
  ease: Bounce.easeOut,
});
