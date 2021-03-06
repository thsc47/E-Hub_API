const SalesAd = require('../../models/SalesAd.model')

class HomePageSearch {
  static async execute(req) {
    const title = new RegExp(`${req.query.search.toLowerCase()}`)
    return await SalesAd.find({ title })
  }
}

module.exports = HomePageSearch
