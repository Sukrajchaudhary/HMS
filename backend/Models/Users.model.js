const mongoose = require("mongoose");
const crypto = require("crypto");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
    },
    pic: {
      type: String,
      default: null,
    },
    salt: {
      type: Buffer,
    },
    token: {
      type: String,
      default: "",
    },
   role:{
    type:String,
    default:'user'
   }
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }

    const salt = crypto.randomBytes(16);
    const hashedPassword = await new Promise((resolve, reject) => {
      crypto.pbkdf2(this.password, salt, 310000, 32, 'sha256', (err, key) => {
        if (err) reject(err);
        resolve(key.toString('hex'));
      });
    });

    this.password = hashedPassword;
    this.salt = salt; // Store the salt for future use
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
// userSchema.methods.comparePassword = async function (Password) {
//   try {
//     return await bcrypt.compare(Password, this.password);
//   } catch (error) {
//     throw new Error(error);
//   }
// };
userSchema.methods.comparePassword =  function (password) {
  console.log("mdel",password)
  return new Promise(async(resolve, reject) => {
      crypto.pbkdf2(password, this.salt, 310000, 32, 'sha256', (err, hashedPassword) => {
      if (err) {
        reject(err);
      } else {
        const isEqual = crypto.timingSafeEqual(Buffer.from(this.password, 'hex'), hashedPassword);
        resolve(isEqual);
      }
    });
  });
};

exports.User = mongoose.model("User", userSchema);
