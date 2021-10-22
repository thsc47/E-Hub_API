const SalesAd = require('../../models/SalesAd.model')
const SaveAdFile = require('../ads/AddNewAdImage.controller')

class CreateNewAd {
  static async execute(req) {
    try {
      const paths = []
      req.files.map(file => paths.push(file.path))
      const { body } = req
      const { id } = req.user
      const salesAd = Object.assign({}, body, { files: paths })

      const payload = { ...salesAd, userID: id }
      const newad = await SalesAd.create(payload)
      return newad
    } catch (error) {
      console.error(error.message)

      throw new Error(error)
    }
  }
}

module.exports = CreateNewAd

// const test = await SaveAdFile.execute(pics)
//       console.log(test)