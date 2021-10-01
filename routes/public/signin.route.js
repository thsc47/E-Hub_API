const { Router } = require('express');
const signInRouter = Router();

signInRouter.get('/', (req, res) => {
    res.json({msg: "oi"})
})


module.exports = signInRouter