const Jwt = require('../controllers/auth/JWT')

const Auth = async (req, res, next) => {
  const auth = req.get('Authorization')
  if (!auth) {
    res.status(401).json({ error: 'lack of token' })
  }
  const [, token] = auth.split(' ')
  try {
    const decodedToken = await Jwt.ValidToken(token)
    req.user = { ...decodedToken, token: token }
    next()
  } catch (error) {
    res.status(401).json({ error: error.message })
  }
}

module.exports = Auth
