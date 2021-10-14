const User = require('../../models/User.model')
class SaveProfilePic {
  static async execute(req) {
    const { path } = req.file
    const { id } = req.user
    try {
      const addPic = await User.findByIdAndUpdate(
        {_id:id},
        {photo: path},
        {new: true}
      )
      return addPic
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = SaveProfilePic
