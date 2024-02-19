const express = require("express");
const {
  CreateAppoinments,
  UsersAppoinments,
  UpdateAppoinmnts,
  DeletesAppoinments
} = require("../Controllers/Appoinments.controllers");
const router = express.Router();
router
  .post("/appoinment/create", CreateAppoinments)
  .get("/appoinment/getusersappoinment", UsersAppoinments)
  .patch("/appoinment/update/:appoinmentID", UpdateAppoinmnts)
  .delete("/appoinment/delete/:id",DeletesAppoinments)
  ;

exports.router = router;
