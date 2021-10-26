const SalesAD = require('../../models/SalesAd.model')

class GetAllAds {
    static async execute(req) {
        try {
            const { id } = req.user
            const result = await SalesAD.find({ userID: id }).populate('userID')
            return result
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = GetAllAds