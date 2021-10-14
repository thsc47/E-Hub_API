const SalesAd = require("../../models/SalesAd.model")
class CreateNewAd {
    static async execute(req) {
        try {
            const { id } = req.user
            const payload = { ...req.body, userID: id }
            await SalesAd.create(payload)
            return payload
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = CreateNewAd