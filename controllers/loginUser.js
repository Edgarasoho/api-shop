const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

async function loginUser(user) {
  const { username, password } = user;

  if (!username || !password)
    throw new Error("Username and password are required");

  const findUser = await User.findOne({ username });

  if (!findUser) throw new Error("Username not found");
  const match = await bcrypt.compare(password, findUser.password);

  if (!match) throw new Error("Wrong password");

  return "Login user";
}

module.exports = loginUser;
