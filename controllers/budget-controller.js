const express = require('express');
const router = express.Router();
const db = require('../firebase').db;
const svc = require('../services/budget-service');



router.get('/',  async (req,res) =>
    {
        const resp = await svc.startingBudget();

        res.status(200).send(resp);
    });


router.post('/spending', async (req,res) =>{

    const spending = req.body.spending;

    const resp = await svc.spendingBudget(spending);

    res.status(200).send(resp);
})



    module.exports = router;