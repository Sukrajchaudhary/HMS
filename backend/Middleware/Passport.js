const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../Models/Users.model");
const { Sanetizer, ExtractCookies } = require("../common/Common");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
const opts = {};
opts.jwtFromRequest = ExtractCookies;
opts.secretOrKey = process.env.SECRETE;

exports.PassportInitialization = (passport) => {
  passport.use(
    "local",
    new LocalStrategy({ usernameField: "email" }, async function (
      email,
      password,
      done
    ) {
      try {
        const user = await User.findOne({ email: email });
        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        }
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, Sanetizer(user));
      } catch (error) {
        return done(error);
      }
    })
  );

  // Serialization and deserialization of user
  passport.serializeUser(function (user, cb) {
    console.log("serialize", user);
    process.nextTick(function () {
      return cb(null, {
        id: user.id,
      });
    });
  });
  passport.deserializeUser(function (user, cb) {
    console.log("deserialize", user);
    process.nextTick(async function () {
      try {
        const foundUser = await User.findById(user.id);
        if (!foundUser) {
          return cb(null, false, { message: "User Not found:" });
        }
        return cb(null, Sanetizer(foundUser));
      } catch (error) {
        return cb(error);
      }
    });
  });
};

//
exports.LocalJwtStrategy = (passport) => {
  passport.use(
    "jwt",
    new JwtStrategy(opts, async function (jwt_payload, done) {
      console.log("jwt payload", jwt_payload);
      try {
        const user = await User.findOne({ _id: jwt_payload.id });
        if (user) {
          return done(null, Sanetizer(user));
        } else {
          return done(null, false);
        }
      } catch (error) {
        return done(error, false);
      }
    })
  );
};
