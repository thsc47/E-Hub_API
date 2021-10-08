const { Router } = require('express')
const Logout = require('../../controllers/logout/logout.controller')

const logoutRouter = Router()

logoutRouter.get('/', async (req, res) => {
  try {
    await Logout.execute(req)
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = logoutRouter
