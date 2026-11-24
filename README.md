# Edumath-Universe
 Sebuah aplikasi web (PWA) edukasi matematika interaktif yang bisa di-install di HP dan dimainkan secara offline. Terdiri dari 3 game utama (SD, SMP, Space Math) dengan sistem peringkat global terpusat.

Teknologi yang Digunakan:

Frontend: HTML5, CSS3 (Custom UI, Glassmorphism, Neon Effect), Vanilla JavaScript.

Backend (API): Google Apps Script (Web App).

Database: Google Sheets (Multi-sheet: Leaderboard_SD, Leaderboard_SMP, Leaderboard_Space).

Hosting: GitHub Pages.

PWA (Offline Mode): Service Worker (sw.js) & manifest.json.

Fitur Utama:

Single Sign-On (SSO): Login satu kali di Lobi Utama, nama otomatis terbawa ke semua game.

Sistem Bank Soal (Anti-Duplikat): Soal diacak dari kumpulan soal unik, sehingga tidak ada soal yang berulang dalam 1 sesi.

Tingkat Kesulitan: Setiap kelas/level dibagi menjadi Beginner, Intermediate, dan Advanced.

Singapore Math: Visual Number Bond (ikatan bilangan) dan Bar Model pada game SD.

Peringkat Global (Leaderboard): Skor otomatis dikirim ke Google Sheets dan bisa difilter berdasarkan Kelas/Level.

Tema Visual: Lobi Luar Angkasa dengan efek kaca transparan dan ikon 3D.

📂 2. DAFTAR FILE & FUNGSINYA
Berikut adalah file yang ada di repositori GitHub Anda (edumath):

index.html: Lobi utama. Berisi layar Login dan menu pemilihan game (SD, SMP, Space). Menggunakan desain Glassmorphism (kaca transparan).

sd.html: Game matematika SD (Kelas 1-6). Berisi visual Singapore Math (Number Bond & Bar Model).

smp.html: Game matematika SMP (Kelas 7-9). Berisi soal Aljabar, Geometri, dll.

space.html: Game khusus perkalian & pembagian. Menggunakan keypad ketik angka, timer, dan mode step-by-step (bersusun).

sw.js: Service Worker. Wajib di-update versinya (v1, v2, v3, dst) setiap kali Anda mengubah file HTML agar HP memuat versi terbaru.

manifest.json: File konfigurasi PWA (nama aplikasi, warna, dan ikon).

icon-192.png & icon-512.png: Ikon aplikasi saat di-install di HP.

icon-sd.png, icon-smp.png, icon-space.png: Ikon 3D yang tampil di menu Lobi.

bg-space.jpg: Gambar latar belakang luar angkasa di Lobi.

Google Apps Script (Code.gs): Kode backend yang berada di Google Sheets (BUKAN di GitHub).

Google Sheets: Berisi 3 tab sheet untuk database peringkat.
