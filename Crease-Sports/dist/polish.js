'use strict';
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;
  const cards = [...document.querySelectorAll('.brand-directory-card, .service-detail-steps article, .service-related a, .shop-stage-main, .shop-stage-small')];
  if (reduced.matches || !('IntersectionObserver' in window)) return;
  let observer;
  try {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06 });
    cards.forEach((card, index) => {
      card.classList.add('final-reveal');
      card.style.setProperty('--motion-delay', `${Math.min(index % 4, 3) * 55}ms`);
      observer.observe(card);
    });
    root.classList.add('final-motion');
    reduced.addEventListener('change', event => {
      if (event.matches) {
        root.classList.remove('final-motion');
        observer.disconnect();
        cards.forEach(card => card.classList.add('is-revealed'));
      }
    });
  } catch {
    root.classList.remove('final-motion');
    observer?.disconnect();
  }
})();
