const SalesAd = require('../../models/SalesAd.model')
class UpdateOneAd {
  static async execute(req) {
    try {
      const { id } = req.query
      const { body } = req
      
      const paths = []
      req.files.map((file) => paths.push(file.path))
      const salesAd = Object.assign({}, body, { files: paths })

      const result = await SalesAd.findOneAndUpdate({ _id: id }, salesAd, {
        new: true
      })
      console.log(result)
      return result
    } catch (error) {
      throw new error(error)
    }
  }
}

module.exports = UpdateOneAd

// try {
//   const paths = []
//   req.files.map(file => paths.push(file.path))
//   const { body } = req
//   const { id } = req.user
//   const salesAd = Object.assign({}, body, { files: paths })

//   const payload = { ...salesAd, userID: id }
//   const newad = await SalesAd.create(payload)
//   return newad
// } catch (error) {
//   console.error(error.message)

//   throw new Error(error)
// }
// }
// }
