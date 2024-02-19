const express = require("express");
const multer = require("multer");
const router = express.Router();
const {
  GetAllUsersAppoinments,
  CreateBlogs,
  GetblogById,
  UpdateBlogById,
  deleteBlogById,
  getAllblog,
} = require("../Controllers/Admin.controller");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage, fieldname: "image" });
router
  .get("/admin/allappoinments", GetAllUsersAppoinments)
  .post("/admin/blog/create", upload.single("image"), CreateBlogs)
  .get("/admin/blog/:id", GetblogById)
  .patch("/admin/update/:id", UpdateBlogById)
  .delete("/admin/blog/:id", deleteBlogById)
  .get("/admin/blog", getAllblog);
exports.router = router;
