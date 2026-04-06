// ╔══════════════════════════════════════════════════╗
// ║  ALUMNI.JS — Data Seluruh Alumni                 ║
// ║  Tambah data lulusan baru di sini setiap tahun   ║
// ╚══════════════════════════════════════════════════╝

// FORMAT setiap alumni:
// { nama, tahun, smp, prestasi: [] }
//
// - tahun    : tahun lulus (angka, bukan teks)
// - smp      : nama SMP/MTs tujuan
// - prestasi : daftar prestasi. Kosongkan dengan [] kalau tidak ada.
//
// Contoh dengan prestasi:
// { nama: "Budi Santoso", tahun: 2025, smp: "SMP Negeri 1 Buduran", prestasi: ["Juara 1 Olimpiade Matematika"] },
//
// Contoh tanpa prestasi:
// { nama: "Siti Aminah", tahun: 2025, smp: "MTs Al-Hidayah", prestasi: [] },

const ALUMNI = [

  // ── ANGKATAN 2025 ─────────────────────────────────
  { nama: "nama saya Raib",  tahun: 2002, smp: "SMP Negeri 1 Buduran",  prestasi: ["Juara 1 Olimpiade Matematika Kecamatan", "Siswa Teladan 2024"] },
  { nama: "Siti mungkin namanya",     tahun: 2002, smp: "SMP Negeri 2 Sidoarjo", prestasi: ["Juara 2 Lomba Baca Puisi Kabupaten"] },
  { nama: "Bayu taajudin setyo paratama",    tahun: 2012, smp: "MTs Dagestan",        prestasi: ["juara 1 bela diri anak"] },
  // Tambah angkatan baru di atas baris ini 👆
];
