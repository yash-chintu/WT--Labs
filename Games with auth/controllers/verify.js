const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config({
  path: "../.env",
});

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) console.log(err);
  else console.log("verify DB connected!");
});

const homePageTitle = "Welcome to Gaming Application!";
const dicePageTitle = "Dice Game!";
const cardsPageTitle = "Cards Game !";

exports.register = (req, res) => {
  const { username, email, mobile, password, confirmPassword } = req.body;
  const queryString1 = `select username from users where username = ?`;
  db.query(queryString1, [username], (err, results) => {
    if (err) console.log(err);
    if (results.length > 0) {
      return res.render("register", {
        pageTitle: "Register to Play",
        errorMessage: "Username already registered",
      });
    }
  });
  const queryString2 = `select email from users where email = ?`;
  db.query(queryString2, [email], (err, results) => {
    if (err) console.log(err);
    if (results.length > 0) {
      return res.render("register", {
        pageTitle: "Register to Play",
        errorMessage: "Email already registered",
      });
    }
    const queryStmt = `INSERT INTO users SET ?`;
    db.query(
      queryStmt,
      { username: username, email: email, mobile: mobile, password: password },
      (errors, results) => {
        if (errors) {
          console.log(errors);
        } else {
          console.log(results);
          return res.redirect("../success");
        }
      }
    );
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const queryString = `select username,password from users where username = ? and password = ?`;
  db.query(queryString, [username, password], (err, results) => {
    if (err) console.log(err);
    if (results.length === 1) {
      return res.redirect("../home");
    } else if (results.length === 0) {
      return res.render("login", {
        brandTitle: "Gaming Application !",
        pageTitle: "LogIn/SignUp",
        errorMessage: "Invalid Credentials , New Users can register to login",
      });
    }
  });
};
