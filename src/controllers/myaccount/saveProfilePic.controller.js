const User = require('../../models/User.model')
class SaveProfilePic {
  static async execute(req) {
    const paths = []
    const { id } = req.user
    req.files.map(file => paths.push(file.path))
    try {
      const addPic = await User.findByIdAndUpdate(
        {_id:id},
        {photo: paths},
        {new: true}
      )
      return addPic
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = SaveProfilePic