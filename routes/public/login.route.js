const { Router } = require("express");
const LogInController = require("../../controllers/LogIncontroller")
const loginRouter = Router();

loginRouter.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await LogInController.handle(username,password);
    res.json(user)
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = loginRouter;
