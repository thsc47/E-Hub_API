const { Router } = require("express");
const loginRoute = require("./public/login.route");
const signInRoute = require("./public/signin.route");

const router = Router();

router.use("/signin", signInRoute);
router.use("/login", loginRoute);

module.exports = router;
