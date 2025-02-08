var emailDiDatabase = "odi@net.com";
var passwordDiDatabase = "odi123";

var emailDiInputUser = "odi@net.com";
var passwordDiInputUser = "odi123";

var validasiDataLogin =
  emailDiInputUser == emailDiDatabase &&
  passwordDiInputUser == passwordDiDatabase;

var cuaca = "hujan";
// var cuaca = "tidak hujan";
var cuaca2 = "bersalju";
// var cuaca2 = "tidak bersalju";

var pakeJaket = cuaca == "hujan" || cuaca == "bersalju";

// tes
var punyaSaldo = "ya";
var punyaCash = "tidak";
var punyaCashTapiKasihKeOrangYangPunyaSaldo = "ya";

var bisaDeposit = punyaSaldo == "tidak" || punyaCash == "ya";

// tes2
// 1. Jika umur kamu 17 tahun atau lebih, kamu bisa masuk.
// 2. Atau jika umur di bawah 17 tahun, tetapi punya izin orang tua, kamu juga bisa masuk.
// 3. Namun, jika tidak punya tiket, tetap tidak bisa masuk, meskipun umur memenuhi syarat
var umur = 16; // umur pengguna
var punyaIzinOrangTua = "ya"; // apakah punya izin orang tua?
var punyaTiket = true; // apakah sudah beli tiket?

var bisaMasukBioskop =
  (umur >= 17 || punyaIzinOrangTua == "tidak") && punyaTiket;

// menampilkan
console.log(bisaMasukBioskop);

console.log(bisaDeposit);

console.log(pakeJaket);

console.log(validasiDataLogin);
