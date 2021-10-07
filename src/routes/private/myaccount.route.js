const { Router } = require('express')
const DeleteAUser = require('../../controllers/myaccount/deleteAUser.controller')
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

myAccountRouter.delete('/delete',async (req, res) => {
  try {
    await DeleteAUser.execute(req)
    res.status(204).send()
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

myAccountRouter.get('/myaccount/wishlist', (req, res) => {
  //TODO - Devolve a wishlist do usuário
})

myAccountRouter.post('/myaccount/wishlist', (req, res) => {
  //TODO - Adiciona um item a wishlist
})

module.exports = myAccountRouter
