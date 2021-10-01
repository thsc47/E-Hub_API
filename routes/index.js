const { Router } = require("express");
const loginRoute = require("./public/login.route");
const signInRoute = require("./public/signin.route");
const authMiddleware = require("../middlewares/auth.middleware")

const router = Router();

router.use("/signin",authMiddleware, signInRoute);
router.use("/login", authMiddleware, loginRoute);

module.exports = router;
