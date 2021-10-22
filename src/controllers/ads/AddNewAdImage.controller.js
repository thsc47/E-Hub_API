const express = require('express')
const app = express()
const SalesAd = require('../../models/SalesAd.model')
const uploadImage = require('../../../config/cloudinary.config')

class SaveAdFile {
  static async execute(id, files) {
    const req = app.use(uploadImage.array(files))
      const paths = []
      files.map(file => paths.push(file.preview))
      try {
        const addPic = await SalesAd.findByIdAndUpdate(
          {_id:id},
          {files: paths},
          {new: true}
        )
        return addPic
      } catch (error) {
        console.error(error.message)
        throw new Error(error)
      }
  }
}

module.exports = SaveAdFile
