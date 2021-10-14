const { Router } = require('express')
const uploadImage = require('../../../config/cloudinary.config')
const DeleteAUser = require('../../controllers/myaccount/deleteAUser.controller')
const getAllData = require('../../controllers/myaccount/getAllData.controller')
const SaveProfilePic = require('../../controllers/myaccount/saveProfilePic.controller')
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

myAccountRouter.put(
  '/upload-profile-pic',
  uploadImage.single('profile-pic'),
  async (req, res) => {
    try {
      const addPic = await SaveProfilePic.execute(req)
      res.status(201).json(addPic)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
)

myAccountRouter.delete('/delete', async (req, res) => {
  try {
    await DeleteAUser.execute(req)
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = myAccountRouter
