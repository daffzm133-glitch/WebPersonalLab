import type { PortfolioData } from "@/types/curriculum";

export const SEED_DATA: PortfolioData = {
  updatedAt: "2026-11-20T19:53:00+07:00",
  profile: {
    name: "Daffa Zidan Mahesta",
    displayName: "Daffa Zidan",
    siteTitle: "Personal Digital Lab",
    role: "IT Enthusiast & Digital Creator • Pondok Tholabie",
    programName: "IDN SMSIT — Training Journey & Learning Documentation",
    year: "2026",
    bio: "Personal Digital Lab merupakan ruang dokumentasi perjalanan belajar, hasil pelatihan di IDN SMSIT, eksplorasi teknologi, serta kumpulan project dan karya digital yang saya kembangkan.",
    mission:
      "Melalui website ini, saya ingin mendokumentasikan proses belajar, membagikan pengetahuan melalui perpustakaan materi terbuka, dan mengembangkan keterampilan teknologi agar dapat memberikan manfaat bagi lingkungan sekitar, khususnya Pondok Tholabie.",
    avatar: "/assets/profile/daffa-portrait-hd.png",
    email: "daffzm133@gmail.com",
    github: "https://github.com/DaffaZidanKun",
    instagram: "",
    skills: [
      "LEGO Education WeDo",
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
      shortTitle: "LEGO WeDo",
      category: "Robotika",
      tagline: "Perakitan model kelinci LEGO Education WeDo dan pemrograman gerakan berbasis blok melalui aplikasi web",
      summary:
        "Materi 1 Pelatihan IT dan LEGO Education: pengalaman praktik konstruksi dan pengenalan robotika menggunakan perangkat LEGO Education WeDo. Mulai dari merakit model berbentuk kelinci mengikuti buku panduan (instruction manual), menghubungkan perangkat hub melalui Bluetooth ke aplikasi LEGO Education WeDo berbasis web, hingga menyusun blok instruksi pemrograman agar model LEGO dapat bergerak berjalan.",
      learningGoals: [
        "Mengenal perangkat dan komponen LEGO Education WeDo",
        "Mempraktikkan perakitan model berdasarkan buku panduan (instruction manual)",
        "Mengenal aplikasi pemrograman LEGO Education WeDo berbasis web",
        "Memahami hubungan antara perangkat fisik LEGO dan instruksi digital",
        "Mengenal dasar pemrograman berbasis blok (block-based programming)",
        "Menjalankan program untuk menghasilkan gerakan pada model LEGO",
      ],
      status: "completed",
      accentColor: "emerald",
      iconName: "bot",
      tools: [
        "LEGO Education WeDo Kit",
        "Buku Panduan Perakitan",
        "Laptop",
        "Aplikasi Web LEGO Education WeDo",
        "Hub & Motor LEGO",
        "Koneksi Bluetooth",
      ],
      projects: [
        {
          id: "lego-model-kelinci",
          title: "Model Kelinci LEGO Education WeDo",
          subtitle: "Perakitan Model LEGO dan Pemrograman Gerakan Berjalan",
          description:
            "Hasil praktik Materi 1 Pelatihan IT dan LEGO Education: setiap peserta memperoleh satu kotak perangkat LEGO Education WeDo untuk merakit model berbentuk kelinci mengikuti buku panduan (instruction manual). Setelah selesai dirakit, model dihubungkan via Bluetooth ke aplikasi LEGO Education WeDo berbasis web dan diprogram dengan blok instruksi motor serta blok jeda hingga model LEGO dapat bergerak berjalan.",
          image: "/assets/lego/robot-katak-wedo.jpg",
          gallery: [
            {
              src: "/assets/lego/robot-katak-wedo.jpg",
              caption:
                "Dokumentasi 1 — Hasil Perakitan LEGO WeDo: Foto memperlihatkan model kelinci LEGO hasil rakitan yang telah selesai dibuat beserta laptop yang digunakan untuk menjalankan aplikasi pemrograman.",
            },
            {
              src: "/assets/lego/program-blok-wedo.png",
              caption:
                "Dokumentasi 2 — Tampilan Program LEGO WeDo: Screenshot memperlihatkan susunan blok instruksi motor (nilai 8), arah putaran, blok jeda (nilai 30 & 20), ikon hub/Bluetooth, serta tombol Play dan Stop.",
            },
          ],
          tags: [
            "LEGO Education WeDo",
            "Model Kelinci",
            "Block-Based Programming",
            "Bluetooth Hub",
            "Robotika Dasar",
          ],
          date: "19 November 2026",
          featured: true,
        },
      ],
      notes: [
        {
          id: "note-wedo-hasil-pembelajaran",
          title: "Catatan Hasil Pembelajaran — Materi 1 LEGO Education WeDo",
          category: "Bagian I • Hasil Pembelajaran",
          summary:
            "Identitas kegiatan, deskripsi praktik merakit model kelinci, perangkat & aplikasi, proses pembelajaran (konstruksi & pemrograman), serta hasil pembelajaran.",
          content: `DOKUMENTASI PEMBELAJARAN DAN PANDUAN PRAKTIK
PELATIHAN IT DAN LEGO EDUCATION — MATERI 1: LEGO EDUCATION WeDo
Perakitan Model LEGO dan Pemrograman Gerakan

1. Identitas Kegiatan
• Program: Pelatihan IT dan LEGO Education
• Materi: 1
• Topik: Praktik LEGO Education WeDo
• Kegiatan: Perakitan model dan pemrograman gerakan
• Perangkat utama: LEGO Education WeDo
• Media pemrograman: Aplikasi LEGO Education WeDo berbasis web
• Hasil praktik: Model LEGO yang dapat berjalan

2. Deskripsi Kegiatan
Pada materi pertama pelatihan IT dan LEGO Education, peserta mendapatkan pengalaman praktik menggunakan perangkat LEGO Education WeDo. Setiap peserta memperoleh satu kotak perangkat LEGO WeDo yang berisi komponen-komponen untuk kegiatan konstruksi dan pengenalan robotika.

Peserta kemudian diminta merakit sebuah model berbentuk kelinci dengan mengikuti petunjuk yang tersedia pada buku panduan (instruction manual). Setelah model selesai dirakit, peserta melanjutkan kegiatan dengan menggunakan aplikasi LEGO Education WeDo melalui website untuk menyusun instruksi pemrograman agar model LEGO yang telah dibuat dapat bergerak. Hasil akhirnya adalah model LEGO yang dapat berjalan setelah diberikan instruksi melalui aplikasi.

3. Perangkat dan Aplikasi
• Satu kotak perangkat LEGO Education WeDo untuk setiap peserta.
• Buku panduan perakitan.
• Laptop.
• Website/aplikasi LEGO Education WeDo.
• Perangkat hub LEGO sebagai penghubung sistem elektronik dan model.
• Koneksi Bluetooth untuk komunikasi antara aplikasi dan hub, sebagaimana ditunjukkan pada tampilan aplikasi.

4. Proses Pembelajaran
A. Konstruksi atau perakitan
Peserta menyusun komponen LEGO menjadi sebuah model kelinci dengan mengikuti buku panduan.

B. Pemrograman atau pengendalian
Peserta menggunakan aplikasi LEGO Education WeDo untuk menyusun instruksi yang kemudian dijalankan oleh perangkat LEGO sehingga model dapat bergerak.

5. Hasil Pembelajaran
Dari praktik tersebut, peserta mendapatkan pengalaman langsung mengenai proses pembuatan model robotika sederhana. Peserta tidak hanya menghasilkan bentuk fisik dari susunan LEGO, tetapi juga mencoba memberikan instruksi digital agar hasil rakitan dapat melakukan gerakan. Hal ini memberikan pengenalan awal terhadap konsep integrasi antara konstruksi mekanik, perangkat elektronik, dan pemrograman.`,
          tips: [
            "Dokumentasi 1 (Hasil Perakitan): Foto memperlihatkan model LEGO hasil rakitan yang telah selesai dibuat beserta laptop yang digunakan untuk menjalankan aplikasi pemrograman.",
            "Dokumentasi 2 (Tampilan Program): Screenshot memperlihatkan susunan blok instruksi motor, blok jeda, serta tombol untuk menjalankan program.",
            "Status Materi 1: SELESAI — disusun berdasarkan pengalaman praktik dan dokumentasi yang tersedia.",
          ],
          updatedAt: "2026-11-19",
        },
        {
          id: "note-wedo-konsep-teknologi",
          title: "Konsep Teknologi & Susunan Blok Program LEGO WeDo",
          category: "Bagian III • Konsep Teknologi",
          summary:
            "Penjelasan 5 konsep teknologi dasar (Konstruksi LEGO, Motor, Bluetooth, Block-Based Programming, Hardware & Software) serta catatan blok program hasil praktik.",
          content: `KONSEP TEKNOLOGI YANG DIPELAJARI

1. Konstruksi LEGO
Konstruksi adalah proses menyusun dan menggabungkan komponen menjadi sebuah bentuk atau model tertentu.

2. Motor
Motor merupakan komponen yang digunakan untuk menghasilkan gerakan mekanis pada model LEGO.

3. Bluetooth
Bluetooth merupakan teknologi komunikasi nirkabel yang memungkinkan perangkat elektronik saling terhubung dalam jarak tertentu.

4. Block-Based Programming
Block-based programming merupakan metode pemrograman dengan menggunakan blok-blok instruksi visual yang disusun sesuai urutan tertentu. Metode ini membantu pemula memahami logika pemrograman tanpa harus langsung menulis kode dalam bentuk teks.

5. Hubungan Hardware dan Software
• Hardware adalah perangkat fisik, seperti hub, motor, dan komponen LEGO.
• Software adalah aplikasi yang digunakan untuk menyusun dan menjalankan instruksi.
Keduanya bekerja bersama agar model LEGO dapat menghasilkan gerakan sesuai program.

BAGIAN UTAMA APLIKASI & SUSUNAN BLOK HASIL PRAKTIK
Bagian utama tampilan aplikasi LEGO Education WeDo:
• Area pemrograman: tempat menyusun blok-blok instruksi.
• Blok perintah: kumpulan instruksi untuk mengendalikan perangkat (blok awal kuning simbol Play, blok hijau pengaturan motor, blok arah putaran motor, dan blok jeda/waktu simbol jam pasir).
• Tombol mulai (Play): menjalankan susunan program.
• Tombol berhenti (Stop): menghentikan program.
• Ikon hub/Bluetooth (kanan atas): menunjukkan bagian koneksi perangkat LEGO dengan aplikasi.

Urutan program pada screenshot hasil praktik:
1. Blok Start (Play)
2. Blok pengaturan motor dengan nilai 8
3. Blok instruksi motor dengan simbol arah putaran
4. Blok jeda dengan nilai 30
5. Blok instruksi motor dengan arah putaran berlawanan
6. Blok jeda dengan nilai 20`,
          tips: [
            "Angka 8, 30, dan 20 merupakan nilai yang terlihat pada tampilan program. Satuan dan pengaturan detail setiap blok perlu diperiksa melalui aplikasi agar tidak salah ditafsirkan.",
            "Pastikan perangkat hub dapat dikenali oleh aplikasi melalui ikon hub/Bluetooth di pojok kanan atas sebelum menjalankan program.",
            "Hub berfungsi sebagai penghubung antara instruksi digital yang dibuat melalui aplikasi dengan perangkat keras LEGO.",
          ],
          updatedAt: "2026-11-19",
        },
        {
          id: "note-wedo-pondok-tholabie",
          title: "Potensi Penerapan di Pondok Tholabie & Kesimpulan",
          category: "Bagian IV & V • Implementasi",
          summary:
            "Rencana aktivitas pembelajaran, 6 kemampuan yang dapat dilatih, ide pengembangan tantangan bertahap di Pondok Tholabie, serta kesimpulan Materi 1.",
          content: `POTENSI PENERAPAN DI PONDOK THOLABIE
Materi ini dapat dikembangkan menjadi aktivitas pengenalan teknologi dan robotika bagi peserta didik di Pondok Tholabie.

1. Aktivitas Pembelajaran
Peserta didik dapat diajak:
• Mengenal perangkat LEGO.
• Membaca dan mengikuti instruksi perakitan.
• Membuat model sederhana.
• Mengenal blok pemrograman.
• Menjalankan program untuk menggerakkan model.

2. Kemampuan yang Dapat Dilatih
• Ketelitian
• Kemampuan mengikuti instruksi
• Kreativitas
• Logika berpikir
• Pemecahan masalah
• Pengenalan teknologi dan robotika

3. Ide Pengembangan Aktivitas
Setelah peserta didik memahami praktik dasar, kegiatan dapat dikembangkan melalui tantangan sederhana yang diberikan secara bertahap sesuai kemampuan peserta didik:
• Mengubah urutan instruksi.
• Mengamati perbedaan gerakan.
• Mencoba pengaturan motor yang berbeda.
• Membuat variasi gerakan pada model LEGO.

KESIMPULAN
Praktik LEGO Education WeDo merupakan pengalaman pembelajaran awal dalam bidang konstruksi, pemrograman, dan pengenalan robotika. Melalui kegiatan ini, peserta mempelajari proses merakit model berdasarkan buku panduan, mengenal aplikasi pemrograman berbasis blok, menghubungkan perangkat LEGO dengan aplikasi, serta menjalankan instruksi agar model dapat bergerak.

Kegiatan ini menunjukkan bahwa pembelajaran teknologi dapat dilakukan melalui praktik langsung yang menggabungkan aktivitas fisik dan penggunaan perangkat digital. Pengalaman ini dapat menjadi referensi awal untuk mengembangkan kegiatan pembelajaran teknologi dan robotika di Pondok Tholabie.`,
          tips: [
            "Berikan tantangan pengembangan aktivitas secara bertahap sesuai kemampuan peserta didik.",
            "Kedua dokumentasi praktik (foto rakitan model + laptop dan screenshot program blok) menjadi bukti proses pembelajaran dari konstruksi hingga pengendalian gerakan.",
            "Status Materi 1: SELESAI.",
          ],
          updatedAt: "2026-11-19",
        },
      ],
      tutorials: [
        {
          id: "tut-wedo-kelinci",
          title: "Tutorial Praktik LEGO Education WeDo — Model Kelinci",
          subtitle:
            "Panduan praktik 9 langkah: persiapan perangkat, perakitan model kelinci sesuai buku panduan, koneksi Bluetooth, hingga pemrograman gerakan berjalan",
          difficulty: "Pemula",
          duration: "45–60 menit",
          tools: [
            "Satu kotak LEGO Education WeDo",
            "Buku panduan perakitan (instruction manual)",
            "Laptop",
            "Akses ke aplikasi web LEGO Education WeDo",
            "Komponen hub dan motor sesuai paket perangkat",
          ],
          goal: "Peserta mampu merakit model kelinci LEGO Education WeDo berdasarkan buku panduan, menghubungkan perangkat hub ke aplikasi berbasis web via Bluetooth, menyusun blok pemrograman motor dan jeda, serta menjalankan program agar model LEGO dapat bergerak berjalan.",
          steps: [
            {
              stepNumber: 1,
              title: "Persiapan Perangkat & Membuka Kotak LEGO WeDo",
              description:
                "Sebelum memulai praktik, siapkan: (1) satu kotak LEGO Education WeDo, (2) buku panduan perakitan, (3) laptop, (4) akses ke aplikasi LEGO Education WeDo, dan (5) komponen hub serta motor sesuai paket perangkat.\n\nBuka kotak dan kenali komponen yang tersedia di dalamnya. Perhatikan bagian-bagian LEGO yang digunakan untuk membentuk struktur model serta komponen elektronik yang digunakan untuk menghasilkan gerakan.",
              tip: "Pastikan semua komponen yang dibutuhkan tersedia sebelum memulai perakitan. Tujuan tahap ini adalah mengenali perangkat terlebih dahulu.",
            },
            {
              stepNumber: 2,
              title: "Membaca Buku Panduan (Instruction Manual)",
              description:
                "Siapkan buku panduan (instruction manual) yang tersedia dalam paket LEGO. Pelajari gambar dan urutan penyusunan komponen, lalu ikuti petunjuk secara bertahap agar setiap bagian terpasang sesuai dengan desain yang ditentukan.",
              tip: "Hal yang perlu diperhatikan: perhatikan bentuk dan ukuran komponen, sesuaikan posisi pemasangan dengan gambar, jangan melewatkan tahapan perakitan, dan pastikan setiap bagian terpasang dengan baik.",
            },
            {
              stepNumber: 3,
              title: "Merakit Model LEGO (Model Kelinci)",
              description:
                "Mulai susun komponen LEGO berdasarkan instruksi pada buku panduan secara berurutan hingga membentuk model kelinci seperti yang ditentukan dalam kegiatan pelatihan.\n\nPastikan komponen mekanik dan bagian yang berkaitan dengan sistem penggerak terpasang sesuai petunjuk, lalu periksa kembali hasil rakitan.",
              image: "/assets/lego/robot-katak-wedo.jpg",
              tip: "Hasil tahap ini: Model LEGO telah selesai dirakit dan siap untuk digunakan dalam kegiatan pemrograman.",
            },
            {
              stepNumber: 4,
              title: "Membuka Aplikasi LEGO Education WeDo",
              description:
                "Setelah perakitan selesai, gunakan laptop untuk mengakses aplikasi LEGO Education WeDo melalui website dan buka lingkungan pemrograman.\n\nKenali 5 bagian utama tampilan aplikasi:\n1. Area pemrograman: tempat menyusun blok-blok instruksi.\n2. Blok perintah: kumpulan instruksi untuk mengendalikan perangkat.\n3. Tombol mulai (Play): menjalankan susunan program.\n4. Tombol berhenti (Stop): menghentikan program.\n5. Ikon hub/Bluetooth: menunjukkan bagian koneksi perangkat LEGO dengan aplikasi.",
            },
            {
              stepNumber: 5,
              title: "Menghubungkan LEGO dengan Aplikasi via Bluetooth",
              description:
                "Hubungkan perangkat LEGO dengan aplikasi melalui koneksi Bluetooth sesuai fasilitas perangkat. Perhatikan ikon hub yang terdapat di bagian kanan atas aplikasi dan pastikan perangkat hub dapat dikenali oleh aplikasi sebelum menjalankan program.",
              tip: "Hub berfungsi sebagai penghubung antara instruksi yang dibuat melalui aplikasi dengan perangkat keras LEGO.",
            },
            {
              stepNumber: 6,
              title: "Mengenal Blok Pemrograman",
              description:
                "Setelah aplikasi terbuka dan perangkat siap digunakan, kenali blok-blok instruksi pada palet aplikasi:\n• Blok awal berwarna kuning dengan simbol Play.\n• Blok berwarna hijau untuk pengendalian motor (pengaturan motor dan pengaturan arah putaran motor).\n• Blok jeda atau waktu yang ditandai simbol jam pasir.\n\nBlok-blok tersebut disusun secara berurutan untuk menghasilkan gerakan pada model LEGO.",
            },
            {
              stepNumber: 7,
              title: "Menyusun Program Gerakan",
              description:
                "Berdasarkan dokumentasi screenshot hasil praktik, susun rangkaian blok instruksi secara berurutan di area pemrograman:\n1. Blok Start (Play)\n2. Blok pengaturan motor dengan nilai 8\n3. Blok instruksi motor dengan simbol arah putaran\n4. Blok jeda dengan nilai 30\n5. Blok instruksi motor dengan arah putaran berlawanan\n6. Blok jeda dengan nilai 20",
              image: "/assets/lego/program-blok-wedo.png",
              codeSnippet:
                "[▶ Start (Play)] → [Pengaturan Motor: 8] → [Arah Putaran Motor ↻] → [⏳ Jeda: 30] → [Arah Putaran Berlawanan ↺] → [⏳ Jeda: 20]",
              tip: "Catatan: Angka 8, 30, dan 20 merupakan nilai yang terlihat pada tampilan program. Satuan dan pengaturan detail setiap blok perlu diperiksa melalui aplikasi agar tidak salah ditafsirkan.",
            },
            {
              stepNumber: 8,
              title: "Menjalankan Program",
              description:
                "Setelah blok instruksi tersusun:\n1. Periksa kembali urutan blok program.\n2. Pastikan perangkat LEGO telah terhubung dengan aplikasi.\n3. Letakkan model LEGO pada permukaan yang sesuai.\n4. Tekan tombol Play.\n5. Amati gerakan yang dihasilkan oleh model LEGO.\n6. Gunakan tombol Stop apabila ingin menghentikan program.\n\nPada praktik yang dilakukan, model LEGO berhasil bergerak berjalan setelah program dijalankan.",
            },
            {
              stepNumber: 9,
              title: "Mengamati Hasil Gerakan & Eksplorasi Lanjutan",
              description:
                "Perhatikan hubungan antara instruksi yang diberikan dengan gerakan yang dihasilkan. Amati bahwa perubahan instruksi motor dapat memengaruhi gerakan model LEGO. Tahap ini merupakan pengenalan awal bahwa perangkat fisik dapat dikendalikan menggunakan program digital.",
              tip: "Ide pengembangan di kelas / Pondok Tholabie: ajak peserta mengubah urutan instruksi, mengamati perbedaan gerakan, mencoba pengaturan motor yang berbeda, dan membuat variasi gerakan pada model LEGO.",
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
          id: "note-tinkercad-pengenalan",
          title: "BAB 1 — Pengenalan Tinkercad & Antarmuka Desain 3D",
          category: "BAB 1 • Pengenalan",
          summary:
            "Modul Dokumentasi Pelatihan Bootcamp IDN (19 November 2026): pengertian Tinkercad, 10 bagian antarmuka yang digunakan, dan pengaturan desain 3D.",
          content: `MODUL DOKUMENTASI PELATIHAN — 3D MODELING MENGGUNAKAN TINKERCAD
Fokus: Desain 3D untuk 3D Printing
• Penyelenggara: IDN
• Jenis kegiatan: Bootcamp
• Aplikasi: Tinkercad
• Tanggal dokumentasi: 19 November 2026

1.1 Pengertian
Tinkercad merupakan aplikasi desain 3D berbasis web yang memungkinkan pengguna membuat objek tiga dimensi dengan menggabungkan, mengubah ukuran, memindahkan, dan memodifikasi berbagai bentuk dasar.

Dalam pelatihan ini, Tinkercad digunakan untuk membuat beberapa desain dekoratif dan personalisasi yang dapat dikembangkan menjadi produk 3D printing.

1.2 Bagian Antarmuka yang Digunakan
• Workplane — Area untuk membuat objek 3D
• Basic Shapes — Kumpulan bentuk dasar
• Ruler — Membantu pengukuran objek
• View Cube — Mengubah sudut pandang objek
• Snap Grid — Mengatur interval pergerakan objek
• Import — Memasukkan file desain
• Export — Mengeluarkan file desain
• Group — Menggabungkan beberapa objek
• Align — Menyelaraskan posisi objek
• Mirror — Membalik objek

1.3 Pengaturan yang Terlihat
• Mode desain: 3D
• Kategori objek: Basic Shapes
• Snap Grid: 1.0 mm
• Workplane digunakan sebagai bidang kerja utama`,
          tips: [
            "Biasakan mengecek pengaturan Snap Grid (default 1.0 mm) di pojok kanan bawah agar pergerakan dan ukuran objek presisi.",
            "Pastikan semua bagian objek menempel pada Workplane dan tidak melayang sebelum diekspor untuk 3D printing.",
          ],
          updatedAt: "2026-11-19",
        },
        {
          id: "note-tinkercad-shortcuts",
          title: "BAB 2 — Shortcut Keyboard Tinkercad & Penerapannya",
          category: "BAB 2 • Shortcut",
          summary:
            "Daftar 7 shortcut keyboard Tinkercad beserta penerapan langsung untuk mempercepat proses pembuatan dan pengaturan objek 3D.",
          content: `Shortcut digunakan untuk mempercepat proses pembuatan dan pengaturan objek di Tinkercad.

Penerapan Shortcut:
1. Ctrl + A digunakan ketika ingin memilih seluruh objek.
2. Ctrl + D digunakan untuk membuat duplikasi objek.
3. M digunakan untuk membuat bentuk yang saling bercermin.
4. Ctrl + L digunakan untuk mengunci atau membuka kunci objek.
5. L digunakan untuk menyelaraskan posisi objek.
6. Ctrl + G digunakan untuk menggabungkan objek.
7. Ctrl + Shift + G digunakan untuk memisahkan kelompok objek (Ungroup).`,
          shortcuts: [
            {
              keys: "Ctrl + A",
              action: "Select All (Pilih Semua)",
              detail: "Memilih semua objek yang ada di atas Workplane sekaligus.",
            },
            {
              keys: "Ctrl + D",
              action: "Duplicate (Gandakan)",
              detail: "Menggandakan / membuat duplikasi objek terpilih.",
            },
            {
              keys: "M",
              action: "Mirror (Cerminkan)",
              detail: "Mencerminkan atau membalik objek untuk membuat bentuk yang saling bercermin.",
            },
            {
              keys: "Ctrl + L",
              action: "Lock / Unlock",
              detail: "Mengunci atau membuka kunci posisi objek agar tidak bergeser.",
            },
            {
              keys: "L",
              action: "Align (Selaraskan)",
              detail: "Menyelaraskan dan meratakan posisi antar objek.",
            },
            {
              keys: "Ctrl + G",
              action: "Group (Gabungkan)",
              detail: "Menggabungkan beberapa objek Solid atau melubangi objek dengan Hole.",
            },
            {
              keys: "Ctrl + Shift + G",
              action: "Ungroup (Pisahkan)",
              detail: "Memisahkan kembali kelompok objek yang sebelumnya digabungkan.",
            },
          ],
          tips: [
            "Saat klik Export → .STL, pastikan tidak hanya 1 bagian kecil yang terseleksi (atau pilih 'Everything in the design') agar seluruh model ikut terekspor.",
            "Untuk gantungan kunci, buat ketebalan dasar yang cukup kuat dan ketebalan huruf timbul memadai agar kokoh saat dicetak.",
            "Gunakan opsi 'Multicolor' pada menu warna Shape jika ingin warna tiap bagian tetap terlihat berbeda setelah di-Group.",
          ],
          updatedAt: "2026-11-19",
        },
        {
          id: "note-tinkercad-praktik",
          title: "BAB 3 & 4 — Dokumentasi 4 Praktik Desain & Ringkasan Keterampilan",
          category: "BAB 3 & 4 • Praktik Desain",
          summary:
            "Dokumentasi rinci Praktik 01–04 (Bilah/Pedang Dekoratif, Kapak Bermata Dua, Name Tag Daffa, Mahkota Dekoratif) lengkap dengan komponen, konsep, tools, ukuran, dan ringkasan keterampilan.",
          content: `BAB 3. DOKUMENTASI PRAKTIK DESAIN

--- PRAKTIK 01 — MEMBUAT DESAIN BILAH / PEDANG DEKORATIF ---
Hasil praktik: Desain objek menyerupai pedang atau bilah dekoratif di atas bidang dasar.

A. Komponen yang terlihat:
1. Bidang dasar berbentuk persegi panjang dengan beberapa sudut melengkung.
2. Objek utama menyerupai bilah pedang.
3. Bagian gagang dan ujung bilah.
4. Beberapa detail geometris pada bagian tengah.
5. Lubang berbentuk lingkaran pada bidang dasar.

B. Konsep desain:
• Menggabungkan beberapa bentuk dasar.
• Membuat bentuk memanjang.
• Membuat detail dan lekukan pada objek.
• Menempatkan beberapa komponen pada satu bidang desain.

C. Tools yang relevan: Basic Shapes, Hole, Align, Group, Duplicate.
D. Ukuran desain: Panjang (X), Lebar (Y), Tinggi (Z) belum terlihat pada screenshot • Snap Grid: 1.0 mm.

--- PRAKTIK 02 — MEMBUAT KAPAK BERMATA DUA ---
Hasil praktik: Desain kapak bermata dua dengan gagang dan alas bundar dekoratif.

A. Komponen yang terlihat:
1. Kepala kapak bermata dua.
2. Gagang memanjang berwarna cokelat.
3. Bagian ujung gagang berbentuk dekoratif.
4. Alas berbentuk bundar berwarna gelap.
5. Tulisan BEST dan ACE pada bagian alas.

B. Konsep desain:
• Membuat objek menggunakan beberapa komponen.
• Mengatur posisi kepala dan gagang.
• Mengatur skala objek.
• Menambahkan elemen dekoratif.
• Menyusun beberapa objek menjadi satu desain.

C. Pengaturan yang terlihat:
Pada salah satu screenshot terdapat panel objek dengan tulisan Scaling Locked. Artinya, pengaturan skala objek sedang dikunci agar perubahan ukuran mengikuti proporsi yang terkunci.

D. Tools yang relevan: Basic Shapes, Duplicate, Mirror, Align, Group, Scaling.
E. Ukuran desain: Panjang (X), Lebar (Y), Tinggi (Z) belum terlihat pada screenshot • Snap Grid: 1.0 mm.

--- PRAKTIK 03 — MEMBUAT NAME TAG DAFFA ---
Hasil praktik: Desain papan nama dengan tulisan Daffa dan dekorasi tambahan.

A. Komponen yang terlihat:
1. Bidang utama berbentuk persegi panjang berwarna merah.
2. Tulisan DAFFA pada bagian tengah.
3. Lubang lingkaran di bagian kiri.
4. Ornamen berbentuk hati.
5. Ornamen berbentuk bintang.

B. Konsep desain:
• Membuat produk personalisasi.
• Menggabungkan objek dasar dan teks.
• Mengatur ukuran dan posisi tulisan.
• Menambahkan lubang untuk gantungan.
• Mengatur posisi ornamen.

C. Tools yang relevan: Box, Text, Hole, Duplicate, Align, Group, Lock.

D. Hal yang perlu diperhatikan untuk 3D Printing:
1. Lubang gantungan harus memiliki ukuran yang cukup.
2. Tulisan harus memiliki ketebalan yang memadai.
3. Ornamen harus terhubung dengan bidang utama jika ingin dicetak sebagai satu bagian.
4. Ketebalan papan harus cukup kuat.

E. Ukuran desain: Panjang (X), Lebar (Y), Tinggi (Z) belum terlihat pada screenshot • Snap Grid: 1.0 mm.

--- PRAKTIK 04 — MEMBUAT MAHKOTA DEKORATIF ---
Hasil praktik: Desain mahkota berwarna oranye dengan ornamen geometris.

A. Komponen yang terlihat:
1. Badan mahkota berbentuk melingkar.
2. Bagian atas mahkota memiliki beberapa puncak.
3. Bagian tengah mahkota memiliki lekukan.
4. Terdapat ornamen geometris berwarna merah pada bagian luar.

B. Konsep desain:
• Membuat bentuk tiga dimensi melingkar.
• Membuat pola puncak dan lekukan.
• Menggabungkan bentuk utama dan ornamen.
• Mengatur posisi dekorasi pada objek.

C. Tools yang relevan: Basic Shapes, Duplicate, Mirror, Align, Group.

D. Hal yang perlu diperhatikan untuk 3D Printing:
1. Ketebalan dinding mahkota harus memadai.
2. Bagian puncak tidak boleh terlalu tipis.
3. Ornamen harus memiliki sambungan yang kuat.
4. Perhatikan bentuk melengkung dan kemungkinan kebutuhan support.

E. Ukuran desain: Panjang/Diameter (X), Lebar/Diameter (Y), Tinggi (Z) belum terlihat pada screenshot • Snap Grid: 1.0 mm.

BAB 4. RINGKASAN HASIL PRAKTIK
1. Bilah / pedang — Konsep keterampilan: Bentuk geometris dan detail.
2. Kapak bermata dua — Konsep keterampilan: Penyusunan beberapa komponen.
3. Name tag Daffa — Konsep keterampilan: Teks dan personalisasi.
4. Mahkota — Konsep keterampilan: Bentuk melingkar dan dekorasi.`,
          tips: [
            "Perhatikan status Scaling Locked saat mengubah ukuran objek agar proporsi desain tidak berubah secara tidak sengaja.",
            "Gunakan alat Ruler di Tinkercad untuk memastikan ukuran X, Y, dan Z tercatat dan sesuai kebutuhan cetak sebelum ekspor.",
          ],
          updatedAt: "2026-11-19",
        },
        {
          id: "note-tinkercad-3dprinting-checklist",
          title: "BAB 5, 6 & 7 — Persiapan 3D Printing, Checklist Mandiri & Kesimpulan",
          category: "BAB 5–7 • 3D Printing & Evaluasi",
          summary:
            "9 pemeriksaan penting sebelum 3D printing & slicing, 14 poin checklist belajar mandiri Tinkercad, serta kesimpulan dokumentasi pelatihan.",
          content: `BAB 5. PERSIAPAN DESAIN UNTUK 3D PRINTING
Bagian ini merupakan panduan belajar lanjutan yang disarankan. Sebelum mencetak desain, lakukan pemeriksaan berikut:
1. Periksa dimensi panjang, lebar, dan tinggi.
2. Pastikan setiap komponen terhubung dengan baik.
3. Periksa ketebalan dinding dan bagian kecil.
4. Periksa lubang dan sambungan.
5. Perhatikan orientasi objek pada area cetak.
6. Periksa kebutuhan support.
7. Ekspor model ke format STL.
8. Buka file STL menggunakan aplikasi slicer.
9. Periksa hasil slicing sebelum mencetak.

BAB 6. CHECKLIST BELAJAR MANDIRI
☐ Memahami Workplane.
☐ Mengenal Basic Shapes.
☐ Memahami fungsi Hole.
☐ Mampu menggunakan Duplicate.
☐ Mampu menggunakan Mirror.
☐ Mampu menggunakan Align.
☐ Mampu menggunakan Group dan Ungroup.
☐ Mampu membuat objek dekoratif.
☐ Mampu membuat tulisan 3D.
☐ Mampu membuat name tag.
☐ Mampu membuat objek dengan bentuk melingkar.
☐ Memahami pengukuran X, Y, Z.
☐ Memahami export STL.
☐ Memahami persiapan slicing.

BAB 7. KESIMPULAN
Pelatihan ini memberikan pengalaman praktik menggunakan Tinkercad untuk membuat berbagai desain tiga dimensi. Empat hasil praktik yang terdokumentasi adalah desain bilah atau pedang dekoratif, kapak bermata dua, name tag Daffa, dan mahkota dekoratif.

Melalui praktik tersebut, pembelajaran mencakup penggunaan bentuk dasar, penyusunan komponen, pengaturan posisi, penggandaan, pencerminan, penggabungan objek, dan pembuatan elemen dekoratif.

Dokumentasi ini digunakan sebagai dasar belajar mandiri untuk mengulang proses desain dan mengembangkan kemampuan membuat model 3D yang siap dipersiapkan untuk proses 3D printing.`,
          tips: [
            "Gunakan 14 poin Checklist Belajar Mandiri di atas untuk mengevaluasi penguasaan materi dari dasar Workplane hingga persiapan slicing.",
            "Selalu cek preview layer di aplikasi slicer setelah export .STL untuk memastikan tidak ada bagian tipis atau melayang yang gagal cetak.",
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
      slug: "webar-augmented-reality",
      day: 2,
      order: 4,
      title: "Augmented Reality Dengan WebAR",
      shortTitle: "WebAR",
      category: "AR / XR",
      tagline:
        "Membuat pengalaman WebAR (3D QR Code, Poster Anatomi Interaktif AI+AR, dan Face Filter AR) menggunakan MyWebAR",
      summary:
        "Hari Ke-2 (20 November 2026): menguasai pembuatan Augmented Reality (AR) berbasis web dengan MyWebAR melalui 3 praktik lengkap — Materi 01 (visualisasi objek 3D lebah via AR to QR Code), Materi 02 (integrasi Meshy AI, MyWebAR, ChatGPT, dan Canva untuk Poster Edukasi Anatomi Manusia Interaktif), serta Materi 03 (pembuatan Face Filter AR interaktif dengan Head Occluder dan aset gambar transparan dari remove.bg).",
      learningGoals: [
        "Mengenal penggunaan dasar MyWebAR serta membuat project AR to QR Code dan Face Filters and Effects",
        "Memilih, mengatur ukuran, dan memposisikan objek 3D pada scene editor MyWebAR",
        "Mengubah gambar referensi anatomi menjadi model 3D (.glb) di Meshy AI (Generate • Lite) dan mengimpornya ke MyWebAR",
        "Merancang poster edukasi anatomi bersama ChatGPT & Canva lengkap dengan QR Code AR siap cetak",
        "Mengaktifkan Head Occluder (Enable Occlusion) dan memasang aset 2D transparan (remove.bg) untuk membuat Face Filter AR",
        "Menguji (Preview) dan mempublikasikan (Publish) pengalaman AR agar dapat diakses langsung lewat kamera HP",
      ],
      status: "completed",
      accentColor: "sky",
      iconName: "sparkles",
      tools: [
        "MyWebAR (AR to QR & Face Filters)",
        "Meshy AI (Generate • Lite)",
        "remove.bg",
        "ChatGPT",
        "Canva",
        "Format 3D (.glb)",
      ],
      projects: [
        {
          id: "webar-poster-anatomi-ar",
          title: "Poster Anatomi Manusia Interaktif Berbasis AI & WebAR",
          subtitle: "Hari Ke-2 • Materi 02 Integrasi Meshy AI, MyWebAR, ChatGPT & Canva",
          description:
            "Media pembelajaran anatomi tubuh manusia yang menggabungkan poster edukasi cetak dengan teknologi AI dan Augmented Reality (AR). Ilustrasi referensi anatomi diubah menjadi model 3D (.glb) menggunakan Meshy AI (fitur Generate, model Lite), diimpor ke MyWebAR untuk menghasilkan QR Code AR, lalu dipadukan dengan desain poster edukasi Anatomi Manusia yang dibuat bersama ChatGPT dan disempurnakan di Canva. Saat QR Code di pojok kanan bawah poster dipindai menggunakan HP, siswa dapat melihat model anatomi 3D secara interaktif melalui kamera!",
          image: "/assets/webar/poster-anatomi-ar-final.jpg",
          downloadUrl: "/assets/webar/poster-anatomi-ar-final.jpg",
          downloadLabel: "Download Poster Anatomi AR (JPG)",
          gallery: [
            {
              src: "/assets/webar/poster-anatomi-ar-final.jpg",
              caption:
                "Hasil Akhir — Poster Edukasi 'Anatomi Manusia' lengkap dengan penjelasan 6 sistem organ, tips kesehatan, dan QR Code WebAR di pojok kanan bawah.",
            },
            {
              src: "/assets/webar/anatomi-step1-education.jpg",
              caption:
                "Langkah 1 & 5 — Project MyWebAR (menu 3D Model kategori Education) dan tampilan model 3D anatomi di atas marker QR Code.",
            },
            {
              src: "/assets/webar/anatomi-step2-referensi.jpg",
              caption:
                "Langkah 2 — Mencari dan memilih gambar referensi ilustrasi organ tubuh manusia di Google untuk diolah ke Meshy AI.",
            },
            {
              src: "/assets/webar/anatomi-step3-meshy-lite.png",
              caption:
                "Langkah 3 — Mengunggah gambar referensi anatomi di Meshy AI pada fitur Generate dengan pilihan model Meshy 6 Lite (gratis).",
            },
            {
              src: "/assets/webar/anatomi-step4-download-glb.png",
              caption:
                "Langkah 4 — Hasil generate model 3D anatomi di Meshy AI dan pengaturan Download Settings dengan format file .glb.",
            },
            {
              src: "/assets/webar/anatomi-step5-import-glb.jpg",
              caption:
                "Langkah 5 — Proses Upload / Import file Meshy_AI_Human_Organ_Systems (.glb) ke dalam scene editor MyWebAR.",
            },
            {
              src: "/assets/webar/anatomi-step6-chatgpt-poster.jpg",
              caption:
                "Langkah 6 — Konsep dan ilustrasi poster edukasi 'Anatomi Manusia' yang dihasilkan dengan bantuan ChatGPT.",
            },
            {
              src: "/assets/webar/anatomi-step8-canva-qr.jpg",
              caption:
                "Langkah 7 & 8 — Mengimpor poster ke Canva dan menempatkan QR Code hasil Publish MyWebAR secara proporsional di pojok kanan bawah poster.",
            },
            {
              src: "/assets/webar/anatomi-step11-scan-poster.jpg",
              caption:
                "Langkah 10 & 11 — Poster Anatomi Manusia yang sudah dicetak dan proses pemindaian QR Code pada poster menggunakan kamera HP.",
            },
            {
              src: "/assets/webar/anatomi-step12-hasil-ar.jpg",
              caption:
                "Langkah 12 — Hasil visualisasi objek anatomi 3D yang muncul secara interaktif di atas QR Code poster cetak melalui kamera HP.",
            },
          ],
          tags: [
            "MyWebAR",
            "Meshy AI",
            "ChatGPT",
            "Canva",
            "Poster Interaktif AR",
            "Anatomi 3D (.glb)",
          ],
          date: "20 November 2026",
          featured: true,
        },
        {
          id: "webar-face-filter",
          title: "Face Filter Augmented Reality Interaktif (MyWebAR)",
          subtitle: "Hari Ke-2 • Materi 03 Mode Face Filters & Effects dengan Head Occluder",
          description:
            "Pembuatan efek filter wajah (Face Filter) Augmented Reality berbasis web menggunakan mode Face Filters and Effects di MyWebAR. Aset foto wajah dipotong (crop), dihapus latar belakangnya menggunakan remove.bg menjadi PNG transparan, lalu dipasang pada model kepala 3D (Head Occluder dengan Enable Occlusion & Alpha Transparency aktif) beserta latar pendukung sehingga filter dapat mengikuti pergerakan wajah secara real-time melalui kamera.",
          image: "/assets/webar/face-step5-editor-publish.png",
          gallery: [
            {
              src: "/assets/webar/face-step1-menu.jpg",
              caption:
                "SS 01 — Membuka project baru di dashboard MyWebAR dan memilih mode Face Filters and Effects.",
            },
            {
              src: "/assets/webar/face-step2-occluder.png",
              caption:
                "SS 02 — Memeriksa model kepala 3D (head occluder) di kanvas editor dan memastikan opsi Enable Occlusion aktif pada panel Setup.",
            },
            {
              src: "/assets/webar/face-step3-crop-google.jpg",
              caption:
                "SS 03 — Mencari referensi foto di Google Images dan melakukan pemotongan (crop) khusus pada area wajah.",
            },
            {
              src: "/assets/webar/face-step4-removebg.jpg",
              caption:
                "SS 04 — Menghapus background foto wajah secara otomatis di remove.bg hingga transparan lalu mengunduhnya.",
            },
            {
              src: "/assets/webar/face-step5-editor-publish.png",
              caption:
                "SS 05 — Memasang dan mengatur skala/posisi aset wajah transparan serta gambar latar pada Head Occluder, siap di-Preview dan Publish.",
            },
          ],
          tags: [
            "MyWebAR",
            "Face Filter AR",
            "Head Occluder",
            "remove.bg",
            "Face Tracking",
          ],
          date: "20 November 2026",
          featured: true,
        },
        {
          id: "webar-lebah-mywebar",
          title: "Augmented Reality Objek 3D Lebah (MyWebAR)",
          subtitle: "Hari Ke-2 • Materi 01 AR to QR Code dengan Model 3D Lebah",
          description:
            "Hasil praktik pertama di Hari Ke-2 menggunakan MyWebAR: membuat project AR to QR Code, memilih objek 3D lebah (Asian_bee.glb) dari 3D Models Library, mengatur ukuran dan posisi objek di dalam editor, lalu mempublikasikannya menjadi QR Code agar objek 3D lebah dapat ditampilkan secara langsung melalui kamera HP.",
          image: "/assets/webar/step4-editor-bee.png",
          gallery: [
            {
              src: "/assets/webar/step1-dashboard.png",
              caption:
                "SS 01 — Tampilan dashboard MyWebAR (My Projects) dan tombol Create New Project untuk memulai project AR baru.",
            },
            {
              src: "/assets/webar/step2-ar-qrcode.jpg",
              caption:
                "SS 02 — Tampilan pilihan tipe pengalaman (Select the Type of Your Experience) untuk memilih fitur AR to QR Code.",
            },
            {
              src: "/assets/webar/step3-3d-library.png",
              caption:
                "SS 03 — Galeri pilihan objek 3D (3D Models Library kategori Animals & Pets) untuk memilih model 3D lebah (Bee).",
            },
            {
              src: "/assets/webar/step4-editor-bee.png",
              caption:
                "SS 04 — Objek lebah (Asian_bee.glb) di dalam editor MyWebAR saat proses pengaturan ukuran dan posisi di atas marker QR Code.",
            },
          ],
          tags: ["MyWebAR", "WebAR", "AR to QR Code", "3D Model Bee", "Augmented Reality"],
          date: "20 November 2026",
          featured: true,
        },
      ],
      notes: [
        {
          id: "note-webar-mywebar-dasar",
          title: "Materi 01 — Membuat Augmented Reality (AR) Menggunakan MyWebAR",
          category: "Hari Ke-2 • Materi 01 (Praktik Dasar)",
          summary:
            "Catatan pelatihan Hari Ke-2 (20 November 2026): pengenalan MyWebAR, tujuan pembelajaran, ringkasan 6 langkah praktik AR to QR Code, hasil praktik objek 3D lebah, dan kesimpulan.",
          content: `HARI KE-2 — MATERI 01 (20 NOVEMBER 2026 · PRAKTIK DASAR)
Membuat Augmented Reality (AR) Menggunakan MyWebAR

1. Pengenalan Materi
Pada pelatihan kali ini, kita mempelajari penggunaan MyWebAR, sebuah platform untuk membuat pengalaman Augmented Reality (AR) berbasis web.

Dengan MyWebAR, objek atau desain 3D dapat divisualisasikan secara langsung melalui kamera HP. Pengguna cukup memindai QR Code untuk melihat objek 3D seolah-olah berada di dunia nyata.

2. Tujuan Pembelajaran
• Mengenal penggunaan dasar MyWebAR.
• Membuat project AR baru.
• Memilih objek 3D yang tersedia.
• Mengatur ukuran dan posisi objek 3D.
• Mempublikasikan project menjadi QR Code.
• Menampilkan objek AR melalui HP.

3. Ringkasan Alur Praktik (6 Langkah)
1. Membuka Project Baru di dashboard MyWebAR (Create New Project).
2. Memilih fitur AR to QR Code agar pengalaman AR dapat diakses melalui pemindaian QR Code di HP.
3. Memilih Model 3D melalui menu 3D Model — pada praktik ini memilih objek lebah (Bee / Asian_bee.glb).
4. Mengatur Objek 3D di dalam scene/editor: memperbesar/memperkecil ukuran, mengatur posisi, dan menyesuaikan tampilan objek.
5. Publish Project untuk menerbitkan pengalaman AR dan menghasilkan QR Code.
6. Memindai QR Code melalui kamera HP atau aplikasi QR scanner sehingga pengalaman AR terbuka di browser HP dan menampilkan objek 3D lebah secara langsung.

4. Hasil Praktik
Hasil dari praktik pertama ini adalah sebuah objek 3D berupa lebah yang berhasil ditampilkan menggunakan teknologi Augmented Reality melalui HP dengan bantuan QR Code. Dengan demikian, desain 3D tidak hanya dapat dilihat di layar komputer, tetapi juga dapat divisualisasikan melalui kamera HP dalam pengalaman AR.

5. Kesimpulan
MyWebAR mempermudah pembuatan pengalaman Augmented Reality tanpa harus membuat aplikasi mobile dari awal. Melalui proses sederhana — mulai dari membuat project, memilih objek 3D, mengatur objek, hingga melakukan publikasi — kita sudah dapat menghasilkan pengalaman AR yang bisa diakses menggunakan QR Code.`,
          tips: [
            "Dengan MyWebAR, pengalaman AR berjalan langsung di browser HP tanpa perlu menginstal atau membuat aplikasi mobile terpisah.",
            "Pastikan posisi dan skala objek 3D sudah proporsional di atas marker QR Code pada editor sebelum menekan tombol Publish.",
          ],
          updatedAt: "2026-11-20",
        },
        {
          id: "note-webar-poster-anatomi",
          title: "Materi 02 — Membuat Poster Anatomi Interaktif Berbasis Augmented Reality",
          category: "Hari Ke-2 • Materi 02 (Integrasi AI & AR)",
          summary:
            "Praktik lanjutan 20 November 2026: kolaborasi 4 tools (MyWebAR, Meshy AI, ChatGPT, Canva) untuk membuat poster edukasi anatomi manusia cetak yang terhubung dengan model 3D AR.",
          content: `HARI KE-2 — MATERI 02 (20 NOVEMBER 2026 · PRAKTIK INTEGRASI AI DAN AR)
Membuat Poster Anatomi Interaktif Berbasis Augmented Reality

1. Pengenalan Materi
Pada materi ini, kita belajar membuat media pembelajaran anatomi tubuh manusia dengan menggabungkan teknologi AI dan Augmented Reality (AR).
Hasil akhirnya berupa poster edukasi yang dapat dicetak. Ketika QR Code pada poster dipindai menggunakan HP, anak-anak dapat melihat model anatomi 3D melalui kamera HP. Dengan cara ini, poster tidak hanya berisi gambar dan tulisan, tetapi juga memiliki objek 3D interaktif yang membantu proses belajar.

2. Tools yang Digunakan
• MyWebAR — Untuk mengimpor model 3D, membuat pengalaman AR, dan menghasilkan QR Code.
• Meshy AI — Untuk mengubah gambar referensi anatomi 2D menjadi model 3D (.glb).
• ChatGPT — Untuk membantu membuat konsep, konten, dan ilustrasi poster edukasi.
• Canva — Untuk menyusun desain poster dan menempatkan QR Code secara proporsional.

3. Ringkasan 12 Langkah Pembuatan & Implementasi Poster AR
1. Membuat Project Baru di MyWebAR (masuk ke bagian 3D Model dan kategori Education).
2. Mencari Referensi Gambar Anatomi di Google sebagai bahan input model 3D.
3. Membuat Model 3D Menggunakan Meshy AI (masuk ke fitur Generate — bukan Agent — lalu pilih model Lite yang gratis, unggah gambar anatomi, dan jalankan generate).
4. Download Model 3D dari Meshy AI dalam format file GLB (.glb).
5. Import Model 3D (.glb) ke MyWebAR agar model anatomi 3D siap digunakan dalam scene AR.
6. Membuat Poster Edukasi Menggunakan ChatGPT (memuat judul pembelajaran, ilustrasi anatomi, nama bagian tubuh, penjelasan singkat, dan informasi edukatif ramah anak).
7. Mendesain & menyempurnakan tampilan poster di Canva agar lebih menarik, rapi, dan mudah dipahami anak-anak.
8. Publish AR di MyWebAR untuk mendapatkan QR Code, lalu letakkan QR Code pada bagian pojok poster di Canva dengan posisi seimbang agar tidak mengganggu informasi utama.
9. Hasil Akhir Desain Poster: menyiapkan file poster final beresolusi tinggi yang menggabungkan materi visual dan QR Code AR.
10. Mencetak Poster Edukasi: mengunduh poster dalam format siap cetak lalu mencetaknya dengan memastikan QR Code terlihat jelas, tidak terpotong, dan berukuran cukup.
11. Melakukan Scan QR Code pada Poster: menguji poster cetak dengan mengarahkan kamera HP ke QR Code untuk membuka pengalaman WebAR.
12. Menampilkan Objek Anatomi dalam AR: objek anatomi 3D muncul di atas poster fisik melalui kamera HP sehingga anak-anak dapat membaca materi sekaligus mengamati visualisasi 3D.

4. Gambaran Hasil Akhir
Hasil akhirnya adalah poster pembelajaran "Anatomi Manusia" yang menggabungkan informasi visual (Sistem Pernapasan, Sistem Pencernaan, Sistem Otot, Sistem Peredaran Darah, Sistem Rangka, Sistem Saraf, serta Tips Menjaga Kesehatan Tubuh) dengan teknologi Augmented Reality melalui QR Code.

5. Manfaat untuk Pembelajaran
• Lebih interaktif: Anak-anak dapat melihat objek anatomi dalam bentuk 3D.
• Lebih menarik: Pembelajaran tidak hanya mengandalkan gambar dua dimensi.
• Mudah diakses: Cukup menggunakan HP dan memindai QR Code.
• Media pembelajaran inovatif: Poster cetak dapat dikembangkan menjadi media pembelajaran digital.
• Membantu pemahaman: Anak-anak dapat mengenali bentuk dan bagian anatomi melalui visualisasi 3D.

6. Kesimpulan
Melalui kombinasi Meshy AI, MyWebAR, ChatGPT, dan Canva, kita dapat membuat media pembelajaran yang menggabungkan poster fisik dengan teknologi Augmented Reality. Proses ini menunjukkan bahwa AI dapat membantu membuat objek 3D dan konten visual, sedangkan AR memungkinkan objek tersebut ditampilkan secara langsung melalui HP. Dengan demikian, poster anatomi menjadi media pembelajaran yang lebih menarik, interaktif, dan mudah digunakan oleh anak-anak.`,
          tips: [
            "Saat menggunakan Meshy AI, pastikan memilih menu 'Generate' (bukan 'Agent') dan gunakan model 'Lite' (Meshy 6 Lite) untuk opsi gratis yang cepat.",
            "Selalu unduh hasil 3D dari Meshy AI dalam format .GLB karena format ini langsung kompatibel untuk di-upload ke MyWebAR.",
            "Tempatkan QR Code MyWebAR di sudut poster (seperti pojok kanan bawah) dengan kontras jelas agar kamera HP mudah memindainya tanpa menutupi materi utama.",
          ],
          updatedAt: "2026-11-20",
        },
        {
          id: "note-webar-face-filter",
          title: "Materi 03 — Membuat Face Filter Augmented Reality (AR) di MyWebAR",
          category: "Hari Ke-2 • Materi 03 (Face Tracking AR)",
          summary:
            "Rangkuman konsep penting pembuatan filter wajah AR: fungsi Head Occluder (Enable Occlusion), persiapan aset PNG transparan via remove.bg, pengaturan Alpha Transparency, hingga Preview & Publish.",
          content: `HARI KE-2 — MATERI 03 (20 NOVEMBER 2026 · PRAKTIK FACE FILTER AR)
Membuat Face Filter Augmented Reality (AR) Menggunakan MyWebAR

1. Konsep Inti Face Filter di MyWebAR
Fitur Face Filters and Effects memungkinkan kita menempelkan aset gambar 2D maupun objek 3D pada model kepala referensi 3D (Head Occluder) sehingga filter otomatis melacak dan mengikuti pergerakan wajah pengguna secara real-time melalui kamera.

2. Komponen & Pengaturan Penting yang Dipakai
• Mode Project: Face Filters and Effects (dipilih saat Create New Project).
• Head Occluder: Model kepala 3D di tengah scene yang berfungsi sebagai acuan posisi wajah sekaligus pemotong kedalaman (occlusion) agar objek di belakang kepala tidak menembus wajah secara tidak wajar.
• Enable Occlusion (Panel Properties → Setup): Wajib diaktifkan pada objek Head Occluder agar aset filter menempel rapi mengikuti kontur kepala.
• Alpha Transparency: Diaktifkan pada aset Image yang diunggah agar bagian background yang sudah dihapus di remove.bg tampil benar-benar transparan di kanvas 3D.
• Position, Scale & Gizmo Sumbu: Digunakan untuk mengatur letak vertikal/horizontal, kedalaman (maju-mundur terhadap wajah), ukuran, dan rotasi gambar.

3. Alur Kerja Ringkas (5 Tahap)
1. Buka Project Baru → pilih Face Filters and Effects.
2. Klik objek head occluder → pastikan Enable Occlusion aktif di panel Setup.
3. Cari referensi gambar wajah di Google Images → crop fokus pada area wajah.
4. Hapus background hasil crop di remove.bg → Download PNG transparan.
5. Unggah gambar lewat menu Image (+) di MyWebAR → paskan skala & posisi pada Head Occluder → uji lewat tombol Preview dan terbitkan dengan Publish.

4. Hasil & Kesimpulan
Gambar 2D statis dari internet dapat diubah menjadi efek filter wajah interaktif yang bergerak mengikuti kepala pengguna langsung di browser tanpa perlu membangun aplikasi mobile dari nol.`,
          tips: [
            "Pastikan 'Enable Occlusion' pada Head Occluder dan 'Alpha Transparency' pada Image sama-sama aktif agar filter wajah tidak tertutup kotak background putih/hitam.",
            "Saat memotong (crop) foto wajah, ambil batas pas dari kepala/peci hingga dagu agar proporsinya mudah dipaskan dengan bentuk Head Occluder.",
            "Gunakan tombol Preview di pojok kanan atas untuk mencoba pelacakan wajah langsung lewat webcam laptop sebelum menekan Publish.",
          ],
          updatedAt: "2026-11-20",
        },
      ],
      tutorials: [
        {
          id: "tut-webar-mywebar-lebah",
          title: "Tutorial Materi 01: Membuat Augmented Reality (AR) Menggunakan MyWebAR",
          subtitle:
            "Panduan praktik dasar 6 langkah membuat AR to QR Code dengan objek 3D lebah dan menampilkannya melalui kamera HP",
          difficulty: "Pemula",
          duration: "30 menit",
          tools: [
            "Laptop & Browser (MyWebAR)",
            "Fitur AR to QR Code",
            "3D Models Library (Model Lebah / Bee)",
            "Kamera HP / Aplikasi Pemindai QR Code",
          ],
          goal: "Peserta mampu membuat project AR baru di MyWebAR, memilih fitur AR to QR Code dan objek 3D lebah, mengatur ukuran dan posisi objek, mempublikasikan project menjadi QR Code, serta menampilkan objek AR secara langsung melalui HP.",
          steps: [
            {
              stepNumber: 1,
              title: "Membuka Project Baru",
              description:
                "Masuk ke platform MyWebAR, kemudian buat project baru (klik tombol Create New Project di dashboard My Projects) untuk memulai pembuatan pengalaman Augmented Reality.",
              image: "/assets/webar/step1-dashboard.png",
            },
            {
              stepNumber: 2,
              title: "Memilih AR to QR Code",
              description:
                "Setelah membuat project, pilih fitur AR to QR Code pada jendela Select the Type of Your Experience. Fitur ini memungkinkan pengalaman AR diakses melalui QR Code yang nantinya dapat dipindai menggunakan HP.",
              image: "/assets/webar/step2-ar-qrcode.jpg",
              tip: "QR Code berfungsi ganda sebagai tautan untuk membuka pengalaman WebAR sekaligus marker tempat konten 3D muncul.",
            },
            {
              stepNumber: 3,
              title: "Memilih Model 3D",
              description:
                "Selanjutnya, pilih menu atau fitur 3D Model untuk membuka 3D Models Library dan mencari objek tiga dimensi yang ingin ditampilkan dalam AR. Pada praktik kali ini, objek yang dipilih adalah lebah (Bee) pada kategori Animals & Pets.",
              image: "/assets/webar/step3-3d-library.png",
            },
            {
              stepNumber: 4,
              title: "Mengatur Objek 3D",
              description:
                "Setelah objek lebah (Asian_bee.glb) dipilih, objek akan masuk ke dalam scene atau area kerja di atas marker QR Code.\n\nKita dapat mengatur tampilan objek sesuai kebutuhan, seperti:\n• Memperbesar ukuran objek.\n• Memperkecil ukuran objek.\n• Mengatur posisi objek.\n• Menyesuaikan tampilan objek agar terlihat sesuai keinginan.",
              image: "/assets/webar/step4-editor-bee.png",
              tip: "Gunakan tombol kontrol transformasi (Move, Rotate, Scale) di pojok kanan atas editor untuk mengatur posisi dan ukuran objek 3D secara presisi.",
            },
            {
              stepNumber: 5,
              title: "Publish Project",
              description:
                "Jika objek sudah selesai diatur, langkah selanjutnya adalah menekan tombol Publish untuk menerbitkan project AR.\n\nSetelah proses publikasi selesai, MyWebAR akan menghasilkan QR Code yang dapat digunakan untuk mengakses pengalaman AR.",
              tip: "Simpan atau tampilkan QR Code hasil Publish di layar/kertas agar mudah dipindai menggunakan kamera HP.",
            },
            {
              stepNumber: 6,
              title: "Memindai QR Code Melalui HP",
              description:
                "Buka kamera HP atau aplikasi pemindai QR Code, kemudian arahkan kamera ke QR Code yang sudah dihasilkan.\n\nSetelah QR Code dipindai, pengalaman AR akan terbuka melalui browser HP. Kamera kemudian dapat menampilkan objek 3D lebah secara langsung seolah-olah berada di dunia nyata.",
              tip: "Izinkan akses kamera pada browser HP saat diminta agar objek 3D lebah langsung muncul di atas QR Code.",
            },
          ],
        },
        {
          id: "tut-webar-poster-anatomi",
          title:
            "Tutorial Materi 02: Membuat Poster Anatomi Interaktif Berbasis Augmented Reality",
          subtitle:
            "Panduan lengkap 12 langkah: integrasi Meshy AI, MyWebAR, ChatGPT, dan Canva hingga pencetakan poster fisik dan uji scan AR di HP",
          difficulty: "Menengah",
          duration: "45–60 menit",
          tools: [
            "MyWebAR (AR Editor & QR Code)",
            "Meshy AI (Generate 2D ke 3D • Lite)",
            "ChatGPT (Konsep & Konten Poster)",
            "Canva (Layout Poster & QR Code)",
            "Google Images (Referensi Anatomi)",
          ],
          goal: "Peserta mampu mengintegrasikan Meshy AI, MyWebAR, ChatGPT, dan Canva untuk mengubah gambar anatomi menjadi model 3D (.glb), mempublikasikannya sebagai WebAR ber-QR Code, dan menyusunnya menjadi poster edukasi interaktif siap cetak.",
          steps: [
            {
              stepNumber: 1,
              title: "Membuat Project Baru di MyWebAR",
              description:
                "Buat project baru di MyWebAR, kemudian masuk ke bagian 3D Model dan cari fitur atau kategori Education.\n\nSelanjutnya, siapkan scene atau tambahkan objek/karakter anatomi yang akan dijadikan bahan pembelajaran.",
              image: "/assets/webar/anatomi-step1-education.jpg",
            },
            {
              stepNumber: 2,
              title: "Mencari Referensi Gambar Anatomi",
              description:
                "Buka Google dan cari gambar anatomi manusia yang ingin dibuat menjadi model 3D. Pilih salah satu gambar ilustrasi organ tubuh yang jelas dan sesuai dengan kebutuhan pembelajaran.\n\nGambar tersebut akan digunakan sebagai referensi untuk proses pembuatan model 3D menggunakan Meshy AI.",
              image: "/assets/webar/anatomi-step2-referensi.jpg",
              tip: "Pilih gambar anatomi dengan latar belakang bersih/kontras agar AI lebih akurat mengenali bentuk tubuh dan organ.",
            },
            {
              stepNumber: 3,
              title: "Membuat Model 3D Menggunakan Meshy AI",
              description:
                "Buka platform Meshy AI, kemudian masuk ke fitur Generate.\n• Perlu diperhatikan: pilih fitur Generate, bukan Agent.\n• Setelah itu, pilih model Lite (Meshy 6 Lite) karena model ini merupakan pilihan gratis yang digunakan dalam praktik.\n\nMasukkan atau unggah gambar anatomi yang sudah dipilih sebelumnya pada kolom Image, kemudian jalankan proses generate untuk membuat model 3D.",
              image: "/assets/webar/anatomi-step3-meshy-lite.png",
              tip: "Pastikan mode berada di 'Generate' dan model disetel ke 'Meshy 6 Lite' sebelum menekan tombol generate.",
            },
            {
              stepNumber: 4,
              title: "Download Model 3D (.glb)",
              description:
                "Setelah model 3D selesai dibuat oleh Meshy AI, buka menu Download Settings lalu unduh hasilnya menggunakan format file GLB (.glb).\n\nFormat .glb digunakan agar model 3D beserta bentuknya dapat langsung diimpor ke dalam MyWebAR.",
              image: "/assets/webar/anatomi-step4-download-glb.png",
              codeSnippet: "Meshy AI → Download Settings → Format: glb → Download",
            },
            {
              stepNumber: 5,
              title: "Import Model 3D ke MyWebAR",
              description:
                "Kembali ke editor MyWebAR, klik tombol Upload pada menu 3D Object, lalu pilih file .glb (contoh: Meshy_AI_Human_Organ_Systems_..._generate.glb) yang sudah diunduh dari Meshy AI.\n\nSetelah berhasil diimpor, atur posisi dan skala model anatomi 3D di atas marker QR Code dalam project AR.",
              image: "/assets/webar/anatomi-step5-import-glb.jpg",
            },
            {
              stepNumber: 6,
              title: "Membuat Poster Edukasi Menggunakan ChatGPT",
              description:
                "Buka ChatGPT dan minta bantuan untuk membuat poster pembelajaran mengenai anatomi tubuh manusia.\n\nPoster dapat berisi:\n• Judul pembelajaran (Anatomi Manusia).\n• Gambar atau ilustrasi anatomi tubuh.\n• Nama bagian-bagian / sistem organ tubuh (Pernapasan, Pencernaan, Otot, Peredaran Darah, Rangka, Saraf).\n• Penjelasan singkat setiap bagian.\n• Informasi edukatif & tips menjaga kesehatan tubuh yang mudah dipahami anak-anak.",
              image: "/assets/webar/anatomi-step6-chatgpt-poster.jpg",
            },
            {
              stepNumber: 7,
              title: "Mendesain Poster di Canva",
              description:
                "Setelah mendapatkan hasil poster dari ChatGPT, buka Canva dan impor hasil tersebut ke dalam kanvas desain Canva.\n\nLakukan penyesuaian tata letak dan ruang agar poster terlihat lebih menarik, rapi, dan siap ditempati QR Code interaktif.",
              image: "/assets/webar/anatomi-step8-canva-qr.jpg",
            },
            {
              stepNumber: 8,
              title: "Publish AR dan Menggabungkan QR Code dengan Poster",
              description:
                "Kembali ke MyWebAR, kemudian klik tombol Publish pada project AR yang sudah selesai dibuat hingga menghasilkan QR Code.\n\nUnduh QR Code tersebut, masukkan ke dalam desain poster di Canva, dan letakkan pada bagian pojok kanan bawah poster dengan posisi yang seimbang agar tidak mengganggu informasi utama.",
              image: "/assets/webar/anatomi-step8-canva-qr.jpg",
              tip: "Sisakan ruang/bingkai putih di tepi QR Code (quiet zone) supaya kamera HP dapat memindai kode dengan cepat.",
            },
            {
              stepNumber: 9,
              title: "Hasil Akhir Desain Poster Digital",
              description:
                "Setelah tata letak poster dan QR Code selesai disusun di Canva, periksa kembali kelengkapan teks sistem organ, tips kesehatan, serta kontras QR Code di pojok kanan bawah sebelum diunduh.",
              image: "/assets/webar/poster-anatomi-ar-final.jpg",
            },
            {
              stepNumber: 10,
              title: "Mencetak Poster Edukasi",
              description:
                "Setelah desain poster selesai dibuat di Canva dan QR Code MyWebAR sudah dimasukkan, selanjutnya poster diunduh dalam format siap cetak.\n\nPoster kemudian dicetak menggunakan printer atau jasa percetakan. Pastikan QR Code terlihat jelas, tidak terpotong, dan memiliki ukuran yang cukup agar mudah dipindai menggunakan kamera HP.",
              image: "/assets/webar/anatomi-step11-scan-poster.jpg",
              tip: "Gunakan kertas dengan permukaan tidak terlalu memantulkan cahaya berlebih agar kamera HP lebih cepat mengenali QR Code.",
            },
            {
              stepNumber: 11,
              title: "Melakukan Scan QR Code pada Poster",
              description:
                "Setelah poster dicetak, lakukan pengujian dengan memindai QR Code yang terdapat pada poster menggunakan HP.\n\nPengguna cukup mengarahkan kamera HP ke QR Code untuk membuka pengalaman Augmented Reality yang sudah dibuat melalui MyWebAR.",
              image: "/assets/webar/anatomi-step11-scan-poster.jpg",
            },
            {
              stepNumber: 12,
              title: "Menampilkan Objek Anatomi dalam AR",
              description:
                "Setelah QR Code berhasil dipindai, objek anatomi 3D akan muncul melalui kamera HP.\n\nPada tahap ini, poster fisik berfungsi sebagai media pembelajaran yang menghubungkan informasi visual dengan objek tiga dimensi. Anak-anak dapat membaca penjelasan pada poster sekaligus melihat visualisasi anatomi dalam bentuk AR.",
              image: "/assets/webar/anatomi-step12-hasil-ar.jpg",
            },
          ],
          downloadUrl: "/assets/webar/poster-anatomi-ar-final.jpg",
          downloadLabel: "Download Hasil Poster Anatomi AR (JPG)",
        },
        {
          id: "tut-webar-face-filter",
          title: "Tutorial Materi 03: Membuat Face Filter Augmented Reality di MyWebAR",
          subtitle:
            "Panduan praktis 5 langkah membuat filter wajah interaktif menggunakan Head Occluder, remove.bg, dan Face Filters & Effects",
          difficulty: "Pemula",
          duration: "25 menit",
          tools: [
            "MyWebAR (Mode Face Filters and Effects)",
            "Head Occluder (Enable Occlusion)",
            "Google Images & Snipping/Crop Tool",
            "remove.bg (Penghapus Background)",
          ],
          goal: "Peserta mampu membuat project Face Filters and Effects di MyWebAR, mengaktifkan Head Occluder, menyiapkan aset wajah transparan dengan remove.bg, memasangnya secara presisi pada model kepala 3D, serta menguji dan mempublikasikan filter AR.",
          steps: [
            {
              stepNumber: 1,
              title: "Membuka Project Baru (Face Filters and Effects)",
              description:
                "Masuk ke dashboard MyWebAR, buat project baru, lalu pilih menu Face Filters and Effects pada daftar tipe pengalaman AR untuk memulai pembuatan filter wajah.",
              image: "/assets/webar/face-step1-menu.jpg",
            },
            {
              stepNumber: 2,
              title: "Mengatur Head Occluder (Enable Occlusion)",
              description:
                "Setelah masuk ke halaman editor, periksa objek head occluder (model kepala 3D) yang muncul di tengah kanvas.\n\nPada panel Properties di sebelah kanan, buka bagian Setup dan pastikan opsi Enable Occlusion dalam keadaan aktif agar aset filter dapat menempel rapi mengikuti bentuk kepala.",
              image: "/assets/webar/face-step2-occluder.png",
              tip: "Head Occluder berfungsi sebagai patokan posisi wajah pengguna saat kamera mendeteksi kepala.",
            },
            {
              stepNumber: 3,
              title: "Mencari dan Memotong (Crop) Aset Gambar Wajah",
              description:
                "Buka Google Images untuk mencari foto wajah atau objek yang akan dijadikan filter. Setelah menemukan gambar yang sesuai, potong (crop) atau ambil tangkapan layar khusus pada bagian wajah yang dibutuhkan.",
              image: "/assets/webar/face-step3-crop-google.jpg",
            },
            {
              stepNumber: 4,
              title: "Menghapus Background Gambar di remove.bg",
              description:
                "Unggah gambar hasil potongan wajah tadi ke situs remove.bg agar latar belakangnya terhapus secara otomatis dan menjadi transparan. Setelah hasilnya rapi, klik tombol Download untuk menyimpan file PNG transparan ke perangkat.",
              image: "/assets/webar/face-step4-removebg.jpg",
            },
            {
              stepNumber: 5,
              title: "Memasang Aset pada Head Occluder, Preview, dan Publish",
              description:
                "Kembali ke editor MyWebAR, klik ikon + pada menu Image di panel kiri (Objects) untuk mengunggah gambar wajah transparan beserta gambar latar pendukung.\n\nPastikan opsi Alpha Transparency aktif, lalu atur posisi, ukuran, dan rotasi gambar menggunakan gizmo sumbu di kanvas atau menu Position and Scale di panel kanan hingga pas dengan model kepala. Terakhir, klik Preview di kanan atas untuk menguji filter wajah, lalu klik Publish untuk menerbitkannya.",
              image: "/assets/webar/face-step5-editor-publish.png",
              tip: "Jika gambar wajah terlihat sedikit di belakang model kepala, geser sedikit sumbu maju (Z) agar wajah filter tampil tepat di depan permukaan Head Occluder.",
            },
          ],
        },
      ],
    },
    {
      slug: "robotic-tinybit",
      day: 2,
      order: 5,
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
      order: 6,
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

    // ==================== HARI KE-3 ====================
    {
      slug: "minecraft-education",
      day: 3,
      order: 7,
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
      accentColor: "violet",
      iconName: "blocks",
      tools: ["Minecraft Education Edition", "MakeCode / Code Builder"],
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
      tagline:
        "Praktik AI Finger Tracking di PictoBlox dengan extension Human Body Detection untuk melacak 5 jari tangan secara real-time",
      summary:
        "Praktik langsung membuat proyek Artificial Intelligence sederhana di PictoBlox: AI Finger Tracking menggunakan extension Human Body Detection. Kamera mendeteksi tangan secara langsung dan menampilkan lima sprite bola warna-warni yang mengikuti koordinat ujung ibu jari, jari telunjuk, jari tengah, jari manis, dan jari kelingking pada Stage.",
      learningGoals: [
        "Mengenal lingkungan pemrograman blok PictoBlox dan menambahkan extension Human Body Detection",
        "Mengaktifkan kamera pada Stage dan menganalisis deteksi tangan secara real-time",
        "Menghubungkan koordinat X dan Y hasil deteksi 5 ujung jari ke lima sprite bola menggunakan blok If-Else, Go to x: y:, Show, dan Hide",
      ],
      status: "completed",
      accentColor: "violet",
      iconName: "brain",
      tools: [
        "PictoBlox (Mode Blocks)",
        "Extension Human Body Detection",
        "Webcam / Kamera Laptop",
        "5 Sprite Bola & Backdrop",
      ],
      projects: [
        {
          id: "pictoblox-ai-finger-tracking",
          title: "AI Finger Tracking — PictoBlox",
          subtitle: "Deteksi & Pelacakan 5 Jari Tangan Real-Time dengan Human Body Detection",
          description:
            "Proyek praktik langsung AI di PictoBlox menggunakan extension Human Body Detection: kamera laptop mendeteksi posisi tangan secara real-time dan menggerakkan lima objek bola warna-warni (Ball hingga Ball5) agar mengikuti koordinat ujung kelima jari — ibu jari (Thumb), telunjuk (Index), jari tengah (Middle), jari manis (Ring), dan kelingking (Pinky).",
          image: "/assets/pictoblox/15-hasil-ai-finger-tracking.png",
          gallery: [
            {
              src: "/assets/pictoblox/15-hasil-ai-finger-tracking.png",
              caption:
                "Hasil Akhir — AI Finger Tracking aktif: 5 bola warna-warni mengikuti ujung kelima jari tangan di kamera secara real-time.",
            },
            {
              src: "/assets/pictoblox/01-mode-blocks.png",
              caption: "01 — Membuka PictoBlox dan memilih mode pemrograman Blocks.",
            },
            {
              src: "/assets/pictoblox/02-nama-proyek.png",
              caption: "02 — Memberikan nama proyek 'AI Finger Tracking'.",
            },
            {
              src: "/assets/pictoblox/03-workspace-awal.png",
              caption: "03 — Tampilan awal workspace PictoBlox dengan sprite Tobi.",
            },
            {
              src: "/assets/pictoblox/04-menu-backdrop.png",
              caption: "04 — Membuka tombol menu Choose a Backdrop di pojok kanan bawah.",
            },
            {
              src: "/assets/pictoblox/05-pilih-backdrop.jpg",
              caption: "05 — Memilih backdrop 'Blue Sky 2' dari galeri PictoBlox.",
            },
            {
              src: "/assets/pictoblox/06-stage-backdrop.png",
              caption: "06 — Stage berhasil menampilkan backdrop Blue Sky 2.",
            },
            {
              src: "/assets/pictoblox/07-extension-human-body.jpg",
              caption: "07 — Menambahkan extension Human Body Detection dari menu Extensions.",
            },
            {
              src: "/assets/pictoblox/08-sprite-ball-looks.png",
              caption: "08 — Menambahkan sprite Ball dan membuka kategori blok Looks.",
            },
            {
              src: "/assets/pictoblox/09-lima-sprite-bola.png",
              caption: "09 — Menyiapkan 5 sprite bola (Ball, Ball2, Ball3, Ball4, Ball5) berukuran 50%.",
            },
            {
              src: "/assets/pictoblox/10-kode-ibu-jari.jpg",
              caption: "10 — Program Ball: mengaktifkan kamera, analisis tangan, dan melacak top of thumb (ibu jari).",
            },
            {
              src: "/assets/pictoblox/11-kode-telunjuk.jpg",
              caption: "11 — Program Ball2: melacak posisi top of index finger (jari telunjuk).",
            },
            {
              src: "/assets/pictoblox/12-kode-jari-tengah.jpg",
              caption: "12 — Program Ball3: melacak posisi top of middle finger (jari tengah).",
            },
            {
              src: "/assets/pictoblox/13-kode-jari-manis.jpg",
              caption: "13 — Program Ball4: melacak posisi top of ring finger (jari manis).",
            },
            {
              src: "/assets/pictoblox/14-kode-kelingking.jpg",
              caption: "14 — Program Ball5: melacak posisi top of pinky finger (jari kelingking).",
            },
          ],
          tags: [
            "PictoBlox",
            "AI Finger Tracking",
            "Human Body Detection",
            "Computer Vision",
            "Block Coding",
          ],
          date: "20 November 2026",
          featured: true,
        },
      ],
      notes: [
        {
          id: "note-pictoblox-finger-tracking",
          title: "Dokumentasi Praktik — AI Finger Tracking di PictoBlox",
          category: "Catatan Praktik & Hasil Proyek",
          summary:
            "Identitas proyek, alat & bahan, pemetaan 5 sprite bola ke 5 jari tangan, logika blok Human Body Detection, refleksi praktik, serta status proyek.",
          content: `DOKUMENTASI PRAKTIK — AI FINGER TRACKING (PICTOBLOX)

1. Identitas Kegiatan
• Nama Proyek: AI Finger Tracking
• Platform: PictoBlox (Mode Blocks)
• Extension: Human Body Detection
• Jenis Kegiatan: Praktik langsung
• Topik: Pendeteksian dan pelacakan posisi jari tangan menggunakan kamera
• Kategori Arsip: AI Pictoblox dan Micro:bit

2. Tujuan Praktik
Membuat proyek sederhana di PictoBlox yang dapat mendeteksi tangan melalui kamera dan menampilkan lima objek bola yang mengikuti posisi masing-masing jari:
1. Ibu jari (Thumb) → Ball
2. Jari telunjuk (Index Finger) → Ball2
3. Jari tengah (Middle Finger) → Ball3
4. Jari manis (Ring Finger) → Ball4
5. Jari kelingking (Pinky Finger) → Ball5

3. Alat dan Bahan
• Komputer atau laptop dengan kamera (webcam)
• Aplikasi PictoBlox
• Extension Human Body Detection
• Lima sprite berbentuk bola (Ball – Ball5)
• Backdrop (Blue Sky 2)

4. Logika Blok Program Utama
• when green flag clicked — memulai program.
• set size to 50% — menyesuaikan ukuran bola agar proporsional di ujung jari.
• turn on video on stage with 0% transparency — menampilkan kamera langsung pada Stage.
• forever — menjalankan proses deteksi secara berulang.
• analyse image for hand from camera — menganalisis gambar tangan dari kamera.
• is hand detected — memeriksa apakah tangan terdeteksi di kamera.
• if ... else ... — mengatur kondisi ketika tangan terdeteksi atau tidak terdeteksi.
• go to x: [x position of top of ...] y: [y position of top of ...] — menggerakkan sprite mengikuti koordinat ujung masing-masing jari.
• show & hide — menampilkan bola saat tangan terdeteksi dan menyembunyikannya saat tangan tidak terdeteksi.

5. Pengalaman dan Refleksi Praktik
Kegiatan ini dilakukan dengan metode praktik langsung tanpa pembahasan teori terlebih dahulu. Proses pembelajaran berfokus pada mengikuti langkah pembuatan proyek, menambahkan extension, menyusun blok program, dan melihat hasilnya secara langsung.

Dari kegiatan ini, saya mendapatkan pengalaman menggunakan PictoBlox untuk membuat proyek berbasis AI sederhana serta menghubungkan koordinat hasil deteksi jari dengan posisi sprite pada Stage. Praktik ini menjadi pengalaman awal dalam menggunakan fitur Human Body Detection untuk menciptakan interaksi antara gerakan tangan dan objek digital.

6. Status Proyek
✓ Membuat proyek baru di PictoBlox
✓ Menambahkan backdrop
✓ Menambahkan extension Human Body Detection
✓ Menambahkan lima sprite bola
✓ Menyusun program untuk lima jari
✓ Menyusun dokumentasi 15 screenshot
☐ Menambahkan file proyek PictoBlox (.sb3) ke arsip
☐ Melengkapi catatan pengujian lanjutan jika tersedia`,
          tips: [
            "Blok 'turn on video on stage' dan 'analyse image for hand from camera' cukup dijalankan di sprite pertama (Ball), sementara Ball2–Ball5 langsung membaca kondisi 'is hand detected' dan koordinat jari masing-masing.",
            "Pastikan pencahayaan ruangan cukup terang agar extension Human Body Detection dapat mengenali kerangka tangan dan ujung kelima jari dengan stabil.",
          ],
          updatedAt: "2026-11-20",
        },
      ],
      tutorials: [
        {
          id: "tut-pictoblox-finger-tracking",
          title: "Tutorial Praktik: Membuat AI Finger Tracking di PictoBlox",
          subtitle:
            "Panduan langkah demi langkah melacak 5 ujung jari tangan secara real-time dengan extension Human Body Detection",
          difficulty: "Pemula",
          duration: "35 menit",
          tools: [
            "Laptop dengan Kamera",
            "Aplikasi PictoBlox (Mode Blocks)",
            "Extension Human Body Detection",
            "5 Sprite Bola & Backdrop",
          ],
          goal: "Peserta mampu menambahkan extension Human Body Detection di PictoBlox, menyiapkan lima sprite bola, dan memprogram masing-masing bola agar mengikuti koordinat ujung 5 jari tangan secara real-time.",
          steps: [
            {
              stepNumber: 1,
              title: "Membuat Proyek Baru di Mode Blocks",
              description:
                "Buka aplikasi PictoBlox, pilih mode Blocks, buat proyek baru, lalu beri nama proyek 'AI Finger Tracking' pada kolom judul di bagian atas.",
              image: "/assets/pictoblox/02-nama-proyek.png",
            },
            {
              stepNumber: 2,
              title: "Menambahkan Backdrop pada Stage",
              description:
                "Klik ikon Choose a Backdrop di pojok kanan bawah, pilih latar belakang yang diinginkan (pada praktik ini memilih Blue Sky 2), lalu pastikan backdrop sudah tampil pada Stage.",
              image: "/assets/pictoblox/06-stage-backdrop.png",
            },
            {
              stepNumber: 3,
              title: "Menambahkan Extension Human Body Detection",
              description:
                "Klik tombol Add Extension di pojok kiri bawah, lalu pilih extension Human Body Detection. Pastikan kategori blok Human Body sudah muncul di panel kiri area pemrograman.",
              image: "/assets/pictoblox/07-extension-human-body.jpg",
            },
            {
              stepNumber: 4,
              title: "Menambahkan Lima Sprite Bola",
              description:
                "Hapus sprite default (Tobi), lalu tambahkan lima sprite berbentuk bola dengan warna berbeda (Ball, Ball2, Ball3, Ball4, Ball5) dan atur ukuran (Size) menjadi 50 agar pas sebagai penanda ujung jari.",
              image: "/assets/pictoblox/09-lima-sprite-bola.png",
            },
            {
              stepNumber: 5,
              title: "Menyusun Program Pelacakan Ibu Jari (Ball)",
              description:
                "Pada sprite pertama (Ball), susun blok untuk mengatur ukuran 50%, menyalakan kamera (turn on video on stage with 0% transparency), menganalisis tangan di dalam loop forever, lalu menggerakkan bola ke koordinat X dan Y 'top of thumb' jika tangan terdeteksi (Show) atau menyembunyikannya jika tidak (Hide).",
              image: "/assets/pictoblox/10-kode-ibu-jari.jpg",
              codeSnippet: `when green flag clicked
set size to (50) %
turn [on] video on stage with (0) % transparency
forever
  analyse image for hand from [camera]
  if <is hand detected> then
    go to x: (x position of [top of thumb]) y: (y position of [top of thumb])
    show
  else
    hide`,
            },
            {
              stepNumber: 6,
              title: "Menyusun Program 4 Jari Lainnya (Ball2 – Ball5)",
              description:
                "Salin atau susun blok yang sama pada keempat sprite bola lainnya, lalu ubah pilihan titik jari pada blok koordinat X dan Y:\n• Ball2 → top of index finger (jari telunjuk)\n• Ball3 → top of middle finger (jari tengah)\n• Ball4 → top of ring finger (jari manis)\n• Ball5 → top of pinky finger (jari kelingking)",
              image: "/assets/pictoblox/14-kode-kelingking.jpg",
              tip: "Kamu bisa menduplikasi blok dari Ball ke Ball2–Ball5 lalu cukup menghapus blok 'turn on video' & 'analyse image' pada Ball2–Ball5 dan mengganti nama jarinya.",
            },
            {
              stepNumber: 7,
              title: "Menjalankan & Menguji AI Finger Tracking",
              description:
                "Klik tombol bendera hijau (Green Flag) untuk menjalankan program, lalu arahkan telapak tangan ke depan kamera laptop. Kelima sprite bola akan otomatis muncul dan mengikuti gerakan masing-masing ujung jari secara real-time.",
              image: "/assets/pictoblox/15-hasil-ai-finger-tracking.png",
            },
          ],
        },
      ],
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
