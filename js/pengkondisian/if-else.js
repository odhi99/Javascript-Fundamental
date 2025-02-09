function checkUserData(username, password) {
  var usernameDb = "odi";
  var usernameDb2 = "fia";
  var passwordDb = "123";

  if (username == usernameDb) {
    if (password == passwordDb) {
      alert("berhasil login");
    } else {
      alert("password salah!");
    }
    alert("Username tersedia di database");
  } else if (username == usernameDb2) {
    alert("Username ke 2 tersedia di database");
  } else {
    alert("Username tidak tersedia");
  }

  // var validasi = username == usernameDb && password == passwordDb;
  // alert(validasi);
}

// checkUserData("odi", "321");
