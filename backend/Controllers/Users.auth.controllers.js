const { User } = require("../Models/Users.model");
const jwt = require("jsonwebtoken");
const { Sanetizer} = require("../common/Common");
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
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Username and password is Needed." });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User with this email does not exist!" });
    }
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid Credentials!!" });
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRETE, {
      expiresIn: "2h",
    });
     res
      .cookie("jwt", token, {
        expiresIn: "2h",
        httpOnly: true,
        sameSite: "none",
      })
      .status(200)
      .json({ token });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.CheckUser = async (req, res) => {
  return res.send({ message: true, user: req.user });
};
