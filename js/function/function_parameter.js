function checkUserData(username, password) {
  var usernameDb = "odi";
  var passwordDb = "123";

  var validasi = username == usernameDb && password == passwordDb;
  console.log(validasi);
}

checkUserData("odi", "321");
