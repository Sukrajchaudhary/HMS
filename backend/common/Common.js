const jwt = require("jsonwebtoken"); // Import jsonwebtoken package

exports.isAuth = (req, res, next) => {
  const token = req.cookies["jwt"];
  if (!token) {
    res.sendStatus(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, process.env.SECRETE);
    req.user = data;
    next();
  } catch (error) {
    res.sendStatus(401).send({ error: "Please authenticate using a valid Token" });
  }
};

exports.Sanetizer = (user) => {
  return {
    id: user._id,
    email: user.email,
    token: user.token,
    role: user.role,
  };
};
