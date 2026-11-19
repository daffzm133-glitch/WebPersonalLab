import type { PortfolioData } from "@/types/curriculum";

export const SEED_DATA: PortfolioData = {
  updatedAt: "2026-11-19T21:45:00+07:00",
  profile: {
    name: "Daffa Zidan",
    displayName: "Daffa",
    siteTitle: "Daffa STEAM Lab",
    role: "Peserta Pelatihan SMS STEAM & Pendidik Teknologi",
    programName: "Pelatihan Intensif SMS STEAM — Project Pembelajaran 4 Hari",
    year: "2026",
    bio: "Catatan belajar, gudang project, panduan tutorial siap ajar, dan portofolio karya selama mengikuti pelatihan intensif STEAM: mulai dari Robotika, 3D Design & Printing, Game Coding, IoT, AR, AI, hingga Aplikasi Android.",
    mission:
      "Mendokumentasikan setiap praktik langsung menjadi modul belajar yang rapi, mudah dipahami, dan siap diajarkan kembali di sekolah.",
    email: "daffzm133@gmail.com",
    github: "https://github.com/DaffaZidanKun",
    instagram: "",
    skills: [
      "LEGO WeDo 2.0",
      "3D Tinkercad",
      "Scratch Game Coding",
      "Tiny:bit Robotics",
      "Micro:bit IoT",
      "Minecraft Education",
      "WebAR",
      "AI PictoBlox",
      "Roblox Studio",
      "Canva",
      "CapCut",
      "Thunkable Android",
    ],
  },
  modules: [
    // ==================== HARI KE-1 ====================
    {
      slug: "lego-wedo-education",
      day: 1,
      order: 1,
      title: "Robotic Lego WeDo Education",
      shortTitle: "Lego WeDo 2.0",
      category: "Robotika",
      tagline: "Merakit mekanik robot edukasi & memprogram gerak motor via Bluetooth Smart Hub",
      summary:
        "Mempelajari dasar robotika untuk edukasi menggunakan kit LEGO Education WeDo 2.0. Mulai dari merakit struktur mekanik robot katak, menghubungkan Smart Hub ke laptop lewat Bluetooth, hingga menyusun blok program pengatur kecepatan, arah putar, dan durasi motor.",
      learningGoals: [
        "Mengenal komponen utama kit LEGO WeDo 2.0 (Smart Hub, Medium Motor, roda gigi, dan balok struktur)",
        "Menghubungkan Smart Hub ke aplikasi LEGO WeDo 2.0 di laptop melalui Bluetooth",
        "Menyusun alur blok pemrograman untuk mengatur kecepatan motor, arah putar, dan waktu gerak",
      ],
      status: "completed",
      accentColor: "emerald",
      iconName: "bot",
      tools: ["LEGO Education WeDo 2.0 Kit", "Software WeDo 2.0 (v1.9)", "Bluetooth Smart Hub"],
      projects: [
        {
          id: "lego-robot-katak",
          title: "Robot Katak (Frog) LEGO WeDo 2.0",
          subtitle: "Rakit Mekanik & Pemrograman Gerak Motor Bolak-Balik",
          description:
            "Project pertama di Hari Ke-1: merakit robot berbentuk katak hijau-oranye menggunakan kit LEGO WeDo 2.0 yang terhubung dengan Smart Hub dan motor penggerak. Robot diprogram dengan blok visual di software WeDo 2.0 agar motor bergerak maju-mundur secara terkontrol dengan tenaga level 8.",
          image: "/assets/lego/robot-katak-wedo.jpg",
          gallery: [
            {
              src: "/assets/lego/robot-katak-wedo.jpg",
              caption:
                "Hasil rakitan Robot Katak LEGO WeDo 2.0 terhubung langsung ke aplikasi WeDo 2.0 di laptop.",
            },
            {
              src: "/assets/lego/program-blok-wedo.png",
              caption:
                "Susunan blok pemrograman: Play → Motor Power 8 → Putar searah jarum jam (30) → Putar berlawanan arah (20).",
            },
          ],
          tags: ["LEGO WeDo 2.0", "Robotika Dasar", "Block Coding", "Smart Hub"],
          date: "19 November 2026",
          featured: true,
        },
      ],
      notes: [
        {
          id: "note-wedo-dasar",
          title: "Catatan Dasar Komponen & Blok Motor LEGO WeDo 2.0",
          category: "Ringkasan Materi",
          summary:
            "Rangkuman fungsi blok warna hijau (Motor), blok kuning (Start/Flow), dan tips pairing Bluetooth Smart Hub.",
          content: `Pada praktik Hari Ke-1 menggunakan LEGO Education WeDo 2.0, ada tiga bagian utama yang perlu dipahami sebelum mengajar di kelas:

1. Persiapan Software & Koneksi
- Install software LEGO Education WeDo 2.0 di laptop Windows dan pastikan Bluetooth aktif.
- Tekan tombol hijau pada Smart Hub hingga lampu berkedip biru, lalu pilih perangkat di ikon Smart Hub kanan atas layar aplikasi.

2. Arti Blok Pemrograman yang Dipakai
- Blok Kuning (Play ▶): Memulai eksekusi program saat diklik.
- Blok Hijau Motor Power (angka 8): Mengatur kekuatan/kecepatan putaran motor (skala 1–10; angka 8 cukup kuat untuk menggerakkan kaki robot).
- Blok Hijau Motor This Way (↻): Memutar motor searah jarum jam.
- Blok Hijau Motor On For (jam pasir, angka 30 & 20): Menjalankan motor selama durasi tertentu sebelum lanjut ke blok berikutnya.
- Blok Hijau Motor That Way (↺): Membalik arah putaran motor berlawanan jarum jam agar gerak robot kembali/berganti arah.
- Tombol Merah (Stop ■): Menghentikan seluruh motor secara instan jika robot terlalu cepat atau tersangkut.`,
          tips: [
            "Pastikan baterai Smart Hub cukup penuh—jika lampu berkedip merah atau gerakan motor lemah, segera ganti baterai.",
            "Mulai uji coba motor dengan Motor Power sedang (5–8) agar sambungan LEGO tidak mudah terlepas.",
            "Cek kembali posisi gear/as motor sebelum menekan tombol Play.",
          ],
          updatedAt: "2026-11-19",
        },
      ],
      tutorials: [
        {
          id: "tut-wedo-katak",
          title: "Tutorial Merakit & Memprogram Robot Katak LEGO WeDo 2.0",
          subtitle: "Panduan praktis siap ajar untuk sesi pengenalan robotika di kelas",
          difficulty: "Pemula",
          duration: "45 menit",
          tools: ["Kit LEGO Education WeDo 2.0", "Laptop + Software WeDo 2.0"],
          goal: "Siswa mampu merakit robot sederhana dengan motor, melakukan pairing Bluetooth Smart Hub, dan memprogram gerakan bolak-balik.",
          steps: [
            {
              stepNumber: 1,
              title: "Rakit Badan Robot Katak & Pasang Smart Hub",
              description:
                "Susun bagian badan utama robot menggunakan balok LEGO, pasang Medium Motor pada poros penggerak kaki, lalu tempelkan Smart Hub di bagian punggung robot dan sambungkan kabel motor ke port Smart Hub.",
              image: "/assets/lego/robot-katak-wedo.jpg",
              tip: "Pastikan poros kaki bisa berputar bebas saat diputar pelan dengan tangan sebelum motor dinyalakan.",
            },
            {
              stepNumber: 2,
              title: "Hubungkan Smart Hub ke Laptop via Bluetooth",
              description:
                "Buka software LEGO WeDo 2.0, buat project baru, lalu klik ikon Smart Hub berwarna biru di pojok kanan atas. Tekan tombol pada fisik Smart Hub hingga lampu menyala biru stabil (terhubung).",
              tip: "Jika dipakai di kelas dengan banyak kelompok, beri nama Smart Hub per kelompok agar tidak tertukar saat koneksi Bluetooth.",
            },
            {
              stepNumber: 3,
              title: "Susun Blok Program Gerak Motor",
              description:
                "Tarik blok dari palet bawah ke kanvas kerja secara berurutan: Mulai dengan Blok Start (Play kuning) → Motor Power diisi nilai 8 → Arah Putar Searah Jarum Jam → Durasi Motor diisi 30 → Arah Putar Berlawanan Jarum Jam → Durasi Motor diisi 20.",
              image: "/assets/lego/program-blok-wedo.png",
              codeSnippet:
                "[▶ Start] → [⚡ Motor Power: 8] → [↻ Searah Jarum Jam] → [⏳ Durasi: 30] → [↺ Berlawanan Arah] → [⏳ Durasi: 20]",
              tip: "Ajak siswa bereksperimen mengubah angka Power (misal 4 vs 8) dan Durasi (10 vs 30) untuk melihat perbedaan gerak robot!",
            },
          ],
        },
      ],
    },

    {
      slug: "tinkercad-3d-design",
      day: 1,
      order: 2,
      title: "3D Design & 3D Printing Tinkercad",
      shortTitle: "3D Tinkercad",
      category: "3D & Desain",
      tagline: "Merancang model 3D kreatif dari bentuk dasar hingga ekspor file .STL siap cetak 3D Printer",
      summary:
        "Belajar pemodelan 3D secara mudah langsung di browser menggunakan Autodesk Tinkercad. Materi mencakup manipulasi objek pada Workplane, teknik Solid & Hole (membuat lubang gantungan kunci), penggabungan bentuk (Union/Group), penggunaan shortcut keyboard, hingga ekspor file .STL untuk mesin 3D Printer.",
      learningGoals: [
        "Menguasai navigasi 3D Workplane dan pengaturan dimensi (Snap Grid milimeter)",
        "Menggabungkan bentuk Solid dan Hole menggunakan Group/Union (Ctrl + G)",
        "Membuat desain custom seperti gantungan kunci nama, emblem, dan mahkota 3D",
        "Mengekspor karya menjadi file .STL yang siap masuk ke slicer 3D Printer",
      ],
      status: "completed",
      accentColor: "emerald",
      iconName: "box",
      tools: ["Autodesk Tinkercad (Web)", "Format File .STL", "3D Slicer / 3D Printer"],
      projects: [
        {
          id: "tinkercad-ganci-daffa",
          title: 'Gantungan Kunci Nama "daffa" (3D Ready)',
          subtitle: "Desain Name Tag 3D + Preview Model .STL Interaktif",
          description:
            'Karya gantungan kunci personal bertuliskan "daffa" di atas pelat merah dengan lubang gantungan (Hole silinder), dihiasi aksen bintang kuning di pojok kanan atas dan ikon hati biru di pojok kiri bawah. Model ini sudah diekspor menjadi file .STL dan bisa kamu putar langsung secara 3D di bawah!',
          image: "/assets/tinkercad/ganci-daffa.png",
          stlUrl: "/assets/tinkercad/ganci.stl",
          downloadUrl: "/assets/tinkercad/ganci.stl",
          downloadLabel: "Download File 3D (ganci.stl)",
          tags: ["Tinkercad", "3D Printing", "Keychain", "File .STL"],
          date: "19 November 2026",
          featured: true,
        },
        {
          id: "tinkercad-best-axe",
          title: 'Gantungan Kunci Emblem "BEST AXE"',
          subtitle: "Desain Medali Bundar dengan Ornamen Kapak Bermata Dua",
          description:
            'Eksplorasi desain gantungan kunci berbentuk lingkaran dengan bingkai hitam, dasar putih, hiasan kapak ganda 3D (Double Blade Axe) di tengah, serta kombinasi dua jenis tipografi bertuliskan "BEST" dan "AXE".',
          image: "/assets/tinkercad/ganci-best-axe.png",
          tags: ["Tinkercad", "Emblem 3D", "Multi-Layer", "Typography"],
          date: "19 November 2026",
          featured: true,
        },
        {
          id: "tinkercad-mahkota",
          title: "Desain 3D Mahkota Permata",
          subtitle: "Pemodelan Bentuk Melingkar dengan Aksen Permata Merah",
          description:
            "Desain mahkota 3D berwarna oranye emas dengan ujung runcing simetris yang dipercantik dengan ornamen permata merah (bentuk diamond) mengelilingi bagian luar mahkota.",
          image: "/assets/tinkercad/mahkota-3d.png",
          downloadUrl: "/assets/tinkercad/mahkota.stl",
          downloadLabel: "Download Mahkota.stl",
          tags: ["Tinkercad", "Crown 3D", "Simetri", "Basic Shapes"],
          date: "19 November 2026",
          featured: false,
        },
        {
          id: "tinkercad-sword-tag",
          title: "Tag Gantungan Kunci Ukiran Pedang",
          subtitle: "Desain Ganci Gaya Ticket Tag dengan Teknik Cutout / Emboss",
          description:
            "Desain tag gantungan kunci berbentuk bingkai tiket klasik dengan lekukan sudut dan lubang gantungan di sisi kanan, dilengkapi detail ukiran pedang dan pola geometris simetris di bagian tengah.",
          image: "/assets/tinkercad/ganci-pedang.png",
          tags: ["Tinkercad", "Cutout / Hole", "Keychain", "Ornamen"],
          date: "19 November 2026",
          featured: false,
        },
      ],
      notes: [
        {
          id: "note-tinkercad-shortcuts",
          title: "Cheat Sheet Shortcut Keyboard Tinkercad",
          category: "Shortcut & Tips",
          summary:
            "Kumpulan shortcut penting dari catatan pelatihan untuk mempercepat proses desain 3D di Tinkercad.",
          content: `Berdasarkan catatan langsung selama praktik 3D Tinkercad, menghafal shortcut keyboard sangat membantu supaya proses merapikan posisi, menggandakan pola (seperti permata mahkota), dan menyatukan objek jauh lebih cepat.

Selain shortcut di bawah, biasakan mengecek satuan "Snap Grid" di pojok kanan bawah (default 1.0 mm) dan pastikan objek benar-benar menempel di Workplane (tidak melayang) sebelum melakukan Export ke format .STL untuk 3D Printing.`,
          shortcuts: [
            {
              keys: "Ctrl + A",
              action: "Select All",
              detail: "Memilih seluruh objek yang ada di atas Workplane sekaligus.",
            },
            {
              keys: "Ctrl + D",
              action: "Duplicate & Repeat",
              detail:
                "Menduplikasi objek terpilih (jika langsung digeser/diputar lalu tekan Ctrl + D lagi, Tinkercad otomatis mengulang polanya!).",
            },
            {
              keys: "Ctrl + M  (atau M)",
              action: "Mirror / Flip",
              detail: "Mencerminkan (membalik arah) objek secara horizontal atau vertikal.",
            },
            {
              keys: "Ctrl + L  (atau L)",
              action: "Lock / Align",
              detail:
                "Ctrl + L mengunci posisi objek agar tidak tergeser; tombol L membuka alat Align untuk meratakan objek ke tengah/tepi.",
            },
            {
              keys: "Ctrl + G",
              action: "Group / Union",
              detail:
                "Menggabungkan beberapa bentuk Solid, atau melubangi objek Solid menggunakan bentuk Hole.",
            },
          ],
          tips: [
            "Saat klik Export → .STL, pastikan tidak hanya 1 bagian kecil yang terseleksi (atau pilih 'Everything in the design') agar seluruh model ikut terekspor!",
            "Untuk gantungan kunci, buat ketebalan dasar sekitar 3–4 mm dan ketebalan huruf timbul +1,5 mm agar kokoh saat dicetak.",
            "Gunakan warna berbeda (Multi-color) saat menggabungkan objek dengan mencentang opsi 'Multicolor' pada menu warna Shape.",
          ],
          updatedAt: "2026-11-19",
        },
      ],
      tutorials: [
        {
          id: "tut-tinkercad-ganci",
          title: "Tutorial Membuat Gantungan Kunci Nama 3D di Tinkercad",
          subtitle: "Langkah sederhana membuat name tag gantungan kunci siap cetak 3D Printer",
          difficulty: "Pemula",
          duration: "35 menit",
          tools: ["Browser + Akun Tinkercad", "Mouse (disarankan dengan scroll wheel)"],
          goal: "Menghasilkan desain gantungan kunci nama custom lengkap dengan lubang gantungan dan hiasan, lalu mengekspornya ke file .STL.",
          steps: [
            {
              stepNumber: 1,
              title: "Buat Alas Gantungan Kunci (Base Plate)",
              description:
                "Tarik bentuk Box (Kubus merah) dari panel Basic Shapes ke atas Workplane. Atur ukurannya menjadi persegi panjang pipih, misalnya panjang 70 mm, lebar 25 mm, dan tinggi (ketebalan) 3 mm.",
              tip: "Gunakan Snap Grid 1.0 mm di pojok kanan bawah supaya angka ukuran lebih mudah pas.",
            },
            {
              stepNumber: 2,
              title: "Tambahkan Lubang Gantungan dengan Shape 'Hole'",
              description:
                "Tarik bentuk Cylinder (berwarna garis abu-abu / ubah jadi tipe Hole) ke sisi kiri alas. Atur diameter sekitar 5–6 mm dan tinggi lebih dari 4 mm agar menembus alas.",
              tip: "Pastikan jarak lubang tidak terlalu mepet ke tepi alas (sisakan minimal 3 mm) supaya tidak mudah patah setelah di-print.",
            },
            {
              stepNumber: 3,
              title: "Tambahkan Teks Nama & Ornamen Bintang / Hati",
              description:
                'Tarik shape "Text" ke atas alas, ketik nama kamu (contoh: "daffa"), atur ukuran dan tinggi menjadi sekitar 4.5 mm agar timbul di atas alas. Tambahkan dekorasi Star (bintang) dan Heart (hati) di sudut pelat.',
              image: "/assets/tinkercad/ganci-daffa.png",
              tip: "Tekan L (Align) untuk meratakan posisi teks tepat di tengah vertikal alas gantungan kunci.",
            },
            {
              stepNumber: 4,
              title: "Gabungkan Semua Bentuk (Union / Group)",
              description:
                "Tekan Ctrl + A untuk memilih semua objek (atau drag kotak seleksi), lalu tekan Ctrl + G untuk menggabungkannya. Cylinder Hole otomatis akan membolongi alas gantungan kunci!",
              codeSnippet: "Select All (Ctrl + A) → Group / Union (Ctrl + G) → Export (.STL)",
              tip: "Jika ingin warna teks dan hiasan tetap terlihat berbeda di layar Tinkercad, klik warna Solid lalu centang 'Multicolor'.",
            },
            {
              stepNumber: 5,
              title: "Ekspor ke File .STL & Eksplorasi Desain Lain",
              description:
                "Klik tombol Export di pojok kanan atas → pilih format .STL. File .STL siap dimasukkan ke software slicer 3D Printer. Setelah paham teknik ini, coba buat kreasi lain seperti Emblem 'BEST AXE' atau Mahkota 3D!",
              image: "/assets/tinkercad/mahkota-3d.png",
            },
          ],
          downloadUrl: "/assets/tinkercad/ganci.stl",
          downloadLabel: "Download Contoh Hasil (ganci.stl)",
        },
      ],
    },

    {
      slug: "scratch-game-coding",
      day: 1,
      order: 3,
      title: "Game Coding Dengan Scratch",
      shortTitle: "Scratch Coding",
      category: "Game Coding",
      tagline: "Belajar logika pemrograman visual dengan membuat animasi interaktif & game arcade seru",
      summary:
        "Mempelajari konsep fundamental pemrograman (Event, Loop, Koordinat, Kondisi If-Then, dan Sensing) secara menyenangkan menggunakan Scratch. Di Hari Ke-1, berhasil membuat 2 karya langsung: Animasi 'Ayam Berkokok' dan Game Arcade 'Bola Pantul / Pong Neon'.",
      learningGoals: [
        "Memahami antarmuka Scratch: Stage/Backdrop, Sprite, Costume, dan Area Blok Kode",
        "Menggunakan blok Motion (koordinat x/y, arah, pantulan tepi) dan Looks (pergantian kostum)",
        "Menerapkan perulangan (forever, repeat) dan logika percabangan (if touching)",
        "Menyimpan dan membagikan file project Scratch (.sb3)",
      ],
      status: "completed",
      accentColor: "emerald",
      iconName: "gamepad",
      tools: ["Scratch 3.0 (Web / Desktop)", "File Project .sb3"],
      projects: [
        {
          id: "scratch-bola-project",
          title: "Game Bola Pantul (Pong Neon)",
          subtitle: "Game Arcade Pantul Bola dengan Paddle & Zona Game Over",
          description:
            "Game interaktif di latar Neon Tunnel: bola kuning bergerak dan memantul ke segala sisi layar. Pemain menggerakkan papan hijau (Paddle) untuk memantulkan bola dengan sudut acak (150–200 derajat) disertai efek suara 'Pop'. Jika bola menyentuh garis merah di bawah, permainan langsung berhenti (Game Over)!",
          image: "/assets/scratch/bola-step2-sprites.png",
          gallery: [
            {
              src: "/assets/scratch/bola-step1-backdrop.png",
              caption: "Langkah 1: Menyiapkan backdrop Neon Tunnel dan garis merah Game Over di bawah.",
            },
            {
              src: "/assets/scratch/bola-step2-sprites.png",
              caption: "Langkah 2: Menambahkan sprite Ball (bola kuning) dan Paddle (papan hijau).",
            },
            {
              src: "/assets/scratch/bola-step3-code.png",
              caption:
                "Langkah 3: Tiga rangkaian blok kode pada sprite Ball (gerak pantul, deteksi Paddle, dan deteksi garis merah).",
            },
          ],
          downloadUrl: "/assets/scratch/Bola-Project.sb3",
          downloadLabel: "Download Bola-Project.sb3",
          tags: ["Scratch 3", "Game Pong", "Collision Detection", "File .sb3"],
          date: "19 November 2026",
          featured: true,
        },
        {
          id: "scratch-ayam-berkokok",
          title: "Animasi Ayam Berkokok",
          subtitle: "Animasi Sprite Berjalan Melintasi Padang Rumput",
          description:
            "Project pengenalan animasi di Scratch: membuat latar pemandangan langit biru dan rumput hijau, lalu memprogram sprite Rooster (Ayam Jago) berjalan dari kiri layar (x: -240) ke kanan dengan pergantian kostum (next costume) dan jeda waktu secara terus-menerus.",
          image: "/assets/scratch/ayam-step2-rooster.png",
          gallery: [
            {
              src: "/assets/scratch/ayam-step1-backdrop.png",
              caption: "Langkah 1: Menggambar backdrop pemandangan langit biru, rumput hijau, dan tanah cokelat.",
            },
            {
              src: "/assets/scratch/ayam-step2-rooster.png",
              caption: "Langkah 2: Mengganti sprite kucing default dengan sprite Rooster (Ayam Jago).",
            },
            {
              src: "/assets/scratch/ayam-step3-code.png",
              caption: "Langkah 3: Blok kode animasi berjalan berulang menggunakan forever, repeat 24, dan next costume.",
            },
          ],
          downloadUrl: "/assets/scratch/Ayam-Berkokok.sb3",
          downloadLabel: "Download Ayam-Berkokok.sb3",
          tags: ["Scratch 3", "Animasi", "Looping", "File .sb3"],
          date: "19 November 2026",
          featured: true,
        },
      ],
      notes: [
        {
          id: "note-scratch-konsep",
          title: "Catatan Konsep Inti Pemrograman di Scratch",
          category: "Konsep Dasar",
          summary:
            "Rangkuman kategori warna blok Scratch yang paling sering dipakai saat membuat animasi dan game.",
          content: `Scratch menggunakan blok warna-warni yang mewakili konsep pemrograman nyata:

1. Events (Kuning) — Pemicu program, misalnya "when green flag clicked" untuk memulai game.
2. Motion (Biru) — Mengatur posisi koordinat (x: -240 paling kiri s/d +240 paling kanan; y: -180 paling bawah s/d +180 paling atas), arah sudut (point in direction 45), bergerak (move 10 steps), dan pantulan tepi (if on edge, bounce).
3. Looks (Ungu) — Mengubah tampilan sprite seperti "switch costume to" dan "next costume" untuk menciptakan efek berjalan.
4. Control (Oranye) — Mengatur alur perulangan ("forever", "repeat 24"), jeda ("wait 2 seconds"), percabangan ("if ... then"), dan berhenti ("stop all").
5. Sensing (Biru Muda) — Mendeteksi interaksi, misalnya "touching Paddle?" atau "touching color [merah]?".
6. Sound (Pink/Magenta) — Memutar efek suara seperti "start sound Pop" saat bola memantul.
7. Operators (Hijau) — Operasi matematika & acak seperti "pick random 150 to 200" agar arah pantulan bola lebih menantang dan tidak monoton.`,
          tips: [
            "Gunakan blok 'go to x: ... y: ...' di awal program agar posisi sprite selalu kembali rapi setiap kali bendera hijau diklik.",
            "Untuk memutar file .sb3 yang diunduh, buka https://scratch.mit.edu/projects/editor/ lalu pilih File → Load from your computer.",
          ],
          updatedAt: "2026-11-19",
        },
      ],
      tutorials: [
        {
          id: "tut-scratch-ayam",
          title: 'Tutorial 1: Membuat Animasi "Ayam Berkokok"',
          subtitle: "Pengenalan Backdrop, Sprite, Koordinat, dan Animasi Costume di Scratch",
          difficulty: "Pemula",
          duration: "20 menit",
          tools: ["Scratch 3.0"],
          goal: "Membuat sprite Ayam Jago berjalan melintasi layar dari kiri ke kanan dengan animasi pergantian kostum.",
          steps: [
            {
              stepNumber: 1,
              title: "Buat Backdrop Pemandangan Sederhana",
              description:
                "Klik panel Stage (Backdrop) di sebelah kanan bawah lalu gambar latar sederhana: langit biru muda, bukit rumput hijau, dan lapisan tanah cokelat di bagian bawah.",
              image: "/assets/scratch/ayam-step1-backdrop.png",
            },
            {
              stepNumber: 2,
              title: "Ganti Sprite Kucing Menjadi Sprite Rooster",
              description:
                "Hapus sprite kucing bawaan (Sprite1), lalu klik ikon Choose a Sprite dan pilih 'Rooster' (Ayam Jago). Pastikan Size 100 dan Direction 90 (menghadap ke kanan).",
              image: "/assets/scratch/ayam-step2-rooster.png",
            },
            {
              stepNumber: 3,
              title: "Susun Blok Kode Animasi Jalan Berulang",
              description:
                "Pilih sprite Rooster lalu rangkai blok kode: mulai dari when green flag clicked → switch costume to Rooster-c → forever → go to x: -240 y: -85 → repeat 24 kali (move 20 steps, next costume, wait 2 seconds).",
              image: "/assets/scratch/ayam-step3-code.png",
              codeSnippet: `when green flag clicked
switch costume to [Rooster-c]
forever
  go to x: (-240) y: (-85)
  repeat (24)
    move (20) steps
    next costume
    wait (2) seconds`,
              tip: "Coba ubah 'wait 2 seconds' menjadi 'wait 0.3 seconds' jika ingin gerakan ayam berjalan lebih cepat!",
            },
          ],
          downloadUrl: "/assets/scratch/Ayam-Berkokok.sb3",
          downloadLabel: "Download File Scratch (Ayam-Berkokok.sb3)",
        },
        {
          id: "tut-scratch-pong",
          title: 'Tutorial 2: Membuat Game Pong "Bola Pantul Neon"',
          subtitle: "Membangun game arcade lengkap dengan pantulan acak, suara, dan kondisi Game Over",
          difficulty: "Pemula",
          duration: "30 menit",
          tools: ["Scratch 3.0"],
          goal: "Membangun game memantulkan bola dengan papan (Paddle) yang memiliki efek suara dan deteksi kalah (Game Over).",
          steps: [
            {
              stepNumber: 1,
              title: "Pilih Backdrop Neon Tunnel & Tambah Garis Merah",
              description:
                "Pilih backdrop 'Neon Tunnel' dari galeri Scratch, lalu masuk ke tab Backdrops dan gambar kotak/garis berwarna merah memanjang di sisi paling bawah sebagai zona Game Over.",
              image: "/assets/scratch/bola-step1-backdrop.png",
              tip: "Pastikan warna garis merahnya solid agar mudah dideteksi dengan blok 'touching color'.",
            },
            {
              stepNumber: 2,
              title: "Tambahkan Sprite Ball & Paddle",
              description:
                "Masukkan dua sprite dari galeri: 'Ball' (bola kuning) dan 'Paddle' (papan hijau). Letakkan Paddle di bagian bawah layar (misalnya y: -148) tepat di atas garis merah.",
              image: "/assets/scratch/bola-step2-sprites.png",
              tip: "Pada sprite Paddle, tambahkan blok forever → set x to [mouse x] agar papan mengikuti gerakan mouse pemain.",
            },
            {
              stepNumber: 3,
              title: "Program 3 Logika Utama pada Sprite Ball",
              description:
                "Pada sprite Ball, buat 3 tumpukan blok terpisah yang semuanya dimulai dengan when green flag clicked: (1) Gerak & pantulan tepi, (2) Deteksi sentuh warna merah untuk stop all, dan (3) Deteksi sentuh Paddle untuk bunyi Pop + berbalik arah acak 150–200 derajat.",
              image: "/assets/scratch/bola-step3-code.png",
              codeSnippet: `// 1. Gerak Bola
when green flag clicked
go to x: (0) y: (-33)
point in direction (45)
forever
  if on edge, bounce
  move (10) steps

// 2. Game Over (Sentuh Merah)
when green flag clicked
forever
  if <touching color [#ff4c5b]?> then
    stop [all]

// 3. Pantulan Paddle
when green flag clicked
forever
  if <touching [Paddle]?> then
    start sound [Pop]
    turn clockwise (pick random (150) to (200)) degrees
    move (10) steps`,
              tip: "Sebagai tantangan tambahan untuk siswa, tambahkan variabel 'Skor' yang bertambah +1 setiap kali bola menyentuh Paddle!",
            },
          ],
          downloadUrl: "/assets/scratch/Bola-Project.sb3",
          downloadLabel: "Download File Scratch (Bola-Project.sb3)",
        },
      ],
    },

    // ==================== HARI KE-2 ====================
    {
      slug: "robotic-tinybit",
      day: 2,
      order: 4,
      title: "Robotic Dengan Tinybit",
      shortTitle: "Robotic Tiny:bit",
      category: "Robotika",
      tagline: "Pemrograman mobil robot pintar Yahboom Tiny:bit dengan sensor ultrasonik & line follower",
      summary:
        "Mengenal robot beroda berbasis Micro:bit yaitu Tiny:bit. Akan mempelajari kontrol motor mobil robot, lampu RGB, buzzer musik, sensor garis (line tracking), serta sensor jarak ultrasonik untuk menghindari rintangan secara otomatis.",
      learningGoals: [
        "Mengenal struktur hardware Tiny:bit dan pemasangan board Micro:bit",
        "Memprogram gerak maju, mundur, belok, dan kontrol lampu LED RGB via MakeCode",
        "Membuat robot penghindar rintangan (obstacle avoidance) atau pengikut garis (line follower)",
      ],
      status: "upcoming",
      accentColor: "sky",
      iconName: "cpu",
      tools: ["Robot Tiny:bit", "BBC Micro:bit", "Microsoft MakeCode"],
      projects: [],
      notes: [],
      tutorials: [],
    },
    {
      slug: "iot-microbit",
      day: 2,
      order: 5,
      title: "Internet Of Things Dengan Microbit",
      shortTitle: "IoT Micro:bit",
      category: "IoT & Hardware",
      tagline: "Menghubungkan sensor & aktuator Micro:bit ke internet untuk monitoring & kontrol pintar",
      summary:
        "Merancang prototipe Internet of Things (IoT) menggunakan board BBC Micro:bit dan modul ekspansi Wi-Fi. Mempelajari cara membaca data sensor (suhu, cahaya, kelembapan) lalu mengirimkannya ke dashboard cloud secara real-time.",
      learningGoals: [
        "Memahami arsitektur dasar IoT (Sensor → Mikrokontroler → Internet → Dashboard)",
        "Membaca nilai sensor bawaan dan eksternal pada Micro:bit",
        "Mengirim dan menampilkan data sensor ke platform IoT secara langsung",
      ],
      status: "upcoming",
      accentColor: "sky",
      iconName: "wifi",
      tools: ["BBC Micro:bit", "Modul Wi-Fi IoT", "MakeCode", "Dashboard IoT"],
      projects: [],
      notes: [],
      tutorials: [],
    },
    {
      slug: "minecraft-education",
      day: 2,
      order: 6,
      title: "Game Coding Minecraft Education",
      shortTitle: "Minecraft Education",
      category: "Game Coding",
      tagline: "Coding dunia 3D Minecraft menggunakan Agent & Code Builder berbasis blok/Python",
      summary:
        "Belajar computational thinking dan pemrograman di dalam dunia Minecraft Education Edition. Memanfaatkan Code Builder untuk memerintahkan Agent membangun struktur otomatis, bertani, hingga membuat mini-game edukatif.",
      learningGoals: [
        "Menggunakan Code Builder di dalam Minecraft Education",
        "Memprogram Agent untuk bergerak dan membangun struktur otomatis dengan loop",
        "Merancang skenario pembelajaran berbasis game (Game-Based Learning) di Minecraft",
      ],
      status: "upcoming",
      accentColor: "sky",
      iconName: "blocks",
      tools: ["Minecraft Education Edition", "MakeCode / Code Builder"],
      projects: [],
      notes: [],
      tutorials: [],
    },

    // ==================== HARI KE-3 ====================
    {
      slug: "webar-augmented-reality",
      day: 3,
      order: 7,
      title: "Augmented Reality Dengan WebAR",
      shortTitle: "WebAR",
      category: "AR / XR",
      tagline: "Menghadirkan objek 3D interaktif ke dunia nyata langsung melalui kamera browser",
      summary:
        "Membangun media pembelajaran Augmented Reality (AR) yang bisa dibuka langsung dari browser HP tanpa perlu install aplikasi tambahan. Cocok untuk membuat kartu belajar interaktif, poster hidup, dan visualisasi model 3D di kelas.",
      learningGoals: [
        "Memahami konsep Augmented Reality (Marker-based & Markerless WebAR)",
        "Menyiapkan aset 3D (seperti hasil Tinkercad/GLB) dan marker AR",
        "Mempublikasikan proyek WebAR yang bisa dipindai langsung lewat smartphone",
      ],
      status: "upcoming",
      accentColor: "violet",
      iconName: "sparkles",
      tools: ["Platform WebAR", "Aset 3D (.glb / .gltf)", "Kamera Smartphone"],
      projects: [],
      notes: [],
      tutorials: [],
    },
    {
      slug: "ai-pictoblox-microbit",
      day: 3,
      order: 8,
      title: "AI Pictoblox dan Microbit",
      shortTitle: "AI PictoBlox",
      category: "Artificial Intelligence",
      tagline: "Menggabungkan kecerdasan buatan (kamera/suara/gesture) di PictoBlox dengan hardware Micro:bit",
      summary:
        "Eksplorasi Artificial Intelligence (Machine Learning, deteksi wajah, deteksi pose/tangan, atau pengenalan objek) menggunakan PictoBlox yang diintegrasikan langsung dengan aksi fisik pada board Micro:bit.",
      learningGoals: [
        "Mengenal ekstensi AI & Machine Learning di PictoBlox",
        "Melatih model sederhana (klasifikasi gambar/gesture) untuk kontrol interaktif",
        "Menghubungkan hasil deteksi AI di PictoBlox untuk mengendalikan LED/output Micro:bit",
      ],
      status: "upcoming",
      accentColor: "violet",
      iconName: "brain",
      tools: ["PictoBlox", "BBC Micro:bit", "Webcam / Machine Learning"],
      projects: [],
      notes: [],
      tutorials: [],
    },
    {
      slug: "roblox-game-coding",
      day: 3,
      order: 9,
      title: "Game Coding dengan Roblox",
      shortTitle: "Roblox Studio",
      category: "Game Coding",
      tagline: "Merancang dunia game 3D multiplayer & scripting interaktif di Roblox Studio",
      summary:
        "Mempelajari pembuatan game 3D modern dengan Roblox Studio: mulai dari membangun arena/obby, mengatur properti part & pencahayaan, menulis skrip dasar Luau untuk rintangan/poin, hingga uji coba main.",
      learningGoals: [
        "Mengenal workspace, Explorer, dan Properties di Roblox Studio",
        "Membangun level permainan 3D (Obby / Adventure) dengan Part dan Terrain",
        "Menambahkan interaksi dasar menggunakan skrip Lua/Luau",
      ],
      status: "upcoming",
      accentColor: "violet",
      iconName: "joystick",
      tools: ["Roblox Studio", "Luau Scripting"],
      projects: [],
      notes: [],
      tutorials: [],
    },

    // ==================== HARI KE-4 ====================
    {
      slug: "design-canva",
      day: 4,
      order: 10,
      title: "Design dengan Canva",
      shortTitle: "Design Canva",
      category: "Desain Grafis",
      tagline: "Membuat poster, presentasi interaktif, dan bahan ajar visual yang memikat dengan Canva",
      summary:
        "Mengasah keterampilan desain komunikasi visual untuk kebutuhan edukasi dan portofolio menggunakan Canva. Mencakup tata letak, hierarki tipografi, palet warna, elemen interaktif, hingga template modul ajar.",
      learningGoals: [
        "Menerapkan prinsip desain visual (kontras, keseimbangan, tipografi, warna)",
        "Merancang poster edukasi, infografis, dan slide presentasi menarik di Canva",
        "Memanfaatkan fitur AI & kolaborasi Canva untuk mempercepat pembuatan bahan ajar",
      ],
      status: "upcoming",
      accentColor: "amber",
      iconName: "palette",
      tools: ["Canva", "Template Edukasi", "Brand Kit"],
      projects: [],
      notes: [],
      tutorials: [],
    },
    {
      slug: "video-editing-capcut",
      day: 4,
      order: 11,
      title: "Video Editing dengan CapCut",
      shortTitle: "CapCut Video",
      category: "Video & Konten",
      tagline: "Mengedit video pembelajaran, tutorial singkat, dan dokumentasi project yang dinamis",
      summary:
        "Teknik editing video kreatif untuk konten pendidikan dan showcase karya menggunakan CapCut: pemotongan ritmis, teks/subtitle otomatis, transisi halus, efek suara, dan ekspor optimal untuk media sosial & YouTube.",
      learningGoals: [
        "Menyusun alur storytelling video tutorial atau dokumentasi project",
        "Menggunakan cut, transisi, keyframe, audio mixing, dan auto-caption di CapCut",
        "Mengekspor video berkualitas tinggi dengan rasio sesuai platform (16:9 / 9:16)",
      ],
      status: "upcoming",
      accentColor: "amber",
      iconName: "video",
      tools: ["CapCut Desktop / Mobile", "Audio & Subtitle"],
      projects: [],
      notes: [],
      tutorials: [],
    },
    {
      slug: "android-thunkable",
      day: 4,
      order: 12,
      title: "Aplikasi Android dengan Thunkable",
      shortTitle: "Android Thunkable",
      category: "Mobile App",
      tagline: "Merancang antarmuka & logika aplikasi Android tanpa ribet pakai drag-and-drop Thunkable",
      summary:
        "Membuat aplikasi mobile Android fungsional menggunakan platform no-code/low-code Thunkable. Mulai dari desain layar (UI), navigasi antar halaman, pemrograman blok logika, uji langsung di HP via Thunkable Live, hingga build file .APK.",
      learningGoals: [
        "Merancang tampilan antarmuka (UI) aplikasi mobile yang ramah pengguna di Thunkable",
        "Menghubungkan tombol, input, media, dan logika blok pada aplikasi",
        "Menguji aplikasi langsung di smartphone Android dan melakukan build .APK",
      ],
      status: "upcoming",
      accentColor: "amber",
      iconName: "smartphone",
      tools: ["Thunkable (Web)", "Thunkable Live App", "Android .APK"],
      projects: [],
      notes: [],
      tutorials: [],
    },
  ],
};
