const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((el) => observer.observe(el));

const glow = document.querySelector('.cursor-glow');
const parallaxItems = document.querySelectorAll('[data-parallax]');
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window.addEventListener('mousemove', (e) => {
  if (!glow) return;
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;

  if (prefersReduced || window.innerWidth < 900) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  parallaxItems.forEach((item) => {
    const strength = Number(item.dataset.parallax || 6);
    item.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  });
});
