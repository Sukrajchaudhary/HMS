const express = require("express");
const {
  CreateUsers,
  LoginUsers,
  CheckUser,
getUserInfo
} = require("../Controllers/Users.auth.controllers");

const router = express.Router();
const passport = require("passport");
router
  .post("/register", CreateUsers)
  .post("/Login", passport.authenticate("local"), LoginUsers)
  .get("/checkuser", passport.authenticate("jwt"), CheckUser)
 
 

exports.router = router;
