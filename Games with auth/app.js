//jshint esversion:6

const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql2");
const app = express();

dotenv.config({
  path:'./.env'
});

const db = mysql.createConnection({
  host : process.env.HOST,
  user : process.env.USER,
  password:process.env.PASSWORD,
  data : process.env.DATABASE
});

db.connect((err) => {
  if (err) console.log(err);
  else console.log("MySql Connected");
});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routing 

app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));

app.listen("3000", (req, res) => {
  console.log("Server listening on port 3000");
});
