const { Router } = require('express')
const loginRouter = require('../routes/public/login.route')
const signInRouter = require('./public/signin.route')
const authMiddleware = require('../middlewares/auth.middleware')
const adSaleRouter = require('./private/adsale.route')
const myAccountRouter = require('./private/myaccount.route')
const wishlistRouter = require('./private/wishlist.routes')

const router = Router()

router.use('/signin', signInRouter)
router.use('/login', loginRouter)
router.use('/ad-sale', authMiddleware, adSaleRouter)
router.use('/my-account', authMiddleware, myAccountRouter)
router.use('/wishlist', authMiddleware, wishlistRouter)

module.exports = router
