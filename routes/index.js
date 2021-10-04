const { Router } = require("express");
const loginRouter = require("../routes/public/login.route")
const signInRouter = require("./public/signin.route");
const authMiddleware = require("../middlewares/auth.middleware")

const router = Router();

router.use("/signin",signInRouter);
router.use("/login", loginRouter);

module.exports = router;
