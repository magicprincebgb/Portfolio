// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
// Year
document.getElementById('year').textContent = new Date().getFullYear();
// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  for (const e of entries){ if (e.isIntersecting){ e.target.classList.add('in'); observer.unobserve(e.target); } }
},{rootMargin:'-10% 0px'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
