const passport = require("passport");
exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};
exports.Sanetizer = (user) => {
  return {
    id: user._id,
    email: user.email,
    token: user.token,
    role: user.role,
  };
};

// extracting cookies
exports.ExtractCookies = (req) => {
  let token = null;
  if (req && req.headers) {
    const Userinfo = req.headers["token"];
    const User = JSON.parse(Userinfo);
    token = User.token;

    console.log("token from any where", token);
  }
  return token;
};
