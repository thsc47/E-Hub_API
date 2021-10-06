const { Router } = require('express');
const CreateNewAd = require('../../controllers/createNewAd.controller');
const adSaleRouter = Router();

adSaleRouter.post('/', async (req, res) => {
    try {
        const newAd = await CreateNewAd.execute(req)
        res.status(201).json(newAd)
    } catch (error) {
        res.status(500).json({error: error.message})
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

adSaleRouter.put('/ad-sale/:ID', (req, res) => {
    //     //TODO - Edita um anúncio
})

module.exports = adSaleRouter
