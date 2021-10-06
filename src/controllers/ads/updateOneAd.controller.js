const SalesAd = require('../../models/SalesAd.model')
class UpdateOneAd {
  static async execute(req) {
    try {
      const { id } = req.query
      const { body } = req

      const result = await SalesAd.findOneAndUpdate({ _id: id }, body, {new: true})
      return result
    } catch (error) {
      throw new error(error)
    }
  }
}

module.exports = UpdateOneAd
