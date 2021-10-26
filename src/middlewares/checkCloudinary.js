const checkCloudinary = (req,res,next) => {
    const {files} = req.body
    console.log(files)
    next()
}

module.exports = checkCloudinary