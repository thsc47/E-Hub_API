const { Router } = require("express");
const signInRouter = Router();
const SignInController = require("../../controllers/access/SignInController")

signInRouter.post("/", async (req, res) => {
  try {
    const result = await SignInController.handle(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = signInRouter;
