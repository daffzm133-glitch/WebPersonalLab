# Daffa STEAM Lab — Catatan, Tutorial & Portofolio Pelatihan 4 Hari (SMS STEAM)

Website dokumentasi pembelajaran, etalase project, tutorial siap ajar, dan portofolio karya selama mengikuti **Pelatihan Intensif SMS STEAM (4 Hari — 12 Materi)**.

Dibangun dengan **Next.js (App Router)**, **Tailwind CSS**, **WebGL 3D STL Viewer**, dan **Firebase (Firestore + Authentication — Gratis Spark Plan)**.

---

## Fitur Utama

- **Peta Perjalanan 4 Hari + Progress Tracker**: Menampilkan 12 materi pelatihan terkelompok dalam Hari Ke-1 s/d Hari Ke-4.
- **12 Halaman Khusus Materi (`/materi/[slug]`)**: Setiap materi memiliki halaman sendiri dengan 3 tab:
  1. **Project & Karya** (galeri foto, tombol download `.stl` / `.sb3`, link demo, dan **Interactive 3D STL Viewer** khusus model 3D Tinkercad!)
  2. **Catatan & Cheat Sheet** (rangkuman materi, kartu shortcut keyboard visual, dan tips praktik)
  3. **Tutorial Siap Ajar** (panduan step-by-step lengkap dengan gambar screenshot & blok kode)
- **Galeri Portofolio (`/portofolio`)**: Rekap semua karya dengan filter per hari & pencarian.
- **Pusat Tutorial & Catatan (`/tutorial`)**: Pencarian global untuk semua tutorial, catatan, dan shortcut.
- **Dashboard Admin (`/admin`)**: Tambah/edit/hapus Project, Catatan, Tutorial, Profil, dan Status Materi langsung dari website + Backup/Import JSON.

---

## Cara Menjalankan di Laptop

```bash
cd e:\SMSIT\web-portfolio
npm install
npm run dev
```

Lalu buka http://localhost:3000 di browser.

---

## Cara Menghubungkan ke Firebase (100% Gratis Spark Plan)

Website ini otomatis berjalan dengan **Mode Lokal** jika Firebase belum diisi, dan otomatis beralih ke **Firebase Cloud** begitu `.env.local` diisi:

1. Buka https://console.firebase.google.com/ → **Create a project**.
2. Aktifkan **Firestore Database** (pilih region `asia-southeast2` / Jakarta).
3. Aktifkan **Authentication** → tab **Sign-in method** → aktifkan **Email/Password** → lalu di tab **Users** tambahkan akun email & password admin kamu.
4. Masuk ke **Project Settings** → **Your apps** → tambah Web App (`</>`) → salin nilai `firebaseConfig`.
5. Salin file `.env.example` menjadi `.env.local` lalu tempel konfigurasinya:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

6. Pasang **Firestore Security Rules** agar publik hanya bisa membaca, dan hanya Admin yang sudah login yang bisa mengubah data:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /smsit_portfolio/{docId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /smsit_modules/{docId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

7. Restart `npm run dev`, login ke `/admin`, lalu klik **"Upload Data Awal ke Firestore"**.

---

## Cara Push ke GitHub & Deploy Gratis ke Vercel

```bash
cd e:\SMSIT\web-portfolio
git add .
git commit -m "feat: website portofolio, catatan & tutorial SMS STEAM 4 Hari"
git branch -M main
git remote add origin https://github.com/USERNAME_KAMU/NAMA_REPO.git
git push -u origin main
```

Setelah di GitHub, kamu bisa deploy gratis di https://vercel.com (import repository GitHub-mu, lalu masukkan 6 variabel `NEXT_PUBLIC_FIREBASE_*` di menu *Environment Variables* Vercel).
