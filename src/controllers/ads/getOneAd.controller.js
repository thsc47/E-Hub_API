const SalesAd = require('../../models/SalesAd.model')
class GetOneAd {
  static async execute(req) {
    try {
      const { id } = req.query
      const result = await SalesAd.findById({ _id: id }).populate('userID')
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = GetOneAd
