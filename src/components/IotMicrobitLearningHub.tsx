"use client";

import { useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Cpu,
  ExternalLink,
  GraduationCap,
  HelpCircle,
  Info,
  Layers,
  Lightbulb,
  ShieldAlert,
  Sparkles,
  Wrench,
  ZoomIn,
} from "lucide-react";

interface IotMicrobitLearningHubProps {
  onOpenImage?: (src: string, caption: string) => void;
  initialUnitId?: string;
}

type HubSection =
  | "overview"
  | "fundamentals"
  | "equipment"
  | "benefits"
  | "projects"
  | "troubleshooting"
  | "glossary";

interface AssetFigure {
  id: string;
  src: string;
  alt: string;
  caption: string;
  kind: "Foto asli" | "Screenshot asli" | "Frame video asli" | "Diagram baru";
}

interface ProjectUnitData {
  id: "P00" | "P01" | "P02" | "P03" | "P04" | "P05" | "P06";
  stage: "Learn" | "Explore" | "Create";
  category: string;
  title: string;
  statusLabel: string;
  statusTone: "observed" | "confirmed" | "untested";
  validationTag: string;
  evidenceBoundary: string;
  goal: string;
  tools: string;
  sdSmpApplication: string;
  createChallenge: string;
  heroAsset: AssetFigure;
  overviewSummary: string;
  steps: {
    stepNum: string;
    title: string;
    detail: string;
  }[];
  codeTitle?: string;
  codeNote?: string;
  codeBlocks: {
    label: string;
    language: "text" | "javascript";
    code: string;
    explanation?: string;
  }[];
  analysisTable?: {
    col1Header: string;
    col2Header: string;
    rows: [string, string][];
  };
  extraNotes?: {
    title: string;
    body: string;
  }[];
  assets: AssetFigure[];
  sourcePage: string;
}

