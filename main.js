/* ==========================================================================
   MAIN.JS — dipakai khusus di index.html
   Tugas: render 3 featured project card, scroll reveal, hamburger nav
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. Render 3 Featured Project Cards ─────────────────────────── */
  const grid = document.getElementById('featured-grid');
  if (grid) {
    getFeaturedProjects().forEach((p, i) => {
      grid.insertAdjacentHTML('beforeend', buildCard(p, i));
    });
  }

  /* ── 2. Scroll Reveal ────────────────────────────────────────────── */
  initReveal();

  /* ── 3. Hamburger Nav ────────────────────────────────────────────── */
  initNav();

});

/* ── Build satu card HTML (string) dari object project ─────────────────── */
function buildCard(p, index) {
  const delayClass = index === 0 ? '' : index === 1 ? 'reveal-delay-1' : 'reveal-delay-2';
  const publishedBadge = p.isJournal
    ? `<span class="project-published">Journal Published</span>` : '';

  const tagsHtml = p.tags.slice(0, 3)
    .map(t => `<span class="project-tag">${t}</span>`)
    .join('');

  return `
    <div class="project-card reveal ${delayClass}">
      <div class="project-card-top">
        <span class="project-category ${p.categoryClass}">${p.category}</span>
        <span class="project-year">${p.year}</span>
      </div>
      ${publishedBadge}
      <h3 class="project-title">${p.shortTitle}</h3>
      <p class="project-desc">${p.cardDesc}</p>
      <div class="project-tags">${tagsHtml}</div>
    </div>
  `;
}

/* ── Scroll Reveal ──────────────────────────────────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const check = () => {
    els.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
        el.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', check, { passive: true });
  check(); // run on load
}

/* ── Hamburger Nav ──────────────────────────────────────────────────────── */
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  /* Tutup menu saat salah satu link diklik */
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}
