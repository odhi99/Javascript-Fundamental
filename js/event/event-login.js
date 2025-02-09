function checkUserData() {
  // Ambil nilai dari inputan form
  var username = document.getElementById("exampleInputEmail1").value; // Ambil email
  var password = document.getElementById("exampleInputPassword1").value; // Ambil password

  // Data yang ada di database
  var usernameDb = "odi";
  var passwordDb = "123";

  // Validasi data
  var validasi = username == usernameDb && password == passwordDb;

  // Tampilkan hasil
  alert(validasi ? "Login berhasil" : "Login gagal");
}

// Ambil form dan tambahkan event listener untuk form submit
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form untuk melakukan submit
    checkUserData(); // Panggil fungsi untuk validasi data
  });