const PROJECT_UNITS: ProjectUnitData[] = [
  {
    id: "P00",
    stage: "Learn",
    category: "Latihan Dasar",
    title: "P00 — Interactive LED & Sound",
    statusLabel: "Terdokumentasi; audio keluaran belum diverifikasi.",
    statusTone: "observed",
    validationTag: "Observed",
    evidenceBoundary: "LED merah tampak; event A/B terlihat. Audio keluaran belum diperiksa.",
    goal: "Tombol, event, LED, musik dan input–process–output. Mengenal editor, simulator, event dan transfer program.",
    tools: "micro:bit V2, HoLa:BIT, 24 NeoPixel, USB data, MakeCode + NeoPixel",
    sdSmpApplication: "SD dengan pendampingan (tombol dan warna); SMP dapat mandiri (event dan debugging).",
    createChallenge: "Tambah event A+B untuk mematikan LED.",
    heroAsset: {
      id: "P00_VF_02",
      src: "/assets/iot-microbit/P00_VF_02_LED_Merah.png",
      alt: "LED ring merah menyala; tangan peserta terlihat",
      caption:
        "P00_VF_02 — LED ring merah menyala; tangan peserta terlihat (Frame video asli; Frame asli; tanpa audio; timestamp target: 7.5 s (target seek)).",
      kind: "Frame video asli",
    },
    overviewSummary:
      "Observed: video menunjukkan blok event tombol A/B dan LED merah menyala. Musik dan ikon tampak pada program; audio keluaran tidak diverifikasi. Berikut latihan baru berdasarkan konsep video, bukan salinan persis.",
    steps: [
      {
        stepNum: "01",
        title: "Buat proyek",
        detail:
          "Buka MakeCode → New Project → beri nama. Editor memiliki simulator, kategori blok dan workspace.",
      },
      {
        stepNum: "02",
        title: "Uji output",
        detail:
          "Pilih Basic → show string atau show icon; letakkan dalam on start. Perhatikan simulator.",
      },
      {
        stepNum: "03",
        title: "Transfer",
        detail:
          "Hubungkan micro:bit lewat USB data, pilih Download, transfer HEX atau gunakan pairing perangkat jika didukung. Tunggu proses selesai sebelum melepas kabel.",
      },
      {
        stepNum: "04",
        title: "Uji Event Tombol A & B pada NeoPixel",
        detail:
          "Event menjalankan instruksi ketika tombol ditekan; on start menyiapkan strip sekali. Uji A, B dan tekan bergantian. Hasil yang diharapkan: warna serta ikon berubah dan nada terdengar.",
      },
    ],
    codeBlocks: [
      {
        label: "Pseudocode / Susunan Blok P00 (Bahan Ajar MakeCode)",
        language: "text",
        code: `on start: set strip = NeoPixel P15, 24 LEDs, RGB
  set brightness 50; clear; show
on button A pressed: show color red; show icon Heart
  play tone (pilih nada pendek pada Music)
on button B pressed: show color blue; show icon Happy
  play tone (pilih nada berbeda)`,
        explanation:
          "Jika LED tidak berubah, periksa pin/format (P15, 24 LED, RGB/GRB), daya dan blok show; jika suara gagal, periksa volume/speaker. Tantangan: tambah A+B untuk mematikan LED.",
      },
    ],
    assets: [
      {
        id: "P00_SS_01",
        src: "/assets/iot-microbit/P00_SS_01_MakeCode_Home.png",
        alt: "Halaman awal MakeCode",
        caption: "P00_SS_01 — Halaman awal MakeCode (Screenshot asli; Mask permanen / crop).",
        kind: "Screenshot asli",
      },
      {
        id: "P00_SS_02",
        src: "/assets/iot-microbit/P00_SS_02_New_Project.png",
        alt: "Dialog membuat proyek",
        caption: "P00_SS_02 — Dialog membuat proyek (Screenshot asli; Mask permanen / crop).",
        kind: "Screenshot asli",
      },
      {
        id: "P00_SS_03",
        src: "/assets/iot-microbit/P00_SS_03_Editor_Awal.png",
        alt: "Editor blok dan simulator awal",
        caption:
          "P00_SS_03 — Editor blok dan simulator awal (Screenshot asli; Mask permanen / crop).",
        kind: "Screenshot asli",
      },
      {
        id: "P00_VF_04",
        src: "/assets/iot-microbit/P00_VF_04_Blok_Overview.png",
        alt: "Editor dengan event tombol A dan B",
        caption:
          "P00_VF_04 — Editor dengan event tombol A dan B (Frame video asli; Mask area bawah layar; timestamp target: 22.0 s (target seek)).",
        kind: "Frame video asli",
      },
      {
        id: "P00_VF_01",
        src: "/assets/iot-microbit/P00_VF_01_Blok_Tombol.png",
        alt: "Blok event tombol dan output",
        caption:
          "P00_VF_01 — Blok event tombol dan output (Frame video asli; Mask area bawah layar; timestamp target: 1.0 s (target seek)).",
        kind: "Frame video asli",
      },
      {
        id: "P00_VF_02",
        src: "/assets/iot-microbit/P00_VF_02_LED_Merah.png",
        alt: "LED ring merah menyala; tangan peserta terlihat",
        caption:
          "P00_VF_02 — LED ring merah menyala; tangan peserta terlihat (Frame video asli; Frame asli; tanpa audio; timestamp target: 7.5 s (target seek)).",
        kind: "Frame video asli",
      },
    ],
    sourcePage: "Master Knowledge Base v1.0, hlm. 8–9",
  },
  {
    id: "P01",
    stage: "Explore",
    category: "Smart Robotics",
    title: "P01 — Line Following Robot",
    statusLabel: "Berhasil menurut pengguna; tidak ada dokumentasi khusus.",
    statusTone: "confirmed",
    validationTag: "User confirmed",
    evidenceBoundary:
      "Berhasil menurut pengguna; tidak ada foto/video khusus hasil tracking; blok asli belum lengkap. Rujukan [R4] dan salinan panduan [R6].",
    goal: "Sensor garis, logika kondisi dan koreksi motor.",
    tools: "micro:bit V2, Tiny:bit, baterai, arena garis, MakeCode + Tiny-bitLib",
    sdSmpApplication: "SD demonstrasi (robot mengikuti garis); SMP tabel kondisi sensor dan optimasi.",
    createChallenge: "Uji lintasan dan kecepatan. Jangan mengasumsikan nilai sensor.",
    heroAsset: {
      id: "P01_DG_01",
      src: "/assets/iot-microbit/P01_DG_01_Tracking.png",
      alt: "Line following - Logika umum; parameter asli Yahboom belum diperiksa lengkap.",
      caption:
        "P01_DG_01 — Line following - Logika umum; parameter asli Yahboom belum diperiksa lengkap. (Diagram baru; Ilustrasi konseptual, tidak berskala).",
      kind: "Diagram baru",
    },
    overviewSummary:
      "Sensor inframerah membedakan pantulan permukaan terang dan gelap. Dua sensor membaca posisi relatif jalur; program menyesuaikan motor. Permukaan matte, cahaya stabil dan lebar jalur yang sesuai membantu pembacaan.",
    steps: [
      {
        stepNum: "01",
        title: "Siapkan arena",
        detail:
          "Buat jalur hitam di atas permukaan terang, gunakan ruang dalam ruangan untuk mengurangi gangguan cahaya.",
      },
      {
        stepNum: "02",
        title: "Buka contoh resmi",
        detail:
          "Buka Yahboom 6.7 Tracking, unduh Tracking.hex bila tersedia; impor ke MakeCode. Tambahkan Tiny-bitLib jika menyusun ulang.",
      },
      {
        stepNum: "03",
        title: "Cari blok",
        detail:
          "Gunakan Line_Sensor, CarCtrlSpeed/CarCtrlSpeed2, Logic dan forever. Periksa kondisi sensor pada jalur nyata sebelum menentukan gerakan.",
      },
      {
        stepNum: "04",
        title: "Uji",
        detail:
          "Transfer HEX dan letakkan robot di lintasan. Uji dengan kecepatan rendah, amati koreksi dan kondisi jalur hilang.",
      },
    ],
    codeBlocks: [
      {
        label: "Algoritma Konseptual P01 (Bukan Salinan Kode Pelatihan)",
        language: "text",
        code: `on start: show icon Heart (sesuai hasil panduan)
forever:
  baca sensor kiri dan kanan
  jika posisi jalur sesuai pusat: maju
  jika jalur menyimpang ke kiri: koreksi kiri
  jika jalur menyimpang ke kanan: koreksi kanan
  jika jalur hilang / keadaan ambigu: berhenti (usulan aman)`,
        explanation:
          "Panduan resmi versi salinan mengonfirmasi tujuan tracking dan ikon hati. Kombinasi blok, nilai motor dan kondisi persis belum dapat diperiksa.",
      },
    ],
    analysisTable: {
      col1Header: "Pengujian",
      col2Header: "Catatan / Kriteria",
      rows: [
        [
          "Sensor kiri/kanan di hitam & putih",
          "Catat kondisi masing-masing di MakeCode; jangan mengasumsikan 0/1.",
        ],
        ["Lintasan lurus", "Robot tetap di sekitar jalur, bukan sekadar maju."],
        ["Tikungan", "Koreksi menuju jalur, tidak terus menjauh."],
        ["Jalur hilang", "Amati perilaku asli; versi pengembangan berhenti."],
        ["Perbaikan", "Ubah satu parameter kecepatan setiap uji; catat efek."],
      ],
    },
    extraNotes: [
      {
        title: "Mengapa robot bergerak zig-zag?",
        body: "Dua sensor memberi informasi diskret, sehingga koreksi dapat melampaui pusat jalur dan berulang ke arah sebaliknya. Kecepatan, jarak sensor ke lantai, kontras dan radius tikungan memengaruhi kestabilan. Tidak berarti program pasti rusak. Untuk SMP, minta siswa membandingkan dua setelan dan menjelaskan perubahan.",
      },
    ],
    assets: [
      {
        id: "P01_DG_01",
        src: "/assets/iot-microbit/P01_DG_01_Tracking.png",
        alt: "Line following - Logika umum; parameter asli Yahboom belum diperiksa lengkap.",
        caption:
          "P01_DG_01 — Line following - Logika umum; parameter asli Yahboom belum diperiksa lengkap. (Diagram baru; Ilustrasi konseptual, tidak berskala).",
        kind: "Diagram baru",
      },
    ],
    sourcePage: "Master Knowledge Base v1.0, hlm. 10–11",
  },
  {
    id: "P02",
    stage: "Explore",
    category: "Smart Robotics",
    title: "P02 — Ultrasonic Obstacle Avoidance",
    statusLabel: "Berhasil menurut pengguna; parameter dari salinan panduan.",
    statusTone: "confirmed",
    validationTag: "User confirmed",
    evidenceBoundary:
      "Berhasil berdasarkan pengguna; parameter dari salinan panduan [R7]; tidak ada rekaman pribadi. Rujukan [R5].",
    goal: "Jarak, ambang, percabangan dan navigasi otomatis.",
    tools: "micro:bit V2, Tiny:bit, baterai, rintangan, MakeCode + Tiny-bitLib",
    sdSmpApplication: "SD mengenal jarak; SMP ambang, pengukuran, dan kondisi percabangan.",
    createChallenge: "Uji variasi jarak (bandingkan ambang 15 cm dengan 20 cm) dan kondisi pembacaan tidak valid.",
    heroAsset: {
      id: "P02_DG_01",
      src: "/assets/iot-microbit/P02_DG_01_Obstacle.png",
      alt: "Obstacle avoidance - Logika umum navigasi dengan sensor ultrasonik.",
      caption:
        "P02_DG_01 — Obstacle avoidance - Logika umum navigasi dengan sensor ultrasonik. (Diagram baru; Ilustrasi konseptual, tidak berskala).",
      kind: "Diagram baru",
    },
    overviewSummary:
      "Sensor ultrasonik memanfaatkan pantulan suara. Jarak = kecepatan suara × waktu bolak-balik / 2. Jika objek terlalu dekat, robot mengubah arah. Gunakan benda datar yang cukup besar dan hindari tepi meja.",
    steps: [
      {
        stepNum: "01",
        title: "Siapkan",
        detail: "Pasang micro:bit pada Tiny:bit, periksa baterai dan sensor depan.",
      },
      {
        stepNum: "02",
        title: "Impor",
        detail:
          "Buka Yahboom 6.3 dan unduh Ultrasonic-obstacle-avoidance.hex atau susun blok Tiny-bitLib.",
      },
      {
        stepNum: "03",
        title: "Program",
        detail:
          "Baca jarak ke variabel distance; bandingkan dengan ambang 15 cm pada salinan panduan. Gerakkan motor sesuai hasil.",
      },
      {
        stepNum: "04",
        title: "Uji",
        detail:
          "Mulai di lantai kosong, kemudian letakkan rintangan. Catat jarak saat robot menghindar, ulangi dengan posisi berbeda.",
      },
    ],
    codeBlocks: [
      {
        label: "Rekonstruksi Referensi Panduan 6.3 [R7]",
        language: "text",
        code: `forever:
  set distance = ultrasonic return distance (cm)
  if distance < 15 then:
      CarCtrlSpeed Back, speed 80
      pause 200 ms
      CarCtrlSpeed SpinRight, speed 100
      pause 200 ms
  else:
      CarCtrlSpeed Run, speed 80`,
        explanation:
          "Parameter di atas terbaca pada salinan panduan 6.3; gambar blok asli situs tidak berhasil dibuka. Nilai speed adalah satuan parameter library, bukan cm/detik.",
      },
    ],
    analysisTable: {
      col1Header: "Blok",
      col2Header: "Alasan",
      rows: [
        ["Set distance", "Menyimpan satu hasil baca untuk satu keputusan."],
        ["If < 15", "Memisahkan kondisi dekat dan jalur relatif aman."],
        ["Back 80, pause 200", "Memberi jarak sebelum robot berputar."],
        ["SpinRight 100, pause 200", "Mengubah arah secara sementara."],
        ["Run 80", "Maju jika kondisi dekat tidak terpenuhi."],
        ["Forever", "Mengulang pembacaan dan keputusan."],
      ],
    },
    extraNotes: [
      {
        title: "Uji batas dan pengembangan",
        body: "Di bawah 15 cm program memilih menghindar; pada 15 cm atau lebih memilih maju jika pembacaan valid. Nilai 0, timeout atau data tidak valid perlu diuji; pada versi pengembangan, hentikan motor ketika pembacaan tidak dapat dipercaya. Periksa bentuk objek, koneksi dan kondisi baterai bila robot tidak bereaksi.",
      },
    ],
    assets: [
      {
        id: "P02_DG_01",
        src: "/assets/iot-microbit/P02_DG_01_Obstacle.png",
        alt: "Obstacle avoidance - Logika umum navigasi dengan sensor ultrasonik.",
        caption:
          "P02_DG_01 — Obstacle avoidance - Logika umum navigasi dengan sensor ultrasonik. (Diagram baru; Ilustrasi konseptual, tidak berskala).",
        kind: "Diagram baru",
      },
    ],
    sourcePage: "Master Knowledge Base v1.0, hlm. 12–13",
  },
  {
    id: "P03",
    stage: "Explore",
    category: "Smart Robotics",
    title: "P03 — Smartphone Controlled Robot",
    statusLabel: "Pergerakan terdokumentasi; tidak semua fitur teruji.",
    statusTone: "observed",
    validationTag: "Observed",
    evidenceBoundary:
      "Robot berpindah posisi pada video (P03_VF_01 & P03_VF_02); tidak semua fitur aplikasi Mbit teruji ulang.",
    goal: "Bluetooth, perintah smartphone dan gerakan robot.",
    tools: "micro:bit V2, Tiny:bit, baterai, smartphone, Mbit, HEX resmi",
    sdSmpApplication: "SD kendali robot bergiliran; SMP komunikasi nirkabel dan pengujian.",
    createChallenge: "Permainan navigasi dengan berhenti aman.",
    heroAsset: {
      id: "P03_SS_30",
      src: "/assets/iot-microbit/P03_SS_30_Aplikasi_Mbit.png",
      alt: "Antarmuka Mbit: kontrol arah, musik dan informasi sensor",
      caption:
        "P03_SS_30 — Antarmuka Mbit: kontrol arah, musik dan informasi sensor (Screenshot asli; Konversi PNG; metadata dihapus).",
      kind: "Screenshot asli",
    },
    overviewSummary:
      "Aplikasi Mbit mengirim perintah melalui Bluetooth ke micro:bit. Robot menerima data, menafsirkan perintah dan mengatur aktuator. Ini komunikasi lokal, bukan Blynk atau IoT internet. Antarmuka pada screenshot memuat arah, speed, musik, lampu dan indikator sensor.",
    steps: [
      {
        stepNum: "01",
        title: "Instal",
        detail:
          "Gunakan tautan resmi Yahboom untuk versi Android/iOS aplikasi Mbit yang kompatibel.",
      },
      {
        stepNum: "02",
        title: "Program",
        detail:
          "Transfer HEX Bluetooth resmi yang cocok dengan micro:bit dan Tiny:bit.",
      },
      {
        stepNum: "03",
        title: "Hubungkan",
        detail:
          "Nyalakan robot, aktifkan Bluetooth, ikuti prosedur koneksi/pairing aplikasi sesuai panduan.",
      },
    ],
    codeBlocks: [
      {
        label: "Logika Konseptual Firmware P03 (Bukan Kode Asli)",
        language: "text",
        code: `Logika konseptual firmware (bukan kode asli):
  saat menerima perintah Bluetooth:
    tentukan arah / mode / nilai kecepatan
    jalankan aksi motor atau keluaran yang sesuai
  jika perintah berhenti: hentikan motor
  jika koneksi hilang: hentikan motor (usulan pengamanan)`,
        explanation:
          "Jika tidak muncul di aplikasi, cek izin Bluetooth/nearby devices, firmware yang cocok, daya dan jarak. Jangan menganggap koneksi berhasil hanya karena perangkat terdeteksi.",
      },
    ],
    analysisTable: {
      col1Header: "Uji",
      col2Header: "Kriteria yang Diharapkan",
      rows: [
        ["Maju / mundur", "Motor menggerakkan robot sesuai arah."],
        ["Kiri / kanan", "Arah sesuai tombol; uji di lantai kosong."],
        ["Speed", "Perubahan kecepatan tanpa gerak tak terkendali."],
        ["Stop", "Robot berhenti ketika diperintahkan."],
        ["Putus koneksi", "Periksa perilaku firmware; utamakan berhenti aman."],
      ],
    },
    assets: [
      {
        id: "P03_DG_01",
        src: "/assets/iot-microbit/P03_DG_01_Bluetooth.png",
        alt: "Smartphone control - Komunikasi lokal, bukan IoT berbasis internet.",
        caption:
          "P03_DG_01 — Smartphone control - Komunikasi lokal, bukan IoT berbasis internet. (Diagram baru; Ilustrasi konseptual, tidak berskala).",
        kind: "Diagram baru",
      },
      {
        id: "P03_SS_29",
        src: "/assets/iot-microbit/P03_SS_29_Panduan_QR.png",
        alt: "Panduan Yahboom untuk aplikasi dan transfer kode; QR ditutup karena tautan belum diuji ulang.",
        caption:
          "P03_SS_29 — Panduan Yahboom untuk aplikasi dan transfer kode; QR ditutup karena tautan belum diuji ulang. (Screenshot asli; Mask permanen / crop).",
        kind: "Screenshot asli",
      },
      {
        id: "P03_SS_30",
        src: "/assets/iot-microbit/P03_SS_30_Aplikasi_Mbit.png",
        alt: "Antarmuka Mbit: kontrol arah, musik dan informasi sensor",
        caption:
          "P03_SS_30 — Antarmuka Mbit: kontrol arah, musik dan informasi sensor (Screenshot asli; Konversi PNG; metadata dihapus).",
        kind: "Screenshot asli",
      },
      {
        id: "P03_VF_01",
        src: "/assets/iot-microbit/P03_VF_01_Robot_Lantai_A.png",
        alt: "Robot berada pada posisi awal yang terlihat",
        caption:
          "P03_VF_01 — Robot berada pada posisi awal yang terlihat (Frame video asli; Crop area lantai (privasi); timestamp target: 1.0 s (target seek)).",
        kind: "Frame video asli",
      },
      {
        id: "P03_VF_02",
        src: "/assets/iot-microbit/P03_VF_02_Robot_Lantai_B.png",
        alt: "Posisi robot berbeda pada cuplikan berikutnya",
        caption:
          "P03_VF_02 — Posisi robot berbeda pada cuplikan berikutnya (Frame video asli; Crop area lantai (privasi); timestamp target: 4.5 s (target seek)).",
        kind: "Frame video asli",
      },
    ],
    sourcePage: "Master Knowledge Base v1.0, hlm. 14–15",
  },
  {
    id: "P04",
    stage: "Explore",
    category: "Smart Lighting",
    title: "P04 — Smart LED Light Controller",
    statusLabel: "LED berwarna terdokumentasi; otomasi lokal, bukan IoT internet.",
    statusTone: "observed",
    validationTag: "Observed",
    evidenceBoundary:
      "LED ring menyala warna-warni pada video; program lokal, tidak terlihat kontrol internet atau integrasi Blynk.",
    goal: "NeoPixel, buffer, warna, rotasi dan timing.",
    tools: "micro:bit V2, HoLa:BIT, 24 NeoPixel P15, MakeCode + NeoPixel",
    sdSmpApplication: "SD pola warna kreatif; SMP buffer, rotasi dan timing.",
    createChallenge: "Ubah pola warna (dua warna) atau atur arah rotasi memakai tombol.",
    heroAsset: {
      id: "P04_VF_03",
      src: "/assets/iot-microbit/P04_VF_03_LED_Rainbow.png",
      alt: "LED ring menampilkan beberapa warna",
      caption:
        "P04_VF_03 — LED ring menampilkan beberapa warna (Frame video asli; Frame asli; tanpa audio; timestamp target: 8.6 s (target seek)).",
      kind: "Frame video asli",
    },
    overviewSummary:
      "Proyek ini mengendalikan cincin 24 LED RGB addressable (NeoPixel) pada pin P15 menggunakan mode RGB (urutan GRB). Pola warna pelangi (1–360) digeser secara berulang di dalam buffer menggunakan rotate(1) dan dikirim ke LED fisik dengan show().",
    steps: [
      {
        stepNum: "01",
        title: "Siapkan",
        detail: "Pasang micro:bit pada HoLa:BIT dan gunakan catu daya sesuai board.",
      },
      {
        stepNum: "02",
        title: "Extension",
        detail: "Tambahkan extension NeoPixel di MakeCode; buat variabel strip.",
      },
      {
        stepNum: "03",
        title: "On start",
        detail:
          "Buat strip pada P15 dengan 24 LED mode RGB (GRB); jalankan show rainbow 1–360.",
      },
      {
        stepNum: "04",
        title: "Forever",
        detail:
          "Rotate pixels by 1, lalu show; transfer program dan amati pergeseran warna pada cincin LED.",
      },
    ],
    codeBlocks: [
      {
        label: "JavaScript MakeCode P04 — Rekonstruksi dari Video & API [R8]",
        language: "javascript",
        code: `let strip = neopixel.create(
    DigitalPin.P15, 24, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
})`,
        explanation:
          "Rekonstruksi dari video dan API [R8]; belum dikompilasi ulang. Jika animasi terlalu cepat, tambah pause 100 ms sebagai eksperimen. Batasi brightness sesuai daya board.",
      },
    ],
    analysisTable: {
      col1Header: "Blok",
      col2Header: "Alasan",
      rows: [
        ["Create strip", "Memilih jalur data (P15), jumlah LED (24), format warna (RGB/GRB)."],
        ["Show rainbow", "Membentuk pola warna awal (1–360)."],
        ["Rotate", "Mengubah urutan nilai piksel dalam buffer."],
        ["Show", "Mengirim buffer warna ke LED fisik."],
        ["Forever", "Mengulang animasi secara terus-menerus."],
      ],
    },
    assets: [
      {
        id: "P04_VF_01",
        src: "/assets/iot-microbit/P04_VF_01_Blok_Rainbow.png",
        alt: "Blok animasi NeoPixel pada layar",
        caption:
          "P04_VF_01 — Blok animasi NeoPixel pada layar (Frame video asli; Mask area bawah layar; timestamp target: 1.0 s (target seek)).",
        kind: "Frame video asli",
      },
      {
        id: "P04_VF_02",
        src: "/assets/iot-microbit/P04_VF_02_Simulator.png",
        alt: "Simulator dan editor MakeCode",
        caption:
          "P04_VF_02 — Simulator dan editor MakeCode (Frame video asli; Mask area bawah layar; timestamp target: 4.3 s (target seek)).",
        kind: "Frame video asli",
      },
      {
        id: "P04_VF_03",
        src: "/assets/iot-microbit/P04_VF_03_LED_Rainbow.png",
        alt: "LED ring menampilkan beberapa warna",
        caption:
          "P04_VF_03 — LED ring menampilkan beberapa warna (Frame video asli; Frame asli; tanpa audio; timestamp target: 8.6 s (target seek)).",
        kind: "Frame video asli",
      },
      {
        id: "P04_DG_01",
        src: "/assets/iot-microbit/P04_DG_01_NeoPixel.png",
        alt: "Animasi RGB NeoPixel - Rekonstruksi logika berdasarkan video praktik.",
        caption:
          "P04_DG_01 — Animasi RGB NeoPixel - Rekonstruksi logika berdasarkan video praktik. (Diagram baru; Ilustrasi konseptual, tidak berskala).",
        kind: "Diagram baru",
      },
    ],
    sourcePage: "Master Knowledge Base v1.0, hlm. 16–17",
  },
  {
    id: "P05",
    stage: "Create",
    category: "Internet of Things",
    title: "P05 — IoT Smart Switch with Blynk",
    statusLabel: "ON/OFF berhasil menurut pengguna; tidak ada uji latensi/reliabilitas.",
    statusTone: "confirmed",
    validationTag: "User confirmed",
    evidenceBoundary:
      "User confirmed: LED menyala dan mati melalui Blynk. Foto LED menyala (P05_PH_33) dan screenshot dashboard tersedia. Tidak ada pengukuran latensi/reliabilitas.",
    goal: "Kontrol jarak jauh, virtual pin V1, polling, Wi-Fi (UART ESP8266) dan aktuator NeoPixel.",
    tools: "micro:bit V2, HoLa:BIT, ESP8266, NeoPixel, USB, Wi-Fi 2,4 GHz, MakeCode, Blynk",
    sdSmpApplication: "SD demo lampu pintar bersama guru; SMP konfigurasi virtual pin, request jaringan, dan diagnosis kondisi gagal.",
    createChallenge: "Tambah kendali warna atau brightness melalui datastream lain setelah fungsi dasar lulus.",
    heroAsset: {
      id: "P05_PH_33",
      src: "/assets/iot-microbit/P05_PH_33_Hasil_LED.png",
      alt: "Foto LED ring menyala; respons saklar dikonfirmasi pengguna",
      caption:
        "P05_PH_33 — Foto LED ring menyala; respons saklar dikonfirmasi pengguna (Foto asli; Konversi PNG; metadata dihapus).",
      kind: "Foto asli",
    },
    overviewSummary:
      "Smart Switch memanfaatkan nilai logis V1. Widget mengubah nilai 0/1 di Blynk Cloud; micro:bit membaca melalui ESP8266 (UART TX P16, RX P2, 115200 baud) dan mengatur 24 NeoPixel di P15. Ini prototipe LED tegangan rendah, bukan saklar listrik rumah. Tidak memerlukan relay atau sambungan ke listrik AC.",
    steps: [
      {
        stepNum: "01",
        title: "Blynk: Template & Datastream V1",
        detail:
          "Masuk Blynk.Console → buat template baru (Wi-Fi). Buka Datastreams → New Datastream → Virtual Pin: Name/alias 'saklar / Saklar', Virtual pin V1, Data type Integer, Min 0, Max 1, Default 0.",
      },
      {
        stepNum: "02",
        title: "Dashboard Widget Switch & Device Auth Token",
        detail:
          "Pada Web Dashboard pilih widget Switch, hubungkan ke datastream V1 dan simpan. Buat New Device dari template tersebut, lalu salin Auth Token secara privat hanya untuk proyek latihan lokal.",
      },
      {
        stepNum: "03",
        title: "MakeCode: Extension NeoPixel & ESP8266 WiFi",
        detail:
          "Tambahkan extension NeoPixel dan ESP8266 WiFi (Cytron pxt-esp8266 v2.0.1). Inisialisasi NeoPixel di P15 (24 LED, RGB) dan ESP8266 di TX P16, RX P2, baud rate 115200.",
      },
      {
        stepNum: "04",
        title: "Loop Pembacaan Blynk V1 & Pengujian",
        detail:
          "Di dalam forever, baca nilai V1 dari Blynk. Jika nilai = 1 nyalakan NeoPixel warna putih; jika 0 matikan (clear & show). Lakukan pengujian bertahap dari LED lokal, init ESP8266, Wi-Fi 2,4 GHz, hingga uji OFF → ON → OFF.",
      },
    ],
    codeBlocks: [
      {
        label: "Rekonstruksi Ringkas Praktik P05 (Kredensial Dihilangkan)",
        language: "text",
        code: `on start:
  set strip = NeoPixel P15, 24 LEDs, RGB
  strip set brightness 50; clear; show
  initialize ESP8266: TX P16, RX P2, 115200
  if ESP8266 initialized: connect WiFi (SSID, password)
  tampilkan indikator status koneksi
forever:
  if WiFi connected:
    set saklar = read Blynk V1 as number
    if saklar = 1: show color white
    else: clear; show
  pause 500 ms`,
        explanation:
          "Blok read Blynk menghasilkan teks; konversi angka untuk membandingkan 1. On start memulai LED dalam keadaan mati. Pause 500 ms adalah interval program asli, bukan jaminan interval jaringan.",
      },
      {
        label: "Versi Pengembangan yang Lebih Aman (Referensi API Cytron [R12] — Belum Diuji Fisik)",
        language: "javascript",
        code: `let strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
strip.setBrightness(50)
strip.clear()
strip.show()
let ssid = "NAMA_WIFI"
let password = "PASSWORD_WIFI"
let token = "DEVICE_AUTH_TOKEN"
esp8266.init(SerialPin.P16, SerialPin.P2, BaudRate.BaudRate115200)
basic.forever(function () {
    let on = false
    if (esp8266.isESP8266Initialized()) {
        if (!esp8266.isWifiConnected()) {
            esp8266.connectWiFi(ssid, password)
        }
        if (esp8266.isWifiConnected()) {
            let value = esp8266.readBlynk(token, "V1")
            if (esp8266.isBlynkUpdated()) {
                on = (value == "1")
            }
        }
    }
    if (on) { strip.showColor(neopixel.colors(NeoPixelColors.White)) }
    else { strip.clear(); strip.show() }
    basic.pause(3000)
})`,
        explanation:
          "Periksa hasil API (isBlynkUpdated) sebelum menerima perintah, LED mati ketika operasi gagal, interval 3 detik sebagai contoh. Extension versi yang diperiksa menggunakan HTTP port 80 [R13], bukan transport terenkripsi.",
      },
    ],
    analysisTable: {
      col1Header: "Langkah Uji",
      col2Header: "Kriteria Lulus / Diagnosis",
      rows: [
        ["1. LED lokal", "Jalankan white/clear tanpa Wi-Fi. Jika gagal, cek P15 dan daya."],
        [
          "2. Init ESP8266",
          "Indikator init sukses; cek pin UART (TX P16/RX P2), baud 115200, daya dan firmware AT.",
        ],
        ["3. Wi-Fi", "Periksa SSID/password dan jaringan 2,4 GHz; hindari portal login."],
        ["4. Blynk V1", "Switch mengubah 0/1 pada datastream device yang tepat."],
        [
          "5. Read Blynk",
          "Periksa updated; jika gagal cek token, host API, firmware, koneksi.",
        ],
        ["6. Output", "Uji OFF → ON → OFF beberapa kali; catat respons."],
        ["7. Putus koneksi", "Periksa versi aman: LED mati ketika kegagalan terdeteksi."],
      ],
    },
    assets: [
      {
        id: "P05_DG_01",
        src: "/assets/iot-microbit/P05_DG_01_Smart_Switch.png",
        alt: "IoT Smart Switch - Alur perintah Blynk ke LED ring.",
        caption:
          "P05_DG_01 — IoT Smart Switch - Alur perintah Blynk ke LED ring. (Diagram baru; Ilustrasi konseptual, tidak berskala).",
        kind: "Diagram baru",
      },
      {
        id: "P05_PH_33",
        src: "/assets/iot-microbit/P05_PH_33_Hasil_LED.png",
        alt: "Foto LED ring menyala; respons saklar dikonfirmasi pengguna",
        caption:
          "P05_PH_33 — Foto LED ring menyala; respons saklar dikonfirmasi pengguna (Foto asli; Konversi PNG; metadata dihapus).",
        kind: "Foto asli",
      },
      {
        id: "P05_SS_21",
        src: "/assets/iot-microbit/P05_SS_21_New_Template.png",
        alt: "Tombol New Template, anotasi asli",
        caption:
          "P05_SS_21 — Tombol New Template, anotasi asli (Screenshot asli; Mask permanen / crop).",
        kind: "Screenshot asli",
      },
      {
        id: "P05_SS_08",
        src: "/assets/iot-microbit/P05_SS_08_New_Datastream.png",
        alt: "Dialog datastream baru",
        caption:
          "P05_SS_08 — Dialog datastream baru (Screenshot asli; Mask permanen / crop).",
        kind: "Screenshot asli",
      },
      {
        id: "P05_SS_15",
        src: "/assets/iot-microbit/P05_SS_15_Datastream_Saklar.png",
        alt: "Konfigurasi datastream saklar",
        caption:
          "P05_SS_15 — Konfigurasi datastream saklar (Screenshot asli; Mask permanen / crop).",
        kind: "Screenshot asli",
      },
      {
        id: "P05_SS_09",
        src: "/assets/iot-microbit/P05_SS_09_Widget_Box.png",
        alt: "Pemilihan widget Switch",
        caption:
          "P05_SS_09 — Pemilihan widget Switch (Screenshot asli; Mask permanen / crop).",
        kind: "Screenshot asli",
      },
      {
        id: "P05_SS_25",
        src: "/assets/iot-microbit/P05_SS_25_Save_Dashboard.png",
        alt: "Tombol Save dashboard, anotasi asli",
        caption:
          "P05_SS_25 — Tombol Save dashboard, anotasi asli (Screenshot asli; Mask permanen / crop).",
        kind: "Screenshot asli",
      },
      {
        id: "P05_SS_26",
        src: "/assets/iot-microbit/P05_SS_26_New_Device_Anotasi.png",
        alt: "Tombol New Device, identitas disamarkan",
        caption:
          "P05_SS_26 — Tombol New Device, identitas disamarkan (Screenshot asli; Mask permanen / crop).",
        kind: "Screenshot asli",
      },
      {
        id: "P05_SS_28",
        src: "/assets/iot-microbit/P05_SS_28_Auth_Token_Lokasi.png",
        alt: "Lokasi kolom Auth Token; nilai disamarkan",
        caption:
          "P05_SS_28 — Lokasi kolom Auth Token; nilai disamarkan (Screenshot asli; Mask permanen / crop).",
        kind: "Screenshot asli",
      },
      {
        id: "P05_SS_23",
        src: "/assets/iot-microbit/P05_SS_23_Extension_NeoPixel.png",
        alt: "Pencarian extension NeoPixel",
        caption:
          "P05_SS_23 — Pencarian extension NeoPixel (Screenshot asli; Konversi PNG; metadata dihapus).",
        kind: "Screenshot asli",
      },
      {
        id: "P05_SS_24",
        src: "/assets/iot-microbit/P05_SS_24_Extension_ESP8266.png",
        alt: "Pencarian extension ESP8266",
        caption:
          "P05_SS_24 — Pencarian extension ESP8266 (Screenshot asli; Konversi PNG; metadata dihapus).",
        kind: "Screenshot asli",
      },
      {
        id: "P05_SS_17",
        src: "/assets/iot-microbit/P05_SS_17_Loop_Saklar.png",
        alt: "Loop pembacaan Blynk dan kondisi LED; token ditutup",
        caption:
          "P05_SS_17 — Loop pembacaan Blynk dan kondisi LED; token ditutup (Screenshot asli; Mask permanen / crop).",
        kind: "Screenshot asli",
      },
      {
        id: "P05_SS_27",
        src: "/assets/iot-microbit/P05_SS_27_Read_Blynk.png",
        alt: "Detail blok read Blynk; token disamarkan",
        caption:
          "P05_SS_27 — Detail blok read Blynk; token disamarkan (Screenshot asli; Mask permanen / crop).",
        kind: "Screenshot asli",
      },
      {
        id: "P05_SS_18",
        src: "/assets/iot-microbit/P05_SS_18_Dashboard_Device.png",
        alt: "Dashboard device dengan switch aktif; bukan bukti koneksi sendiri",
        caption:
          "P05_SS_18 — Dashboard device dengan switch aktif; bukan bukti koneksi sendiri (Screenshot asli; Mask permanen / crop).",
        kind: "Screenshot asli",
      },
    ],
    sourcePage: "Master Knowledge Base v1.0, hlm. 18–23",
  },
  {
    id: "P06",
    stage: "Create",
    category: "Internet of Things",
    title: "P06 — IoT Temperature Monitoring",
    statusLabel: "Belum berhasil; rancangan perbaikan belum dikompilasi atau diuji fisik.",
    statusTone: "untested",
    validationTag: "Analysis / recommendation (Belum berhasil saat pelatihan)",
    evidenceBoundary:
      "Belum berhasil dalam pelatihan. Panduan perbaikan berdasarkan konfirmasi bahwa sensor suhu internal micro:bit yang digunakan. Tidak ada DHT22, kelembapan, kipas atau kontrol suhu. Belum diuji fisik.",
    goal: "Sensor internal micro:bit, data suhu, virtual pin V2, Wi-Fi dan dashboard monitoring.",
    tools: "micro:bit V2, HoLa:BIT, ESP8266, USB, Wi-Fi 2,4 GHz, MakeCode, Blynk; tanpa DHT22",
    sdSmpApplication: "SD amati perubahan suhu; SMP literasi data, pengujian bertahap dan perbandingan termometer.",
    createChallenge: "Catat suhu beberapa lokasi dan bandingkan dengan termometer setelah fungsi dasar berhasil.",
    heroAsset: {
      id: "P06_DG_01",
      src: "/assets/iot-microbit/P06_DG_01_Temperature.png",
      alt: "IoT Temperature Monitoring - Rancangan perbaikan; belum diuji pada hardware.",
      caption:
        "P06_DG_01 — IoT Temperature Monitoring - Rancangan perbaikan; belum diuji pada hardware. (Diagram baru; Ilustrasi konseptual, tidak berskala).",
      kind: "Diagram baru",
    },
    overviewSummary:
      "Sensor suhu internal membaca suhu chip prosesor micro:bit sebagai perkiraan suhu sekitar (bukan termometer presisi, dan tidak menggunakan DHT11/DHT22). Pada rancangan perbaikan ini, data suhu dikirim ke Virtual Pin V2 di Blynk menggunakan blok write Blynk setiap 10 detik.",
    steps: [
      {
        stepNum: "01",
        title: "Uji sensor lokal",
        detail:
          "Buat proyek baru: on button A pressed → show number (temperature °C). Download dan tekan A. Pastikan angka terlihat sebelum menguji jaringan.",
      },
      {
        stepNum: "02",
        title: "Konfigurasi Datastream V2 & Widget Gauge",
        detail:
          "Tambahkan Virtual Pin V2 (Name: Temperature / Suhu, Data type: Integer, Min 0, Max 60, Default 0, Unit: °C). Pasang widget Gauge atau Value Display ke V2.",
      },
      {
        stepNum: "03",
        title: "Tes API dengan Angka Tetap (25)",
        detail:
          "Kirim angka tetap 25 menggunakan blok write Blynk (token, V2, \"25\"); periksa status updated dan nilai pada dashboard.",
      },
      {
        stepNum: "04",
        title: "Kirim Pembacaan Sensor Internal",
        detail:
          "Jika angka tetap 25 berhasil muncul di dashboard, ganti nilai tetap dengan pembacaan input.temperature() dan jeda 10.000 ms (10 detik).",
      },
    ],
    codeBlocks: [
      {
        label: "Rancangan Susunan Blok MakeCode P06 (Rekomendasi Phase 02)",
        language: "text",
        code: `on start:
  initialize ESP8266: TX P16, RX P2, 115200
  if ESP8266 initialized: connect WiFi (SSID, password)
forever:
  set suhu = temperature (°C)
  if ESP8266 initialized:
    if not WiFi connected: connect WiFi
    if WiFi connected:
      write Blynk: token, V2, join "" and suhu
      if Blynk updated: show icon Happy
      else: show icon Sad
    else: show icon No
  else: show icon No
  pause 10000 ms`,
        explanation:
          "Rancangan rekomendasi Phase 02; bukan screenshot atau hasil praktik. Jeda 10 detik adalah interval minimum antarsiklus program.",
      },
      {
        label: "Kode JavaScript Referensi P06 (Belum Dikompilasi / Belum Diuji Fisik)",
        language: "javascript",
        code: `let suhu = 0
let token = "DEVICE_AUTH_TOKEN"
let ssid = "NAMA_WIFI"
let password = "PASSWORD_WIFI"
esp8266.init(SerialPin.P16, SerialPin.P2, BaudRate.BaudRate115200)
if (esp8266.isESP8266Initialized()) {
    esp8266.connectWiFi(ssid, password)
} else {
    basic.showIcon(IconNames.No)
}
basic.forever(function () {
    suhu = input.temperature()
    if (esp8266.isESP8266Initialized()) {
        if (!esp8266.isWifiConnected()) {
            esp8266.connectWiFi(ssid, password)
        }
        if (esp8266.isWifiConnected()) {
            esp8266.writeBlynk(token, "V2", "" + suhu)
            if (esp8266.isBlynkUpdated()) {
                basic.showIcon(IconNames.Happy)
            } else {
                basic.showIcon(IconNames.Sad)
            }
        } else { basic.showIcon(IconNames.No) }
    } else { basic.showIcon(IconNames.No) }
    basic.pause(10000)
})`,
        explanation:
          "Ikon Happy berarti extension melaporkan operasi berhasil, bukan bukti tunggal bahwa nilai tampil di widget. Jangan menyatakan proyek berhasil sebelum seluruh lembar uji lulus.",
      },
    ],
    analysisTable: {
      col1Header: "Gejala",
      col2Header: "Pemeriksaan dan Tindakan",
      rows: [
        ["Suhu lokal tidak tampil", "Uji tombol A dan show number; periksa HEX dan daya."],
        ["Init gagal", "Periksa TX P16/RX P2, baud 115200, catu daya dan firmware AT."],
        ["Wi-Fi gagal", "Periksa SSID/password; jaringan 2,4 GHz tanpa portal."],
        [
          "Angka tetap tidak sampai",
          "Periksa token device, V2, integer, koneksi/API dan versi extension.",
        ],
        ["Dashboard tetap 0", "Periksa widget, device, datastream dan waktu update."],
        [
          "Data lama / status offline",
          "Uji operasi API; cek timestamp. Reset/reconnect jika status tersimpan.",
        ],
        [
          "Suhu terlalu tinggi",
          "Jauhkan dari sumber panas; bandingkan termometer setelah stabil.",
        ],
        [
          "Pengiriman berhasil sporadis",
          "Kurangi frekuensi, periksa daya/jaringan, cek respons API.",
        ],
      ],
    },
    assets: [
      {
        id: "P06_DG_01",
        src: "/assets/iot-microbit/P06_DG_01_Temperature.png",
        alt: "IoT Temperature Monitoring - Rancangan perbaikan; belum diuji pada hardware.",
        caption:
          "P06_DG_01 — IoT Temperature Monitoring - Rancangan perbaikan; belum diuji pada hardware. (Diagram baru; Ilustrasi konseptual, tidak berskala).",
        kind: "Diagram baru",
      },
    ],
    sourcePage: "Master Knowledge Base v1.0, hlm. 24–28",
  },
];

