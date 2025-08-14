(async function () {
  const $ = (id) => document.getElementById(id);
  const userPref = localStorage.getItem('lang');
  const browserLang = (navigator.language || 'ja').toLowerCase();
  const initial = userPref || (browserLang.startsWith('ja') ? 'ja' : 'en');
  let lang = initial;

  async function loadI18n(l) {
    const res = await fetch(`assets/i18n/${l}.json`);
    return res.json();
  }

  async function applyI18n() {
    const t = await loadI18n(lang);
    const map = {
      "i-nav_home": t.nav_home,
      "i-nav_music": t.nav_music,
      "i-nav_legacy": t.nav_legacy,
      "i-title": t.title_legacy,
      "i-lead": t.lead,
      "i-where_in_japan": t.where_in_japan,
      "i-locations": t.locations
    };
    Object.entries(map).forEach(([id, val]) => { const el = $(id); if (el && val) el.textContent = val; });
    const btn = $('lang-toggle'); if (btn) btn.textContent = (lang === 'ja') ? 'EN' : '日本語';
  }

  const btn = $('lang-toggle');
  if (btn) btn.addEventListener('click', () => {
    lang = (lang === 'ja') ? 'en' : 'ja';
    localStorage.setItem('lang', lang);
    applyI18n(); applyMaps(); renderList();
  });

  function gmapEmbedByCenter({ lat, lng, z = 5 }) {
    const hl = (lang === 'ja') ? 'ja' : 'en';
    const region = (lang === 'ja') ? 'JP' : 'US';
    return `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5000000!2d${lng}!3d${lat}` +
           `!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1s${hl}!2s${region}`;
  }

  function applyMaps() {
    const j = $('japan-map');
    if (j) {
      const url = gmapEmbedByCenter({ lat: 38.0, lng: 139.7, z: 5 });
      j.src = url;
      const open = $('japan-open');
      if (open) {
        open.textContent = (lang === 'ja') ? 'Googleマップで開く' : 'Open in Google Maps';
        open.href = `https://www.google.com/maps/@38.0,139.7,5z?hl=${(lang==='ja'?'ja':'en')}`;
      }
    }
  }

  async function fetchHeritage() {
    const res = await fetch('data/heritage.json');
    return res.json();
  }

  async function renderList() {
    const wrap = $('site-list');
    if (!wrap) return;
    const list = await fetchHeritage();
    wrap.innerHTML = list.map(s => `
      <a class="card" href="${s.path}">
        <img src="${s.thumb}" alt="${(lang==='ja'?s.name_ja:s.name_en)} thumbnail" />
        <div class="card-body">
          <h3>${(lang==='ja'?s.name_ja:s.name_en)}</h3>
        </div>
      </a>
    `).join('');
  }

  await applyI18n();
  applyMaps();
  renderList();
})();
