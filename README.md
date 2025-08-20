# Bio Link Store

Halaman bio link sederhana untuk tautan GoFood, GrabFood, dan ShopeeFood.

## Jalankan Lokal
1) Terminal di folder proyek ini
2) Jalankan: `python3 -m http.server 5173`
3) Buka: http://localhost:5173

## Kustomisasi Cepat
Edit `index.html` pada blok:
```
<script>
  window.APP_CONFIG = {
    name: 'Nama Brand / Restoran',
    tagline: 'Tagline singkat',
    avatar: 'assets/profile-placeholder.svg',
    links: {
      gofood: 'URL_GOFOOD_ANDA',
      grabfood: 'URL_GRABFOOD_ANDA',
      shopee: 'URL_SHOPEEFOOD_ANDA'
    }
  };
</script>
```
Ganti nama, tagline, avatar, dan URL sesuai milik Anda.

echo "# yoikistorelink" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/rezyegaofc/yoikistorelink.git
git push -u origin main