const GLOSSARY_ITEMS: [string, string][] = [
  ["GPIO", "Pin input/output fisik."],
  ["Sensor / aktuator", "Pembaca kondisi / penghasil aksi fisik."],
  ["Event / forever", "Pemicu kejadian / perulangan terus-menerus."],
  ["UART / baud rate", "Komunikasi serial / laju simbol (115200 baud pada praktik saklar)."],
  ["ESP8266", "Modul komunikasi Wi-Fi; pada materi memakai firmware AT."],
  ["NeoPixel / GRB", "LED addressable / urutan kanal warna (P15, 24 LED)."],
  ["Datastream / virtual pin", "Saluran nilai cloud / identitas logis V1, V2."],
  ["Polling", "Permintaan data berulang."],
  ["Auth Token", "Kredensial autentikasi device; rahasia (jangan dipublikasikan)."],
  ["Dashboard / widget", "Tampilan informasi / komponen antarmuka (Switch, Gauge, Value Display)."],
  ["API", "Antarmuka pertukaran data antar sistem."],
  ["HEX / extension", "File program / paket blok tambahan di MakeCode."],
];

const REFERENCES_LIST = [
  {
    id: "R1",
    title: "Micro:bit Educational Foundation — features",
    url: "https://microbit.org/get-started/features/",
  },
  {
    id: "R2",
    title: "MakeCode — Temperature",
    url: "https://makecode.microbit.org/reference/input/temperature",
  },
  {
    id: "R3",
    title: "MakeCode editor",
    url: "https://makecode.microbit.org/",
  },
  {
    id: "R4",
    title: "Yahboom — 6.7 Tracking",
    url: "https://www.yahboom.net/study/Tiny_bit/2690/",
  },
  {
    id: "R5",
    title: "Yahboom — 6.3 Ultrasonic obstacle avoidance",
    url: "https://www.yahboom.net/study/Tiny_bit/2686/",
  },
  {
    id: "R6",
    title: "Salinan panduan 6.7 Tracking (pihak ketiga)",
    url: "https://baranyilaszlozsolt.com/pciskola/tinybit/6.07.Tracking.pdf",
  },
  {
    id: "R7",
    title: "Salinan panduan 6.3 Ultrasonic (pihak ketiga)",
    url: "https://baranyilaszlozsolt.com/pciskola/tinybit/6.03.Ultrasonic.obstacle.avoidance.pdf",
  },
  {
    id: "R8",
    title: "Microsoft NeoPixel",
    url: "https://makecode.microbit.org/pkg/microsoft/pxt-neopixel",
  },
  {
    id: "R9",
    title: "Blynk — Device HTTPS API",
    url: "https://docs.blynk.io/en/blynk.cloud/device-https-api",
  },
  {
    id: "R10",
    title: "Blynk — Switch",
    url: "https://docs.blynk.io/en/blynk.apps/widgets-controllers/switch",
  },
  {
    id: "R11",
    title: "Blynk — Value Display",
    url: "https://docs.blynk.io/en/blynk.apps/widgets-displays/value-display",
  },
  {
    id: "R12",
    title: "Cytron ESP8266 extension v2.0.1",
    url: "https://makecode.microbit.org/pkg/CytronTechnologies/pxt-esp8266",
  },
  {
    id: "R13",
    title: "Cytron source code (pxt-esp8266)",
    url: "https://github.com/CytronTechnologies/pxt-esp8266",
  },
  {
    id: "R14",
    title: "Yahboom Tiny-bitLib",
    url: "https://github.com/YahboomTechnology/Tiny-bitLib",
  },
  {
    id: "R15",
    title: "Yahboom Tiny:bit course / app",
    url: "https://www.yahboom.net/study/Tiny_bit",
  },
];

