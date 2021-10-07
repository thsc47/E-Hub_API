const { Router } = require('express')
const getAllData = require('../../controllers/myaccount/getAllData.controller')
const UpdateMyAccount = require('../../controllers/myaccount/updateMyAccount.controller')

const myAccountRouter = Router()

myAccountRouter.get('/', async (req, res) => {
  try {
    const result = await getAllData.execute(req)
    res.json(result)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
})

myAccountRouter.put('/edit', async (req, res) => {
  try {
    const result = await UpdateMyAccount.execute(req)
    res.json(result)
  } catch (error) {
    res.status(500).json(error.message)
  }
})

myAccountRouter.delete('/myaccount', (req, res) => {
  //TODO - Devolve todos os dados do usuário.
})

myAccountRouter.get('/myaccount/wishlist', (req, res) => {
  //TODO - Devolve a wishlist do usuário
})

myAccountRouter.post('/myaccount/wishlist', (req, res) => {
  //TODO - Adiciona um item a wishlist
})

module.exports = myAccountRouter
