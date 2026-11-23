# ?? TUGAS-6-PAW: Aplikasi Pengelola Daftar Tugas Kuliah

Aplikasi web modern untuk mengelola daftar tugas kuliah yang dibangun menggunakan **React**, **TypeScript**, dan **Vite** untuk memenuhi tugas mata kuliah **Pemrograman Aplikasi Web (PAW)**.

---

## ?? Identitas Mahasiswa
- **Nama**: Ulya Mutiara
- **Mata Kuliah**: Pemrograman Aplikasi Web (PAW)
- **Tugas**: Tugas 6 - Aplikasi Pengelola Tugas Kuliah (TypeScript & Vite)

---

## ?? Fitur Aplikasi
1. **Menampilkan Daftar Tugas Kuliah**: Menampilkan judul tugas, mata kuliah, tenggat waktu (deadline), status pengerjaan, dan prioritas tugas.
2. **Menambahkan Tugas Baru**: Formulir input interaktif dengan validasi data (judul, mata kuliah, deadline, prioritas).
3. **Mengedit Tugas**: Kemampuan mengubah detail tugas yang sudah ada.
4. **Menghapus Tugas**: Menghapus tugas yang sudah tidak diperlukan.
5. **Mengubah Status Tugas**: Tombol beralih status antara **"Belum Selesai"** dan **"Selesai"** secara instan.
6. **Tampilan Rapi & Responsif**: Antarmuka bersih, adaptif untuk layar smartphone, tablet, maupun desktop.

---

## ?? Pemenuhan Ketentuan Tugas

### 1. Implementasi TypeScript
Dalam file `src/types.ts` dan `src/App.tsx`:
- **Primitive Types**:
  - `number`: ID tugas (`id: number`), total tugas (`total: number`).
  - `string`: Judul (`judul: string`), mata kuliah (`mataKuliah: string`), deadline (`deadline: string`).
  - `boolean`: Prioritas (`prioritas: boolean`).
- **Array**:
  - `items: T[]` dan `TugasKuliah[]`.
- **Interface**:
  - `interface TugasKuliah`: Struktur data tugas kuliah.
  - `interface KoleksiData<T>`: Struktur data pembungkus kumpulan tugas.
- **Type Alias & Union Type**:
  - `type StatusTugas = "Belum Selesai" | "Selesai";`
- **Generics Sederhana**:
  - `interface KoleksiData<T>` menggunakan generic `<T>` untuk menampung koleksi data secara type-safe.

### 2. npm dan Vite
- **Dependencies vs devDependencies**:
  - `dependencies`: Pustaka yang dibutuhkan saat runtime produksi (`react`, `react-dom`).
  - `devDependencies`: Alat yang hanya dibutuhkan saat proses development/kompilasi (`vite`, `typescript`, `@vitejs/plugin-react`, `oxlint`).
- **Semantic Versioning (SemVer)**:
  - `^` (Caret) contoh `^19.3.1`: Mengizinkan update minor dan patch yang kompatibel secara otomatis.
  - `~` (Tilde) contoh `~7.0.2`: Hanya mengizinkan update level patch (bug fixing).
- **npm Scripts**:
  - `npm run dev`: Menjalankan server pengembangan Vite lokal.
  - `npm run build`: Kompilasi TypeScript (`tsc -b`) dan build produksi Vite ke folder `dist/`.
  - `npm run preview`: Pratinjau hasil build produksi lokal.

### 3. Environment Variables
- Konfigurasi aplikasi dikelola melalui file `.env`.
- File `.env.example` disediakan sebagai acuan publik di GitHub.
- File `.env` masuk ke `.gitignore` sehingga data rahasia seperti `SECRET_API_KEY` tidak terunggah ke repositori GitHub.
- Variabel non-rahasia (`VITE_APP_NAME`, `VITE_APP_VERSION`) ditampilkan di header aplikasi via `import.meta.env`.

---

## ??? Cara Menjalankan Proyek

1. Masuk ke direktori tugas:
   ```bash
   cd Tugas-6-PAW
   ```
2. Pasang dependensi:
   ```bash
   npm install
   ```
3. Siapkan file environment:
   ```bash
   cp .env.example .env
   ```
4. Jalankan aplikasi:
   ```bash
   npm run dev
   ```
5. Build untuk produksi:
   ```bash
   npm run build
   ```

---

## ?? Git Workflow & GitHub

### 1. Minimal 5 Commit
Riwayat commit dibuat rapi dan bertahap:
1. `feat(setup): inisialisasi proyek Vite React TypeScript dan konfigurasi gitignore`
2. `feat(types): implementasi interface, union type, primitive types, dan generic KoleksiData`
3. `feat(ui): implementasi antarmuka dan styling responsif pada App.css dan index.css`
4. `feat(app): implementasi fitur CRUD tugas kuliah dan integrasi environment variables`
5. `docs: tambahkan dokumentasi lengkap tugas pada README.md`

### 2. Branching & Resolusi Merge Conflict
- Branch utama: `main`
- Branch fitur: `feature/filter-status`, `feature/conflict-demo`, `feature/pull-request-demo`
- Simulasi dan penyelesaian merge conflict dilakukan pada branch `feature/conflict-demo` dan dimerge ke `main`.

---

## ?? Panduan Push ke GitHub & Deploy Online

1. Buat repositori baru di GitHub dengan nama `Tugas-6-PAW`.
2. Push repositori lokal ke GitHub:
   ```bash
   git remote add origin https://github.com/UlyaMutiara/Tugas-6-PAW.git
   git push -u origin main
   git push -u origin feature/pull-request-demo
   ```
3. Buat Pull Request dari branch `feature/pull-request-demo` ke `main` di GitHub.
4. Deploy ke **Vercel** atau **GitHub Pages** agar dapat diakses secara online.
