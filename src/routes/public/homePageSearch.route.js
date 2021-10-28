const { Router } = require('express')
const homePageSearch = require('../../controllers/search/HomePageSearch.controller')
const Search = Router()

Search.get('/', async (req, res) => {
  const result = await homePageSearch.execute(req)
  res.json(result)
})

module.exports = Search
