const express = require("express");
const router = express.Router();

const homePageTitle = "Home";
const dicePageTitle = "Dice Game";
const cardsPageTitle = "Cards Game";

router.get("/", (req, res) => {
  res.render("login", {
    brandTitle: "Gaming Application !",
    pageTitle: "LogIn/SignUp",
    errorMessage: ""
  });
});

router.get("/:param", (req, res) => {
  const parameter = req.params.param;
  if (parameter === "home") {
    res.render("home", { pageTitle: homePageTitle });
  } else if (parameter === "dicegame") {
    res.render("dicegame", { pageTitle: dicePageTitle });
  } else if (parameter === "cardsgame") {
    res.render("cardsgame", { pageTitle: cardsPageTitle });
  } else if (parameter === "register") {
    res.render("register", {
      pageTitle: "Register to Play",
      errorMessage: ""
    });
  }else if(parameter === "success"){
    res.render("success",{ pageTitle:""})
  }
});

module.exports = router;