// Work strip marquee — auto-scrolls, pauses on hover.
(() => {
  const viewport = document.querySelector('[data-carousel]');
  const track = document.querySelector('[data-carousel-track]');
  if (!viewport || !track) return;

  let pos = 0;
  let paused = false;
  const speed = 0.45; // px per frame

  function tick() {
    if (track.scrollWidth > 0) {
      const half = track.scrollWidth / 2;
      if (!paused) pos += speed;
      if (pos >= half) pos -= half;
      if (pos < 0) pos += half;
      track.style.transform = `translateX(${-pos}px)`;
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  viewport.addEventListener('mouseenter', () => { paused = true; });
  viewport.addEventListener('mouseleave', () => { paused = false; });
})();

// FAQ accordion — one item open at a time.
(() => {
  const items = document.querySelectorAll('[data-faq-item]');
  items.forEach((item) => {
    const btn = item.querySelector('.faq-q');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      items.forEach((other) => {
        other.classList.remove('open');
        other.querySelector('.faq-sign').textContent = '+';
      });
      if (!isOpen) {
        item.classList.add('open');
        item.querySelector('.faq-sign').textContent = '–';
      }
    });
  });
})();
