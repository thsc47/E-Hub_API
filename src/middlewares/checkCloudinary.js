const checkCloudinary = (req,res,next) => {
    const {files} = req.body
    next()
}

module.exports = checkCloudinary