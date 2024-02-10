require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
// middleware
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello sukraj Chaudhary");
});

app.listen(process.env.PORT, () => {
  console.log(`App is running on http://localhost:${process.env.PORT}`);
});