export function IotMicrobitLearningHub({
  onOpenImage,
  initialUnitId = "P05",
}: IotMicrobitLearningHubProps) {
  const [section, setSection] = useState<HubSection>("projects");
  const [selectedUnitId, setSelectedUnitId] = useState<string>(initialUnitId);

  const unitIndex = PROJECT_UNITS.findIndex((u) => u.id === selectedUnitId);
  const activeUnit = PROJECT_UNITS[unitIndex >= 0 ? unitIndex : 5];
  const prevUnit = unitIndex > 0 ? PROJECT_UNITS[unitIndex - 1] : null;
  const nextUnit =
    unitIndex >= 0 && unitIndex < PROJECT_UNITS.length - 1
      ? PROJECT_UNITS[unitIndex + 1]
      : null;

  const statusBadgeClass = (tone: ProjectUnitData["statusTone"]) =>
    tone === "confirmed"
      ? "bg-emerald-100 text-emerald-900 border-emerald-300"
      : tone === "observed"
        ? "bg-sky-100 text-sky-900 border-sky-300"
        : "bg-amber-100 text-amber-900 border-amber-300";

  return (
    <div className="space-y-8">
      {/* ==================== MASTER HEADER BANNER ==================== */}
      <section className="glass-panel overflow-hidden rounded-3xl">
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-sky-900 px-6 py-6 sm:px-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-white/15 border border-white/20 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-sky-200">
                <Sparkles className="h-3.5 w-3.5 text-sky-300" />
                <span>From Smart Robotics to IoT • Learn • Explore • Create</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                Internet of Things dengan micro:bit — Learning Guide v1.0
              </h2>
              <p className="text-xs sm:text-sm text-sky-100/90 max-w-3xl leading-relaxed">
                Panduan pembelajaran terstruktur dari <em>Physical Computing</em> dan{" "}
                <em>Smart Robotics</em> (Yahboom Tiny:bit) hingga sistem{" "}
                <em>Internet of Things</em> berbasis <strong>BBC micro:bit V2</strong>,{" "}
                <strong>HoLa:BIT</strong>, <strong>NeoPixel P15</strong>,{" "}
                <strong>ESP8266 Wi-Fi</strong>, dan <strong>Blynk Cloud</strong>.
              </p>
            </div>

            <div className="flex flex-col items-end gap-1.5">
              <span className="rounded-xl bg-emerald-400/20 border border-emerald-300/40 px-3 py-1.5 text-xs font-extrabold text-emerald-200">
                7 Unit Pembelajaran (P00–P06)
              </span>
              <span className="text-[11px] text-sky-200/80 font-medium">
                34 Aset Visual Terverifikasi • R1–R15
              </span>
            </div>
          </div>

          {/* Interactive Sub-Navigation Pills */}
          <div className="mt-6 flex flex-wrap gap-2 border-t border-white/15 pt-4">
            {[
              { key: "projects", label: "7 Proyek & Tutorial (P00–P06)", icon: Cpu },
              { key: "overview", label: "Pengenalan & Jalur Belajar", icon: BookOpen },
              { key: "fundamentals", label: "Fundamental & Arsitektur IoT", icon: Layers },
              { key: "equipment", label: "Katalog Alat & Pinout", icon: Wrench },
              { key: "benefits", label: "Implementasi SD–SMP & Asesmen", icon: GraduationCap },
              { key: "troubleshooting", label: "Troubleshooting & Uji", icon: ShieldAlert },
              { key: "glossary", label: "Glosarium & Referensi R1–R15", icon: HelpCircle },
            ].map((item) => {
              const Icon = item.icon;
              const active = section === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setSection(item.key as HubSection)}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition cursor-pointer ${
                    active
                      ? "bg-white text-slate-900 shadow-md"
                      : "bg-white/10 text-sky-100 hover:bg-white/20"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ==================== SECTION 1: 7 PROJECTS & TUTORIALS (P00 - P06) ==================== */}
        {section === "projects" && (
          <div className="p-6 sm:p-8 space-y-6">
            {/* Unit Selector Strip (P00 to P06) */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-extrabold uppercase tracking-wider text-blue-800">
                  Pilih Unit Praktik &amp; Tutorial (P00 adalah Latihan Dasar; P01–P06 Proyek Utama)
                </p>
                <span className="text-xs text-slate-500">
                  Klik kartu unit di bawah untuk berpindah proyek
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
                {PROJECT_UNITS.map((u) => {
                  const isSelected = u.id === activeUnit.id;
                  return (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => setSelectedUnitId(u.id)}
                      className={`flex flex-col justify-between rounded-2xl border p-3 text-left transition cursor-pointer ${
                        isSelected
                          ? "border-blue-600 bg-slate-900 text-white shadow-md"
                          : "border-slate-200/90 bg-white/80 text-slate-800 hover:border-sky-400 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span
                          className={`rounded-lg px-2 py-0.5 font-display text-xs font-black ${
                            isSelected
                              ? "bg-sky-400 text-slate-950"
                              : "bg-slate-100 text-slate-800"
                          }`}
                        >
                          {u.id}
                        </span>
                        <span
                          className={`text-[10px] font-bold uppercase ${
                            isSelected ? "text-sky-300" : "text-slate-400"
                          }`}
                        >
                          {u.stage}
                        </span>
                      </div>
                      <p
                        className={`mt-2 text-xs font-bold leading-snug line-clamp-2 ${
                          isSelected ? "text-white" : "text-slate-800"
                        }`}
                      >
                        {u.title.replace(/^P0\d — /, "")}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Project Unit Workspace */}
            <div className="rounded-3xl border border-slate-200/90 bg-white/90 p-6 sm:p-8 shadow-sm space-y-6">
              {/* Top Unit Status Callout & Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-extrabold text-sky-300">
                      Tahap {activeUnit.stage} • {activeUnit.category}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${statusBadgeClass(
                        activeUnit.statusTone
                      )}`}
                    >
                      {activeUnit.statusTone === "untested" ? (
                        <AlertTriangle className="h-3.5 w-3.5" />
                      ) : (
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      )}
                      Status Praktik: {activeUnit.statusLabel}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {activeUnit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {activeUnit.overviewSummary}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs space-y-1 max-w-xs">
                  <p className="font-extrabold uppercase tracking-wider text-slate-500">
                    Status Validasi ({activeUnit.validationTag})
                  </p>
                  <p className="text-slate-700 leading-relaxed">{activeUnit.evidenceBoundary}</p>
                  <p className="text-[11px] text-slate-400 pt-1">{activeUnit.sourcePage}</p>
                </div>
              </div>

              {/* Overview Grid: Hero Asset + 4 Pedagogical Metadata Cards */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-5">
                  <div
                    onClick={() =>
                      onOpenImage?.(activeUnit.heroAsset.src, activeUnit.heroAsset.caption)
                    }
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm cursor-zoom-in"
                  >
                    <div className="relative h-56 sm:h-64 w-full bg-slate-900/5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={activeUnit.heroAsset.src}
                        alt={activeUnit.heroAsset.alt}
                        className="h-full w-full object-contain p-2 group-hover:scale-[1.02] transition duration-300"
                      />
                      <span className="absolute top-3 left-3 rounded-lg bg-slate-900/80 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-sm">
                        {activeUnit.heroAsset.id} • {activeUnit.heroAsset.kind}
                      </span>
                      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-lg bg-slate-900/80 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                        <ZoomIn className="h-3.5 w-3.5" /> Perbesar
                      </span>
                    </div>
                    <p className="border-t border-slate-200/80 bg-white p-3 text-xs text-slate-600 leading-snug">
                      {activeUnit.heroAsset.caption}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-blue-800">
                      Tujuan Pembelajaran
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {activeUnit.goal}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-sky-800">
                      Alat &amp; Software
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {activeUnit.tools}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                      Penerapan SD–SMP
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {activeUnit.sdSmpApplication}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-amber-900">
                      Create — Tantangan Lanjutan
                    </p>
                    <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                      {activeUnit.createChallenge}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Practical Guide */}
              <div className="space-y-3 pt-2">
                <h4 className="font-display text-lg font-extrabold text-slate-900">
                  Langkah-Langkah Praktik ({activeUnit.id})
                </h4>
                <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
                  {activeUnit.steps.map((st) => (
                    <div
                      key={st.stepNum}
                      className="flex items-start gap-3.5 rounded-2xl border border-slate-200/90 bg-slate-50/60 p-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-900 font-display text-xs font-extrabold text-sky-300">
                        {st.stepNum}
                      </span>
                      <div className="space-y-1">
                        <p className="font-display text-sm font-bold text-slate-900">{st.title}</p>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {st.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code / Pseudocode Blocks */}
              {activeUnit.codeBlocks.length > 0 && (
                <div className="space-y-4 pt-2">
                  {activeUnit.codeBlocks.map((cb, idx) => (
                    <div
                      key={idx}
                      className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-slate-100"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 bg-slate-900 px-4 py-2.5">
                        <span className="font-display text-xs font-bold text-sky-300">
                          {cb.label}
                        </span>
                        <span className="rounded-md bg-slate-800 px-2 py-0.5 font-mono text-[10px] text-slate-300">
                          {cb.language === "javascript"
                            ? "MakeCode JavaScript (Bahan Ajar)"
                            : "MakeCode Blocks / Pseudocode"}
                        </span>
                      </div>
                      <pre className="overflow-x-auto p-4 font-mono text-xs sm:text-sm text-emerald-300 leading-relaxed">
                        <code>{cb.code}</code>
                      </pre>
                      {cb.explanation && (
                        <div className="border-t border-slate-800 bg-slate-900/90 px-4 py-3 text-xs text-slate-300 leading-relaxed">
                          {cb.explanation}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Analysis / Testing Criteria Table */}
              {activeUnit.analysisTable && (
                <div className="space-y-2.5 pt-2">
                  <h4 className="font-display text-base font-extrabold text-slate-900">
                    Tabel Analisis &amp; Kriteria Pengujian ({activeUnit.id})
                  </h4>
                  <div className="overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-100 text-slate-800 font-bold">
                        <tr>
                          <th className="px-4 py-3 border-b border-slate-200 w-1/3">
                            {activeUnit.analysisTable.col1Header}
                          </th>
                          <th className="px-4 py-3 border-b border-slate-200">
                            {activeUnit.analysisTable.col2Header}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200/80 bg-white">
                        {activeUnit.analysisTable.rows.map(([c1, c2], i) => (
                          <tr key={i} className="hover:bg-slate-50/80">
                            <td className="px-4 py-2.5 font-bold text-slate-900">{c1}</td>
                            <td className="px-4 py-2.5 text-slate-600">{c2}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Extra Pedagogical / Technical Callout Notes */}
              {activeUnit.extraNotes &&
                activeUnit.extraNotes.map((en, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-blue-200 bg-blue-50/70 p-4 sm:p-5 space-y-1.5"
                  >
                    <p className="font-display text-sm font-extrabold text-blue-950 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-blue-700" />
                      {en.title}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{en.body}</p>
                  </div>
                ))}

              {/* Visual Assets Gallery for this Unit */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-display text-base font-extrabold text-slate-900">
                    Dokumentasi Visual, Screenshot &amp; Diagram ({activeUnit.id} —{" "}
                    {activeUnit.assets.length} Aset)
                  </h4>
                  <span className="text-xs text-slate-500">
                    Klik gambar untuk memperbesar &amp; membaca detail
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {activeUnit.assets.map((asset) => (
                    <button
                      key={asset.id}
                      type="button"
                      onClick={() => onOpenImage?.(asset.src, asset.caption)}
                      className="group flex flex-col justify-between text-left overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md transition cursor-zoom-in"
                    >
                      <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={asset.src}
                          alt={asset.alt}
                          className="h-full w-full object-contain p-1.5 group-hover:scale-105 transition duration-300"
                        />
                        <span className="absolute top-2.5 left-2.5 rounded-md bg-slate-900/80 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                          {asset.id} • {asset.kind}
                        </span>
                      </div>
                      <p className="p-3 text-xs text-slate-600 leading-snug border-t border-slate-100">
                        {asset.caption}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Previous / Next Unit Navigation + Link to Troubleshooting */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5">
                <div>
                  {prevUnit ? (
                    <button
                      type="button"
                      onClick={() => setSelectedUnitId(prevUnit.id)}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-100 transition cursor-pointer"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Sebelumnya: {prevUnit.title}
                    </button>
                  ) : (
                    <span className="text-xs text-slate-400">Unit Awal (P00)</span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSection("troubleshooting")}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-amber-50 border border-amber-200 px-3.5 py-2 text-xs font-bold text-amber-900 hover:bg-amber-100 transition cursor-pointer"
                >
                  <ShieldAlert className="h-3.5 w-3.5 text-amber-600" />
                  Buka Panduan Troubleshooting ({activeUnit.id})
                </button>

                <div>
                  {nextUnit ? (
                    <button
                      type="button"
                      onClick={() => setSelectedUnitId(nextUnit.id)}
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-950 transition cursor-pointer"
                    >
                      Berikutnya: {nextUnit.title}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <span className="text-xs text-slate-400">Unit Akhir (P06)</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SECTION 2: OVERVIEW & LEARNING PATH ==================== */}
        {section === "overview" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs font-extrabold uppercase tracking-wider text-blue-700">
                  01 • Pengenalan Materi &amp; Ruang Lingkup
                </p>
                <h3 className="font-display text-2xl font-extrabold text-slate-900">
                  Tujuan dan Ruang Lingkup: From Smart Robotics to IoT
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  <strong>Internet of Things (IoT)</strong> adalah sistem perangkat fisik yang
                  berkomunikasi melalui jaringan internet untuk mengirim data, menerima perintah,
                  atau berinteraksi dengan layanan lain. Tidak semua alat otomatis atau nirkabel
                  adalah IoT. Pada materi ini, proyek awal menjadi fondasi sebelum perangkat
                  terhubung ke cloud.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 font-bold text-slate-800">
                      <tr>
                        <th className="px-4 py-3 border-b border-slate-200">Tahap</th>
                        <th className="px-4 py-3 border-b border-slate-200">Proyek</th>
                        <th className="px-4 py-3 border-b border-slate-200">Kompetensi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="px-4 py-2.5 font-extrabold text-emerald-700">Learn</td>
                        <td className="px-4 py-2.5 font-semibold">P00 LED &amp; Sound</td>
                        <td className="px-4 py-2.5 text-slate-600">Event, input, output</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 font-extrabold text-sky-700">Explore</td>
                        <td className="px-4 py-2.5 font-semibold">
                          P01 Tracking; P02 Obstacle Avoidance
                        </td>
                        <td className="px-4 py-2.5 text-slate-600">
                          Sensor, percabangan, perulangan
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 font-extrabold text-sky-700">Explore</td>
                        <td className="px-4 py-2.5 font-semibold">
                          P03 Smartphone Control; P04 Smart LED
                        </td>
                        <td className="px-4 py-2.5 text-slate-600">Bluetooth, RGB, aktuator</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 font-extrabold text-violet-700">Create</td>
                        <td className="px-4 py-2.5 font-semibold">
                          P05 Smart Switch; P06 Temperature Monitoring
                        </td>
                        <td className="px-4 py-2.5 text-slate-600">
                          Wi-Fi, datastream, data, debugging
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Kit Photos KIT_PH_31 & KIT_PH_32 */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-4">
                {[
                  {
                    id: "KIT_PH_31",
                    src: "/assets/iot-microbit/KIT_PH_31_Tinybit_Robot.png",
                    caption:
                      "KIT_PH_31 — Foto robot Tiny:bit dengan micro:bit terpasang (Foto asli; Konversi PNG; metadata dihapus).",
                  },
                  {
                    id: "KIT_PH_32",
                    src: "/assets/iot-microbit/KIT_PH_32_HolaBIT_Board.png",
                    caption:
                      "KIT_PH_32 — Foto close-up perangkat HoLa:BIT dan micro:bit; area layar dipotong. (Foto asli; Mask permanen / crop).",
                  },
                ].map((img) => (
                  <div
                    key={img.id}
                    onClick={() => onOpenImage?.(img.src, img.caption)}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm cursor-zoom-in"
                  >
                    <div className="relative h-44 w-full bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="h-full w-full object-contain p-2 group-hover:scale-105 transition"
                      />
                      <span className="absolute top-2.5 left-2.5 rounded-md bg-slate-900/80 px-2 py-0.5 text-[10px] font-bold text-white">
                        {img.id} • Foto asli
                      </span>
                    </div>
                    <p className="p-3 text-xs text-slate-600 border-t border-slate-100">
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Jalur Belajar 7 Unit */}
            <div className="space-y-3 pt-2">
              <h4 className="font-display text-lg font-extrabold text-slate-900">
                Jalur Belajar &amp; Status Praktik (P00–P06)
              </h4>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {PROJECT_UNITS.map((u) => (
                  <div
                    key={u.id}
                    className="flex items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <div className="space-y-1">
                      <p className="font-display text-sm font-extrabold text-slate-900">
                        {u.title}
                      </p>
                      <p className="text-xs text-slate-600">{u.statusLabel}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedUnitId(u.id);
                        setSection("projects");
                      }}
                      className="shrink-0 rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-bold text-white hover:bg-blue-900 transition cursor-pointer"
                    >
                      Buka {u.id}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== SECTION 3: FUNDAMENTAL KNOWLEDGE ==================== */}
        {section === "fundamentals" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-wider text-blue-700">
                02 • Fundamental Knowledge
              </p>
              <h3 className="font-display text-2xl font-extrabold text-slate-900">
                Cara Kerja Perangkat Terhubung: Dari Lokal hingga Cloud IoT
              </h3>
              <p className="text-sm text-slate-600">
                Membedakan perangkat komputasi fisik lokal, robot otonom, kendali Bluetooth jarak
                dekat, dan sistem Internet of Things (IoT) yang terhubung ke cloud.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 font-bold text-slate-800">
                    <tr>
                      <th className="px-4 py-3 border-b border-slate-200">Konsep</th>
                      <th className="px-4 py-3 border-b border-slate-200">
                        Contoh dalam Pelatihan
                      </th>
                      <th className="px-4 py-3 border-b border-slate-200">Internet?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="px-4 py-2.5 font-bold">Physical computing</td>
                      <td className="px-4 py-2.5 text-slate-600">Tombol → kode → LED/suara (P00)</td>
                      <td className="px-4 py-2.5 font-semibold text-slate-500">Tidak</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold">Robotika otonom</td>
                      <td className="px-4 py-2.5 text-slate-600">
                        Sensor → logika → motor (P01, P02)
                      </td>
                      <td className="px-4 py-2.5 font-semibold text-slate-500">Tidak</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold">Bluetooth</td>
                      <td className="px-4 py-2.5 text-slate-600">Smartphone → robot (P03)</td>
                      <td className="px-4 py-2.5 font-semibold text-slate-500">
                        Tidak diperlukan
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold">Otomasi lokal</td>
                      <td className="px-4 py-2.5 text-slate-600">Animasi NeoPixel (P04)</td>
                      <td className="px-4 py-2.5 font-semibold text-slate-500">Tidak</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold text-blue-900">Remote control IoT</td>
                      <td className="px-4 py-2.5 text-slate-600">Blynk → ESP8266 → LED (P05)</td>
                      <td className="px-4 py-2.5 font-extrabold text-emerald-700">Ya</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold text-blue-900">Monitoring IoT</td>
                      <td className="px-4 py-2.5 text-slate-600">Suhu → ESP8266 → Blynk (P06)</td>
                      <td className="px-4 py-2.5 font-extrabold text-emerald-700">Ya</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="lg:col-span-5 space-y-3">
                <div
                  onClick={() =>
                    onOpenImage?.(
                      "/assets/iot-microbit/P05_DG_01_Smart_Switch.png",
                      "P05_DG_01 — IoT Smart Switch - Alur perintah Blynk ke LED ring. (Diagram baru; Ilustrasi konseptual, tidak berskala)."
                    )
                  }
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm cursor-zoom-in"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/iot-microbit/P05_DG_01_Smart_Switch.png"
                    alt="IoT Smart Switch - Alur perintah Blynk ke LED ring"
                    className="w-full h-52 object-contain p-2 bg-slate-50 group-hover:scale-105 transition"
                  />
                  <p className="p-3 text-xs text-slate-600 border-t border-slate-100">
                    P05_DG_01 — IoT Smart Switch - Alur perintah Blynk ke LED ring. (Diagram baru;
                    Ilustrasi konseptual, tidak berskala).
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong>Dua arah pertukaran informasi:</strong> Pada <strong>P05</strong>,
                  perintah mengalir dari pengguna ke perangkat. Pada <strong>P06</strong>, data
                  mengalir dari sensor ke dashboard. Virtual pin <code>V1/V2</code> adalah alamat
                  logis di Blynk, bukan GPIO fisik. <code>UART</code> menghubungkan pengendali ke
                  modul jaringan. Koneksi Wi-Fi saja belum membuktikan API cloud berhasil.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SECTION 4: TOOLS & EQUIPMENT CATALOG ==================== */}
        {section === "equipment" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-wider text-blue-700">
                03 • Alat, Perangkat &amp; Software
              </p>
              <h3 className="font-display text-2xl font-extrabold text-slate-900">
                Katalog Perangkat Praktik: micro:bit V2, Tiny:bit, HoLa:BIT &amp; Software
              </h3>
              <p className="text-sm text-slate-600">
                BBC micro:bit V2 adalah pengendali edukasi dengan layar LED 5×5, tombol A/B, sensor
                gerakan, kompas, pembacaan suhu internal, radio, Bluetooth, mikrofon dan speaker.
                Wi-Fi tidak tersedia langsung; pada praktik IoT digunakan ESP8266. [R1–R3]
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Table 1: micro:bit & Tiny:bit */}
              <div className="space-y-3">
                <h4 className="font-display text-base font-extrabold text-slate-900">
                  Katalog Alat: micro:bit dan Tiny:bit
                </h4>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 font-bold text-slate-800">
                      <tr>
                        <th className="px-4 py-2.5 border-b border-slate-200">Alat</th>
                        <th className="px-4 py-2.5 border-b border-slate-200">
                          Fungsi dan Kebutuhan
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="px-4 py-2.5 font-bold">micro:bit V2</td>
                        <td className="px-4 py-2.5 text-slate-600">
                          Pengendali untuk semua proyek; pastikan versi firmware/HEX sesuai.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 font-bold">Yahboom Tiny:bit</td>
                        <td className="px-4 py-2.5 text-slate-600">
                          Sasis robot, motor/roda, sensor tracking kiri/kanan, ultrasonik, lampu
                          dan driver; P01–P03.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 font-bold">Baterai robot</td>
                        <td className="px-4 py-2.5 text-slate-600">
                          Gunakan jenis dan pengisian yang ditentukan produsen; jangan hubung
                          singkat.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 font-bold">Kabel USB data</td>
                        <td className="px-4 py-2.5 text-slate-600">
                          Transfer program dari laptop; kabel hanya daya tidak cukup.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 font-bold">Arena</td>
                        <td className="px-4 py-2.5 text-slate-600">
                          Jalur hitam matte di permukaan terang, rintangan ringan, ruang datar.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 2: HoLa:BIT & Koneksi */}
              <div className="space-y-3">
                <h4 className="font-display text-base font-extrabold text-slate-900">
                  Katalog Alat: HoLa:BIT dan Konfigurasi Pin
                </h4>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 font-bold text-slate-800">
                      <tr>
                        <th className="px-4 py-2.5 border-b border-slate-200">Komponen</th>
                        <th className="px-4 py-2.5 border-b border-slate-200">
                          Konfigurasi Praktik / Batasan
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="px-4 py-2.5 font-bold">HoLa:BIT / Sharing School</td>
                        <td className="px-4 py-2.5 text-slate-600">
                          Expansion board yang teridentifikasi secara visual; skema PCB resmi belum
                          diperoleh.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 font-bold">NeoPixel ring</td>
                        <td className="px-4 py-2.5 text-slate-600">
                          Pin <code>P15</code>, <code>24 LED</code>, format <code>RGB</code> (urutan{" "}
                          <code>GRB</code>).
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 font-bold">ESP8266</td>
                        <td className="px-4 py-2.5 text-slate-600">
                          Modul Wi-Fi; firmware AT dan catu daya kompatibel diperlukan.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 font-bold">UART micro:bit</td>
                        <td className="px-4 py-2.5 text-slate-600">
                          <code>TX P16</code>, <code>RX P2</code>, <code>115200 baud</code> pada
                          praktik saklar.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 font-bold">Sensor suhu</td>
                        <td className="px-4 py-2.5 text-slate-600">
                          Internal prosesor micro:bit; tidak membutuhkan DHT11/DHT22.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 font-bold">Wi-Fi</td>
                        <td className="px-4 py-2.5 text-slate-600">
                          Jaringan 2,4 GHz kompatibel; hindari captive portal dan jaringan publik.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Conceptual Wiring Note */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-4 text-xs sm:text-sm text-amber-950 leading-relaxed">
              <strong>Pemetaan Koneksi Konseptual:</strong>{" "}
              <code>TX micro:bit P16 → RX ESP8266</code>;{" "}
              <code>TX ESP8266 → RX micro:bit P2</code>; <code>GND bersama</code>.{" "}
              <code>P15</code> mengirim data NeoPixel. Gunakan konektor board sesuai manual dan
              jangan menebak pin catu daya atau memberi 5 V pada GPIO micro:bit. Ini bukan skema
              PCB; jika board telah memiliki koneksi internal, jangan menggandakannya. Matikan daya
              sebelum pemasangan.
            </div>

            {/* Software & Extension Table + Screenshots P05_SS_23 & P05_SS_24 */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 font-bold text-slate-800">
                    <tr>
                      <th className="px-4 py-2.5 border-b border-slate-200">Software</th>
                      <th className="px-4 py-2.5 border-b border-slate-200">Peran</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="px-4 py-2.5 font-bold">MakeCode</td>
                      <td className="px-4 py-2.5 text-slate-600">
                        Editor blok, JavaScript, simulator, ekspor HEX; makecode.microbit.org
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold">Tiny-bitLib</td>
                      <td className="px-4 py-2.5 text-slate-600">
                        Blok motor, sensor tracking dan jarak;
                        github.com/YahboomTechnology/Tiny-bitLib
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold">NeoPixel</td>
                      <td className="px-4 py-2.5 text-slate-600">
                        Kontrol LED addressable; paket Microsoft.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold">ESP8266 WiFi</td>
                      <td className="px-4 py-2.5 text-slate-600">
                        Cytron pxt-esp8266 v2.0.1 pada dokumentasi; API Wi-Fi/Blynk.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold">Mbit</td>
                      <td className="px-4 py-2.5 text-slate-600">
                        Aplikasi kendali robot melalui Bluetooth; gunakan sumber Yahboom.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold">Blynk IoT</td>
                      <td className="px-4 py-2.5 text-slate-600">
                        Template, device, datastream, widget dan dashboard.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    id: "P05_SS_23",
                    src: "/assets/iot-microbit/P05_SS_23_Extension_NeoPixel.png",
                    caption:
                      "P05_SS_23 — Pencarian extension NeoPixel (Screenshot asli; Konversi PNG; metadata dihapus).",
                  },
                  {
                    id: "P05_SS_24",
                    src: "/assets/iot-microbit/P05_SS_24_Extension_ESP8266.png",
                    caption:
                      "P05_SS_24 — Pencarian extension ESP8266 (Screenshot asli; Konversi PNG; metadata dihapus).",
                  },
                ].map((ss) => (
                  <button
                    key={ss.id}
                    type="button"
                    onClick={() => onOpenImage?.(ss.src, ss.caption)}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left cursor-zoom-in"
                  >
                    <img
                      src={ss.src}
                      alt={ss.caption}
                      className="h-36 w-full object-contain p-1.5 bg-slate-50 group-hover:scale-105 transition"
                    />
                    <p className="p-2.5 text-[11px] text-slate-600 border-t border-slate-100">
                      {ss.caption}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== SECTION 5: LEARNING BENEFITS & SD-SMP IMPLEMENTATION ==================== */}
        {section === "benefits" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-wider text-blue-700">
                04 • Manfaat &amp; Implementasi Pembelajaran
              </p>
              <h3 className="font-display text-2xl font-extrabold text-slate-900">
                Implementasi Pembelajaran SD–SMP, Alur Sesi &amp; Asesmen Kinerja
              </h3>
              <p className="text-sm text-slate-600">
                Bahan ajar untuk guru IT dan instruktur teknologi, dengan aktivitas yang dapat
                disesuaikan untuk siswa SD–SMP. Target SD menggunakan demonstrasi dan blok
                sederhana; SMP menambahkan penalaran kondisi, jaringan, data dan evaluasi.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 font-bold text-slate-800">
                    <tr>
                      <th className="px-4 py-2.5 border-b border-slate-200">Proyek</th>
                      <th className="px-4 py-2.5 border-b border-slate-200">Aktivitas SD</th>
                      <th className="px-4 py-2.5 border-b border-slate-200">Aktivitas SMP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="px-4 py-2.5 font-bold">P00</td>
                      <td className="px-4 py-2.5 text-slate-600">Tombol dan warna</td>
                      <td className="px-4 py-2.5 text-slate-600">Event dan debugging</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold">P01</td>
                      <td className="px-4 py-2.5 text-slate-600">Robot mengikuti garis</td>
                      <td className="px-4 py-2.5 text-slate-600">
                        Tabel kondisi sensor, optimasi
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold">P02</td>
                      <td className="px-4 py-2.5 text-slate-600">Mengenal jarak</td>
                      <td className="px-4 py-2.5 text-slate-600">
                        Ambang, pengukuran, percabangan
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold">P03</td>
                      <td className="px-4 py-2.5 text-slate-600">Kendali robot bergiliran</td>
                      <td className="px-4 py-2.5 text-slate-600">
                        Komunikasi nirkabel, pengujian
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold">P04</td>
                      <td className="px-4 py-2.5 text-slate-600">Pola warna kreatif</td>
                      <td className="px-4 py-2.5 text-slate-600">Buffer, rotasi, timing</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold">P05</td>
                      <td className="px-4 py-2.5 text-slate-600">Demo lampu pintar</td>
                      <td className="px-4 py-2.5 text-slate-600">
                        Virtual pin, request, kondisi gagal
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 font-bold">P06</td>
                      <td className="px-4 py-2.5 text-slate-600">Amati perubahan suhu</td>
                      <td className="px-4 py-2.5 text-slate-600">
                        Data, kalibrasi sederhana, dashboard
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                  <p className="font-display text-sm font-extrabold text-slate-900">
                    Alur Sesi yang Disarankan (Usulan Guru)
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>
                      • <strong>Learn (10–15 menit):</strong> demonstrasi konsep dan prediksi.
                    </li>
                    <li>
                      • <strong>Explore (20–35 menit):</strong> susun blok, uji satu fungsi, catat
                      hasil.
                    </li>
                    <li>
                      • <strong>Create (15–25 menit):</strong> ubah satu parameter dan jelaskan
                      dampaknya.
                    </li>
                  </ul>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 font-bold text-slate-800">
                      <tr>
                        <th className="px-4 py-2 border-b border-slate-200">Aspek Asesmen</th>
                        <th className="px-4 py-2 border-b border-slate-200">Indikator Kinerja</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="px-4 py-2 font-bold">Konsep</td>
                        <td className="px-4 py-2 text-slate-600">
                          Menjelaskan input–process–output dan jenis koneksi.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-bold">Program</td>
                        <td className="px-4 py-2 text-slate-600">
                          Blok tersusun logis; dapat menjelaskan alasan tiap blok.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-bold">Pengujian</td>
                        <td className="px-4 py-2 text-slate-600">
                          Memiliki catatan hasil, kondisi gagal, dan perbaikan.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-bold">Kreativitas</td>
                        <td className="px-4 py-2 text-slate-600">
                          Mengubah satu fitur dengan alasan yang jelas.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-bold">Keselamatan</td>
                        <td className="px-4 py-2 text-slate-600">
                          Menjaga alat, data dan kredensial.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SECTION 6: TROUBLESHOOTING & PENGUJIAN ==================== */}
        {section === "troubleshooting" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-wider text-amber-700">
                05 • Troubleshooting &amp; Metode Pengujian
              </p>
              <h3 className="font-display text-2xl font-extrabold text-slate-900">
                Diagnosis Bertahap, Keamanan Perangkat &amp; Lembar Uji Ulang
              </h3>
              <p className="text-sm text-slate-600">
                Uji satu fungsi pada satu waktu; jangan menyimpulkan proyek berhasil hanya dari
                simulator atau ikon.
              </p>
            </div>

            <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-4 sm:p-5 space-y-2 text-xs sm:text-sm text-rose-950">
              <p className="font-display font-extrabold flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-rose-600" />
                Keamanan, Privasi Kredensial &amp; Batas Prototipe
              </p>
              <p className="leading-relaxed">
                Gunakan perangkat tegangan rendah sesuai manual. Jangan hubungkan LED atau GPIO ke
                listrik AC. Jaga area robot bebas benda rapuh dan tepi jatuh. Untuk akun latihan,
                buat token terpisah; putar token dan ganti password yang pernah terekspos bila
                masih aktif. Jangan memasukkan kredensial dalam file publik. Integrasi Cytron yang
                digunakan bersifat prototipe edukasi (menggunakan HTTP port 80 pada versi yang
                diperiksa MKB [R13], bukan HTTPS).
              </p>
            </div>

            {/* P06 Retest Sheet (Belum Diisi) */}
            <div className="space-y-3">
              <h4 className="font-display text-base font-extrabold text-slate-900">
                Lembar Pengujian Ulang P06 — IoT Temperature Monitoring (Belum Diisi)
              </h4>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 font-bold text-slate-800">
                    <tr>
                      <th className="px-4 py-2.5 border-b border-slate-200">Tahap Tes</th>
                      <th className="px-4 py-2.5 border-b border-slate-200">Hasil Aktual</th>
                      <th className="px-4 py-2.5 border-b border-slate-200">Lulus?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {[
                      "1. Sensor lokal (on button A → show number temperature °C)",
                      "2. Init ESP8266 (TX P16, RX P2, 115200) + Koneksi Wi-Fi 2,4 GHz",
                      '3. Kirim nilai tetap V2 angka "25" ke Blynk',
                      "4. Kirim pembacaan V2 suhu aktual (input.temperature())",
                      "5. Pengamatan perubahan suhu & waktu update dashboard",
                    ].map((tes) => (
                      <tr key={tes}>
                        <td className="px-4 py-2.5 font-semibold text-slate-800">{tes}</td>
                        <td className="px-4 py-2.5 text-slate-400">— (Belum diuji fisik)</td>
                        <td className="px-4 py-2.5 text-slate-400">—</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500">
                Kriteria keberhasilan P06: angka lokal terbaca, nilai V2 diterima berulang,
                dashboard menampilkan data yang sesuai, kegagalan tercatat. Jangan menyatakan proyek
                berhasil sebelum seluruh uji dilakukan.
              </p>
            </div>
          </div>
        )}

        {/* ==================== SECTION 7: GLOSSARY & REFERENCES R1-R15 ==================== */}
        {section === "glossary" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              {/* Glossary */}
              <div className="lg:col-span-6 space-y-3">
                <p className="text-xs font-extrabold uppercase tracking-wider text-blue-700">
                  06 • Glosarium Teknis
                </p>
                <h3 className="font-display text-xl font-extrabold text-slate-900">
                  Istilah Utama Robotika, Physical Computing &amp; IoT
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 font-bold text-slate-800">
                      <tr>
                        <th className="px-4 py-2.5 border-b border-slate-200">Istilah</th>
                        <th className="px-4 py-2.5 border-b border-slate-200">Makna</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {GLOSSARY_ITEMS.map(([term, meaning]) => (
                        <tr key={term}>
                          <td className="px-4 py-2.5 font-bold text-slate-900">{term}</td>
                          <td className="px-4 py-2.5 text-slate-600">{meaning}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* References R1-R15 */}
              <div className="lg:col-span-6 space-y-3">
                <p className="text-xs font-extrabold uppercase tracking-wider text-blue-700">
                  07 • Referensi Teknis (R1–R15)
                </p>
                <h3 className="font-display text-xl font-extrabold text-slate-900">
                  Daftar Sumber &amp; Dokumentasi Resmi
                </h3>
                <div className="space-y-2 max-h-[540px] overflow-y-auto pr-1">
                  {REFERENCES_LIST.map((ref) => (
                    <div
                      key={ref.id}
                      className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-3.5"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="rounded-md bg-slate-900 px-2 py-0.5 font-mono text-[11px] font-bold text-sky-300">
                            [{ref.id}]
                          </span>
                          <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                            {ref.title}
                          </p>
                        </div>
                        <p className="mt-1 font-mono text-[11px] text-slate-500 truncate">
                          {ref.url}
                        </p>
                      </div>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-blue-700 hover:bg-blue-50 transition"
                      >
                        Buka <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600 leading-relaxed">
                  <Info className="inline h-3.5 w-3.5 text-blue-600 mr-1" />
                  Catatan pemeriksaan sumber: halaman langsung R4/R5 terkadang tidak dapat diakses;
                  parameter P02 berasal dari representasi blok salinan panduan R7.
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
