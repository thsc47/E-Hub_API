const { Router } = require('express')
const MessageRouter = require('../../controllers/message/message.controller')

const messageRouter = Router()

messageRouter.get('/', async (req, res) => {
  try {
    MessageRouter.execute()
    res.send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

messageRouter.post('/', async (req, res) => {
  try {
    res.send()
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = messageRouter
