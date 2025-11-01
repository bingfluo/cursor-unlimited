// Basic interactions: mobile nav toggle, smooth scroll, year update

const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth scroll for in-page anchors
document.addEventListener('click', (e) => {
  const target = e.target;
  const anchor = target instanceof Element ? target.closest('a[href^="#"]') : null;
  if (anchor instanceof HTMLAnchorElement) {
    const id = anchor.getAttribute('href');
    const el = id ? document.querySelector(id) : null;
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});

// Dynamic year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}


