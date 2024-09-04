const bcrypt = require("bcrypt");
const User = require("../models/user");

async function loginUser(request, response) {
  try {
    const body = request.body;
    const { username, password } = body;

    const user = await User.findOne({ username });

    if (!user) {
      return response.status(404).json({
        error: "Invalid nickname",
      });
    }

    const passwordCorrect = await bcrypt.compare(password, user.password);
    if (!passwordCorrect) {
      return response.status(404).json({
        error: "Invalid password",
      });
    }

    response.status(200).send(user);
  } catch (err) {
    console.error(err);
    response.status(500).json({ message: "Error" });
  }
}

async function signUpUser(request, response) {
  try {
    const { username, fullName, password } = request.body;

    if (!username || !fullName || !password) {
      return response.status(404).json({
        error: "Invalid parameters",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      fullName,
      password: passwordHash,
    });

    await user.save();

    response.json(user);
  } catch (err) {
    console.log(err);
    response.json(err);
  }
}

module.exports = {
  signUpUser,
  loginUser,
};
