const { Router } = require('express')
const uploadImage = require('../../../config/cloudinary.config')
const CreateNewAd = require('../../controllers/ads/createNewAd.controller')
const DeleteOneAd = require('../../controllers/ads/deleteOneAd.controller')
const GetAllAds = require('../../controllers/ads/getAllAds.controller')
const authMiddleware  = require('../../middlewares/auth.middleware')
const GetOneAd = require('../../controllers/ads/getOneAd.controller')
const UpdateOneAd = require('../../controllers/ads/updateOneAd.controller')
const adSaleRouter = Router()

adSaleRouter.post('/new',authMiddleware, uploadImage.array('files',),async (req, res) => {
  try {
    const newAd = await CreateNewAd.execute(req)
    res.status(201).json(newAd)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

adSaleRouter.post('/new-image',authMiddleware, uploadImage.array('files'), async (req, res) => {
  try {
    const newAd = await AddNewAdImage.execute(req)
    res.status(201).json(newAd)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

adSaleRouter.get('/my/all',authMiddleware, async (req, res) => {
  try {
    const ads = await GetAllAds.execute(req)
    res.json(ads)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

adSaleRouter.get('/my/search', async (req, res) => {
  try {
    const result = await GetOneAd.execute(req)
    res.json(result)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
})

adSaleRouter.put('/my/edit',authMiddleware, uploadImage.array('files'), async (req, res) => {
  try {
    const result = await UpdateOneAd.execute(req)
    res.status(201).json(result)
  } catch (error) {
    res.status(500).json(result.message)
  }
})

adSaleRouter.delete('/my/delete',authMiddleware, async (req, res) => {
  try {
    await DeleteOneAd.execute(req)
    res.status(204).send()
  } catch (error) {
    res.status(500).json(error.message)
  }
})

module.exports = adSaleRouter
