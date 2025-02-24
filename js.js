// Ambil elemen-elemen yang dibutuhkan
const inputNama = document.getElementById('input-nama');
const btnMulai = document.getElementById('btn-mulai');
const pesanRomantis = document.getElementById('pesan-romantis');
const namaKamu = document.getElementById('nama-kamu');
const btnRomantis = document.getElementById('btn-romantis');
const pesanRahasia = document.getElementById('pesan-rahasia');
const audio = document.getElementById('background-music');

// Event listener untuk tombol "Mulai"
btnMulai.addEventListener('click', () => {
  const nama = inputNama.value.trim();
  if (nama) {
    namaKamu.textContent = nama; // Tampilkan nama yang dimasukkan
    document.getElementById('judul').classList.add('hidden'); // Sembunyikan judul
    pesanRomantis.classList.remove('hidden'); // Tampilkan pesan romantis

    // Putar musik
    audio.play().catch(error => {
      console.log("Pemutaran audio gagal: ", error);
    });
  } else {
    alert("Masukkan namamu dulu ya! 😊");
  }
});

// Event listener untuk tombol "Klik Aku"
btnRomantis.addEventListener('click', () => {
  pesanRahasia.classList.remove('hidden'); // Tampilkan pesan rahasia
  btnRomantis.textContent = "Terima kasih sudah ada! 💖"; // Ubah teks tombol
});
