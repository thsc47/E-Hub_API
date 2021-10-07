const { Router } = require('express')
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

wishlistRouter.post('/myaccount/wishlist', (req, res) => {
  //TODO - Adiciona um item a wishlist
})

wishlistRouter.delete('/myaccount/wishlist', (req, res) => {
  //TODO - deleta um item a wishlist
})

module.exports = wishlistRouter
