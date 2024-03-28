const User = require("../models/UserModel");

const bcrypt = require("bcrypt");

const {
  registerUserValidation,
} = require("../validation/registerUserValidation");

async function registerUser(user) {
  registerUserValidation(user);

  const userExists = await User.find();

  if (userExists) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(user.password, 10);

  const newUser = await new User.create({
    username: user.username,
    password: hashedPassword,
  });

  return newUser;
}

module.exports = registerUser;
