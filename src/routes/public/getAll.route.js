const { Router } = require('express')
const GetAllAdsFromAllUsers = require('../../controllers/ads/getAllAdsfromAllUsers')
const getAllRoute = Router()

getAllRoute.get('/', async (req, res) => {
  try {
    console.log('oi')
    const result = await GetAllAdsFromAllUsers.execute()
    res.json(result)
  } catch (error) {
    console.error(error.message)
  }
})

module.exports = getAllRoute
