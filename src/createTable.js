import mysql from 'mysql'

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Bestie",
  database: "Users"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE UserInfo (ID int, first_name varchar(50), surname varchar(50), DOB DATE, email varchar(50), password varchar(100))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});