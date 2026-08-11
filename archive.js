/* ==========================================================================
   ARCHIVE.JS — dipakai khusus di archive.html
   Tugas: render tabel seluruh project bergaya Brittany Chiang + nav mobile
   ========================================================================== */

/* SVG Icons (inline, tidak butuh file eksternal) */
const SVG_GITHUB = `
  <svg viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
             0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756
             -1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07
             1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334
             -5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0
             1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404
             2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911
             1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606
             -.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.63
             -5.37-12-12-12z"/>
  </svg>`;

const SVG_EXTERNAL = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="External link">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>`;

/* ── Render tabel ────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderArchive();
  initNav();
  initReveal();
});

function renderArchive() {
  const tbody = document.getElementById('archive-tbody');
  if (!tbody) return;

  getAllProjects().forEach(p => {
    const row = buildRow(p);
    tbody.insertAdjacentHTML('beforeend', row);
  });
}

function buildRow(p) {
  /* Badge "Published" untuk journal */
  const journalBadge = p.isJournal
    ? `<span class="archive-journal-badge">Published · ${p.journalName || 'Journal'}</span>`
    : '';

  /* Tag teknologi */
  const tagsHtml = p.tags
    .map(t => `<span class="archive-tag">${t}</span>`)
    .join('');

  /* Tag teknologi untuk mobile card (pakai class project-tag agar konsisten) */
  const tagsCardHtml = p.tags
    .map(t => `<span class="project-tag">${t}</span>`)
    .join('');

  /* Link GitHub */
  const githubEl = p.linkGithub
    ? `<a href="${p.linkGithub}" target="_blank" rel="noopener"
          class="archive-icon-link" title="View on GitHub">${SVG_GITHUB}</a>`
    : `<span class="archive-dash" aria-label="No repository">—</span>`;

  /* Link Demo / External */
  const demoEl = p.linkDemo
    ? `<a href="${p.linkDemo}" target="_blank" rel="noopener"
          class="archive-icon-link demo-link" title="View Demo / Live">${SVG_EXTERNAL}</a>`
    : `<span class="archive-dash" aria-label="No demo">—</span>`;

  return `
    <tr class="reveal">
      <td class="col-year">${p.year}</td>
      <td class="col-name">
        <div class="col-name-inner">
          ${journalBadge}
          <span>${p.title}</span>
          <!-- Tags ini muncul di mobile sebagai subteks pengganti kolom Tech -->
          <div class="archive-tags archive-mobile-tags" style="display:none;">
            ${tagsHtml}
          </div>
        </div>
        <!-- Card mobile — hanya tampil di ≤768px via CSS -->
        <div class="archive-mobile-card" aria-hidden="true">
          <div class="archive-card-top">
            <span class="project-category ${p.categoryClass}">${p.category}</span>
            <span class="project-year">${p.year}</span>
          </div>
          ${journalBadge}
          <h3 class="archive-card-title">${p.title}</h3>
          <p class="archive-card-desc">${p.cardDesc}</p>
          <div class="project-tags">${tagsCardHtml}</div>
          <div class="archive-card-links">
            ${githubEl}
            ${demoEl}
          </div>
        </div>
      </td>
      <td class="col-cat">
        <span class="project-category ${p.categoryClass}">${p.category}</span>
      </td>
      <td class="col-tech">
        <div class="archive-tags">${tagsHtml}</div>
      </td>
      <td class="col-links">
        <div class="archive-links">
          ${githubEl}
          ${demoEl}
        </div>
      </td>
    </tr>
  `;
}

/* ── Scroll Reveal ───────────────────────────────────────────────────────── */
function initReveal() {
  const check = () => {
    document.querySelectorAll('.reveal').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
        el.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', check, { passive: true });
  check();
}

/* ── Hamburger Nav ───────────────────────────────────────────────────────── */
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── Mobile: archive-mobile-tags tidak lagi digunakan di mobile,
   semua ditangani lewat .archive-mobile-card via CSS ─────────────────── */
(function applyMobileLayout() {
  // Fungsi ini dipertahankan untuk backward-compat,
  // namun tidak perlu mengubah display karena layout kini sepenuhnya CSS-driven.
})();
