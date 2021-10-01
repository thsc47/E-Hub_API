const { Router } = require("express");
const User = require("../../models/User.model");
const bcript = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginRouter = Router();

loginRouter.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      throw new Error("Missing fields");
    }
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("Wrong username or password");
    }

    const validation = bcript.compareSync(password, user.password);
    if (!validation) {
      throw new Error("Wrong username or password");
    }
    const payload = {
      id: user._id,
      username: user.username,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.json({ user: payload, token });
  } catch (error) {
    res.status(500).json({ Error: `Error while login: ${error.message}` });
  }
});

module.exports = loginRouter;
