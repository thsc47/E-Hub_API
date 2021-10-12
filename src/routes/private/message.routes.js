const { Router } = require('express')
const GetMessageRouter = require('../../controllers/message/getMessage.controller')
const PostMessageRouter = require('../../controllers/message/postMessage.controller')

const messageRouter = Router()

messageRouter.get('/:id', async (req, res) => {
  try {
    const result = await GetMessageRouter.execute(req)
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

messageRouter.post('/', async (req, res) => {
  try {
    const result =  await PostMessageRouter.execute(req)
    res.status(201).json(result)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = messageRouter
