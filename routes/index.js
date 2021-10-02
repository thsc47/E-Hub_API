const { Router } = require("express");
const loginRouter = require("../routes/public/login.route")
const signInRoute = require("./public/signin.route");
const authMiddleware = require("../middlewares/auth.middleware")

const router = Router();

router.use("/signin", authMiddleware,signInRoute);
router.use("/login", loginRouter);

module.exports = router;
