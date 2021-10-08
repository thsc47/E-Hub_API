const { Router } = require('express')
const AddToWishlist = require('../../controllers/wishlist/addToWishlist.controller')
const GetWishlist = require('../../controllers/wishlist/getWishlist.controller')
const RemoveAWishlistItem = require('../../controllers/wishlist/removeAWishlistItem.controller')

const wishlistRouter = Router()

wishlistRouter.get('/', async (req, res) => {
  try {
    const result = await GetWishlist.execute(req)
    res.json(result)
  } catch (error) {
    res.status(500).json(error.message)
  }
})

wishlistRouter.post('/add', (req, res) => {
  try {
    AddToWishlist.execute(req)
    res.send()
  } catch (error) {
    res.status(500).json({ msg: error, message })
  }
})

wishlistRouter.delete('/delete', async (req, res) => {
  try {
    await RemoveAWishlistItem.execute(req)
    res.status(204).send()
  } catch (error) {
    res.status(500).json(error.message)
  }
})

module.exports = wishlistRouter
