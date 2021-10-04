const { Router } = require("express");
const signInRouter = Router();
const SignInController = require("../../controllers/SignInController");

signInRouter.post("/", async (req, res) => {
  try {
    await SignInController.handle(req.body);
    res.status(201).send();
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = signInRouter;
