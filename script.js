document.getElementById("formulir").addEventListener("submit", function(event) {

    // Mencegah halaman reload
    event.preventDefault();

    // Mengambil data formulir
    const nama = document.getElementById("nama").value.trim();
    const nis = document.getElementById("nis").value.trim();
    const email = document.getElementById("email").value.trim();

    const jenisKelamin = document.querySelector(
        'input[name="jenis_kelamin"]:checked'
    );

    const kelas = document.querySelector(
        'input[name="kelas"]:checked'
    );

    const jurusan = document.getElementById("jurusan").value;
    const pesan = document.getElementById("pesan").value.trim();

    // Mengambil ekstrakurikuler yang dipilih
    const ekskul = document.querySelectorAll(
        'input[name="ekstrakulikuler"]:checked'
    );

    let daftarEkskul = [];

    ekskul.forEach(function(item) {
        daftarEkskul.push(item.value);
    });

    // Validasi NIS
    if (!/^[0-9]+$/.test(nis)) {
        alert("NIS harus berupa angka!");
        return;
    }

    // Validasi ekstrakurikuler
    if (daftarEkskul.length === 0) {
        alert("Silakan pilih minimal satu ekstrakurikuler!");
        return;
    }

    // Validasi kelas
    if (!kelas) {
        alert("Silakan pilih kelas!");
        return;
    }

    // Membuat hasil pendaftaran
    const data = [
        ["Nama Lengkap", nama],
        ["NIS", nis],
        ["Email", email],
        ["Jenis Kelamin", jenisKelamin.value],
        ["Ekstrakurikuler", daftarEkskul.join(", ")],
        ["Kelas", kelas.value],
        ["Jurusan", jurusan],
        ["Pesan / Catatan", pesan || "-"]
    ];

    // Menampilkan hasil dengan aman
    const hasil = document.getElementById("hasil");

    hasil.innerHTML = "<h2>Pendaftaran Berhasil!</h2>";

    data.forEach(function(item) {
        const p = document.createElement("p");
        const strong = document.createElement("strong");

        strong.textContent = item[0] + ": ";
        p.appendChild(strong);
        p.appendChild(document.createTextNode(item[1]));

        hasil.appendChild(p);
    });

    alert("Selamat! Formulir berhasil dikirim.");

    // Menampilkan tombol cetak PDF
    document.getElementById("tombolCetak").style.display = "block";

    // Mengosongkan formulir
    this.reset();

});

// Fungsi cetak formulir menjadi PDF
function cetakPDF() {

    window.print();

}