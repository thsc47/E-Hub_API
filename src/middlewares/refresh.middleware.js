const User = require('../models/User.model')

async function verificaRefreshToken(refreshToken) {
  if (!refreshToken) {
    throw new Error('Refresh não enviado!')
  }
  const id = await allowlistRefreshToken.buscaValor(refreshToken)
  if (!id) {
    throw new Error('Refresh token inválido!')
  }
  return id
}

async function invalidaRefreshToken(refreshToken) {
  await allowlistRefreshToken.deleta(refreshToken)
}

module.exports = {
  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.body
      const id = await verificaRefreshToken(refreshToken)
      await invalidaRefreshToken(refreshToken)
      req.user = await User.findById({_id:id})
      return next()
    } catch (erro) {
      return res.status(500).json({ erro: erro.message })
    }
  },
}
