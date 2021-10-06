const SalesAd = require('../../models/SalesAd.model')
class DeleteOneAd {
  static async execute(req) {
    try {
      const { id } = req.query
      const result = await SalesAd.findByIdAndDelete({ _id:id })
      return result 
    } catch (error) {
      throw new error(error)
    }
  }
}
module.exports = DeleteOneAd
