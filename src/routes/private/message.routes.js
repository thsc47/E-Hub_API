const { Router } = require('express')
const GetMessageRouter = require('../../controllers/message/getMessage.controller')
const PostMessageRouter = require('../../controllers/message/postMessage.controller')

const messageRouter = Router()

messageRouter.get('/', async (req, res) => {
  try {
    GetMessageRouter.execute()
    res.send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

messageRouter.post('/', async (req, res) => {
  try {
    PostMessageRouter.execute()
    res.send()
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = messageRouter
