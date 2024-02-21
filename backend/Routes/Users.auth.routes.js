const express = require("express");
const {
  CreateUsers,
  LoginUsers,
  CheckUser,
} = require("../Controllers/Users.auth.controllers");

const router = express.Router();
router
  .post("/register", CreateUsers)
  .post("/Login", LoginUsers)
  .get("/checkuser", CheckUser)
 
 

exports.router = router;
