const User = require('../../models/User.model')
class GetWishlist {
  static async execute(req) {
    try {
      const { id } = req.user
      const result = await User.findById({ _id: id })
      return result.wishlist
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = GetWishlist
