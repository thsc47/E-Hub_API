const { Router } = require("express");
const LogInController = require("../../controllers/access/LogIncontroller")
const refresh = require('../../middlewares/refresh.middleware')
const loginRouter = Router();

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await LogInController.handle(email,password);
    res.json(user)
  } catch (error) {
    res.status(500).json(error.message);
  }
});


module.exports = loginRouter;
