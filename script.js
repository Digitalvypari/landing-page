AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60,
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 8px 24px rgba(2,6,23,0.08)';
  } else {
    header.style.boxShadow = 'none';
  }
});
