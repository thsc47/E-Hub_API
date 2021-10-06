const { Router } = require('express')

const myAccountRouter = Router()

myAccountRouter.get('/myaccount', (req, res) => {
  //TODO - Devolve todos os dados do usuário.
})

myAccountRouter.put('/myaccount/edit/:ID', (req, res) => {
  //TODO - Atualiza o id desejado
})

myAccountRouter.get('/myaccount/wishlist', (req, res) => {
  //TODO - Devolve a wishlist do usuário
})

myAccountRouter.post('/myaccount/wishlist', (req, res) => {
  //TODO - Adiciona um item a wishlist
})

module.exports = myAccountRouter
