const mysql = require("mysql2");

const connection = mysql.createConnection({
  host:"localhost",
  port:3307,
  user:"root",
  database:"data_test",
  password:"",
});

connection.connect(() => {
  console.log("Database Already!")
});
module.exports = connection;