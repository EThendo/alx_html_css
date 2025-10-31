document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('primary-nav');

  if (!hamburger || !nav) return;

  // Toggle function
  function toggleMenu() {
    const isOpen = hamburger.classList.toggle('open');
    nav.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  }

  // Click hamburger
  hamburger.addEventListener('click', toggleMenu);

  // Close when clicking a nav link (improves UX)
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // Optional: close menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});
