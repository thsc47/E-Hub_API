const { Router } = require('express')

const messageRouter = Router()

messageRouter.get('/', async (req, res) => {
  try {
    const newAd = await CreateNewAd.execute(req)
    res.status(201).json(newAd)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

messageRouter.post('/', async (req, res) => {
  try {
    const ads = await GetAllAds.execute(req)
    res.json(ads)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = messageRouter
