const toggle = document.getElementById('languageToggle');
const menuToggle = document.getElementById('menuToggle');
const topbar = document.querySelector('.topbar');
const siteNav = document.getElementById('siteNav');
let language = 'de';

toggle.addEventListener('click', () => {
  language = language === 'de' ? 'en' : 'de';
  document.documentElement.lang = language;
  document.querySelectorAll('[data-de][data-en]').forEach(el => {
    el.innerHTML = el.dataset[language];
  });
  toggle.textContent = language === 'de' ? 'EN' : 'DE';
  toggle.setAttribute('aria-label', language === 'de' ? 'Switch language' : 'Sprache wechseln');
});

function setMenuOpen(open) {
  topbar.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
}

menuToggle.addEventListener('click', () => {
  setMenuOpen(!topbar.classList.contains('is-open'));
});

siteNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenuOpen(false));
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 800) setMenuOpen(false);
});
