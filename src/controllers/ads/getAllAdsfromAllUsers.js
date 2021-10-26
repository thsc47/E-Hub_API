const SalesAd = require('../../models/SalesAd.model')
class GetAllAdsFromAllUsers {
  static async execute() {
    try {
      const result = await SalesAd.find().populate('userID')
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}
module.exports = GetAllAdsFromAllUsers
