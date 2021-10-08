const { Router } = require('express')

const logoutRouter = Router()

logoutRouter.post('/logout', async (req, res) => {
  try {
    res.send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = logoutRouter
