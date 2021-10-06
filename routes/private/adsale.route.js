const { Router } = require('express');
const CreateNewAd = require('../../controllers/ads/createNewAd.controller');
const GetAllAds = require('../../controllers/ads/getAllAds.controller');
const adSaleRouter = Router();

adSaleRouter.post('/new', async (req, res) => {
    try {
        const newAd = await CreateNewAd.execute(req)
        res.status(201).json(newAd)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

adSaleRouter.get('/my/all', async (req, res) => {
    try {
        const ads = await GetAllAds.execute(req)
        res.json(ads)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


adSaleRouter.get('/ad-sale/:ID', (req, res) => {
    //     //TODO - Devolve um anúncio
})

adSaleRouter.get('/ad-sale/all', (req, res) => {
    //     //TODO - Devolve todos anúncio [Deve ser chamada apenas pelo front-end]
})

adSaleRouter.put('/ad-sale/:ID', (req, res) => {
    //     //TODO - Edita um anúncio
})


module.exports = adSaleRouter
