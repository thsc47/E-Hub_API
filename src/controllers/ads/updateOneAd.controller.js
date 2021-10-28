const SalesAd = require('../../models/SalesAd.model')

class UpdateOneAd {
  static async execute(req) {
    try {
      const { id } = req.query
      const oldAd = await SalesAd.findById({ _id: id })
      const { body } = req
      const { files } = req
      const paths = []
      if (files.length > 0) {
        files.map((file) => paths.push(file.path))
        const lowerTitle = body.title.toLowerCase()
        const salesAd = Object.assign({}, body, { files: paths }, {title: lowerTitle})
        console.log(salesAd)
        const result = await SalesAd.findOneAndUpdate({ _id: id }, salesAd, {
          new: true
        })
        return result
      } else {
        const lowerTitle = body.title.toLowerCase()
        const newAd = Object.assign({}, body, { files: oldAd.files }, {title: lowerTitle})
        const result = await SalesAd.findOneAndUpdate({ _id: id }, newAd, {
          new: true
        })
        return result
      }

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

// if (req.files) {
//   req.files.map((file) => paths.push(file.path))
//   const salesAd = Object.assign({}, body, { files: paths })
//   const result = await SalesAd.findOneAndUpdate({ _id: id }, salesAd, {
//     new: true
//   })
//   return result
// }
