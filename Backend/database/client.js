require("dotenv").config();

const mysql = require("mysql2/promise");

const db_test = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
// Store database name into client for further uses
db.databaseName = process.env.DB_NAME;
module.exports = db_test;
