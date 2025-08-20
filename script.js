// Simple script for Bio Link Store
(function () {
  const html = document.documentElement;
  const btn = document.getElementById('toggleTheme');
  const nameEl = document.getElementById('displayName');
  const taglineEl = document.getElementById('tagline');
  const linkGo = document.querySelector('.links .btn-gofood');
  const linkGrab = document.querySelector('.links .btn-grabfood');
  const linkShopee = document.querySelector('.links .btn-shopee');
  const linkMaps = document.querySelector('.links .btn-maps');

  // Basic theme toggle with persistence
  const THEME_KEY = 'bio-link-theme';
  const saved = localStorage.getItem(THEME_KEY);
  // Default to light theme unless user explicitly saved 'dark'
  if (saved === 'dark') {
    html.removeAttribute('data-theme');
    btn?.setAttribute('aria-pressed', 'false');
  } else {
    html.setAttribute('data-theme', 'light');
    btn?.setAttribute('aria-pressed', 'true');
  }

  btn?.addEventListener('click', () => {
    const isLight = html.getAttribute('data-theme') === 'light';
    if (isLight) {
      html.removeAttribute('data-theme');
      localStorage.setItem(THEME_KEY, 'dark');
      btn.setAttribute('aria-pressed', 'false');
    } else {
      html.setAttribute('data-theme', 'light');
      localStorage.setItem(THEME_KEY, 'light');
      btn.setAttribute('aria-pressed', 'true');
    }
  });

  // Configuration via window.APP_CONFIG
  const cfg = window.APP_CONFIG || {
    name: 'Nama Brand / Restoran',
    tagline: 'Tagline singkat atau deskripsi (contoh: "Pesan makanan favorit Anda di sini!")',
    avatar: 'assets/profile-placeholder.svg',
    links: {
      gofood: '#',
      grabfood: '#',
      shopee: '#'
    }
  };

  // Apply content
  if (nameEl) nameEl.textContent = cfg.name;
  if (taglineEl) taglineEl.textContent = cfg.tagline;
  const avatarImg = document.querySelector('.avatar img');
  if (avatarImg && cfg.avatar) avatarImg.src = cfg.avatar;

  if (linkGo && cfg.links.gofood) linkGo.href = cfg.links.gofood;
  if (linkGrab && cfg.links.grabfood) linkGrab.href = cfg.links.grabfood;
  if (linkShopee && cfg.links.shopee) linkShopee.href = cfg.links.shopee;
  if (linkMaps && cfg.links.maps) linkMaps.href = cfg.links.maps;
})();
