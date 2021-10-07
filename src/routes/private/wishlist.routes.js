const { Router } = require('express')
const AddToWishlist = require('../../controllers/wishlist/addToWishlist.controller')
const GetWishlist = require('../../controllers/wishlist/getWishlist.controller')

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

wishlistRouter.delete('/myaccount/wishlist', (req, res) => {
  //TODO - deleta um item a wishlist
})

module.exports = wishlistRouter
