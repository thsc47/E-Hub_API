const { Router } = require("express");
const User = require("../../models/User.model");
const bcript = require("bcryptjs");

const signInRouter = Router();

signInRouter.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      throw new Error("Missing fields");
    }
    
    const user = await User.findOne({ username });

    if (!!user) {
      throw new Error("Username already exists");
    }

    const passwordHash = bcript.hashSync(password, 12);
    await User.create({
        username,
        password:passwordHash
    });

    return res.status(201).send()

  } catch (error) {
      res.status(500).json({Error:`Error while creating user: ${error.message}`})
  }
});

module.exports = signInRouter;
