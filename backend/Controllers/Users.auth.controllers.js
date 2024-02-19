const { User } = require("../Models/Users.model");
const jwt = require("jsonwebtoken");
const { Sanetizer } = require("../common/Common");
exports.CreateUsers = async (req, res) => {
  try {
    let existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists." });
    }
    const newUser = new User(req.body);
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.SECRETE, {
      expiresIn: "2h",
    });
    newUser.token = token;
    await newUser.save();
    res.cookie("jwt", token, {
      expiresIn: "2h",
      httpOnly: true,
      sameSite: "none",
    });
    return res.status(201).json(Sanetizer(newUser));
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Failed to create user." });
  }
};

exports.LoginUsers = async (req, res) => {
  console.log("req object ssjkgvbkhkkh",req.user.id)
  return res
    .cookie("jwt", req.user.token, {
      expiresIn: "2h",
      SameSite: "none",
      httpOnly: true,
    })
    .status(200)
    .send(req.user);
};

exports.CheckUser = async (req, res) => {
  return res.send({ message: true, user: req.user });
};
