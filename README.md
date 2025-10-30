# ELCODE — Elevating Coding! (Astro + Tailwind)

Landing page komunitas ELCODE, dibangun dengan Astro (static) dan Tailwind CSS.

## Prasyarat
- Node.js LTS (18+ direkomendasikan)
- npm (atau pnpm/yarn, bebas disesuaikan)

## Mulai Cepat

1) (Opsional) Inisiasi proyek Astro standar
- Dokumentasi resmi (tidak dieksekusi di sini):
  
  npm create astro@latest

2) Instal dependensi

```bash
npm i
```

3) Jalankan pengembangan

```bash
npm run dev
```

Buka http://localhost:4321.

4) Build untuk produksi

```bash
npm run build && npm run preview
```

## Struktur Proyek
- `src/pages` — Halaman (`/`, `/about`, `/contact`, `/resources`).
- `src/layouts` — Layout bersama dengan meta SEO dan JSON-LD.
- `src/components` — Komponen UI reusable: navbar, hero, card, dsb.
- `src/styles` — Gaya global (Tailwind + util custom).
- `public` — Aset publik termasuk `og-image.png` dan `favicon.svg`.

## Kustomisasi

- Warna brand: diedit di `tailwind.config.mjs` pada `theme.extend.colors`.
- Font: Inter via Google Fonts di `BaseLayout.astro`.
- Ikon: SVG inline di komponen (mirip Lucide/Tabler). Anda bisa mengganti `<svg>` sesuai kebutuhan.
- Tambah Section: gunakan komponen `Section.astro` sebagai wrapper dengan `title`, `description`, dan `id` untuk anchor.
- SEO: ubah judul/deskripsi di `src/layouts/BaseLayout.astro`. OG/Twitter image berada di `public/og-image.png` (kami juga sertakan `public/og-image.svg`).

## Aksesibilitas
- Landmark semantik: `<header>`, `<main>`, `<footer>`.
- Teks alternatif dan label form.
- Focus ring jelas (lihat `global.css`).
- Smooth scroll aktif.

## Deploy

- Vercel: import repo, pilih framework Astro, deploy.
- Netlify: deploy dari repo, build command `npm run build`, publish directory `dist`.
- Cloudflare Pages: build command `npm run build`, output `dist`.

## Lisensi & Kontribusi

Konten dan kode dapat dimodifikasi untuk kebutuhan komunitas. Kirim PR untuk perbaikan dan penambahan fitur.

