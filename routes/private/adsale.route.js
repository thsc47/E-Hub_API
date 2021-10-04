const {Router} = require('express');
const adSaleRouter = Router();

adSaleRouter.post('/ad-sale', (req,res)=>{
    //TODO - Cria um anúncio
})

adSaleRouter.get('/ad-sale/:ID', (req,res)=>{
    //TODO - Devolve um anúncio
})

adSaleRouter.get('/ad-sale/all', (req,res)=>{
    //TODO - Devolve todos anúncio [Deve ser chamada apenas pelo front-end]
})

adSaleRouter.put('/ad-sale/:ID', (req,res)=>{
    //TODO - Edita um anúncio
})

adSaleRouter.put('/ad-sale/:ID', (req,res)=>{
    //TODO - Edita um anúncio
})

module.exports = adSaleRouter
