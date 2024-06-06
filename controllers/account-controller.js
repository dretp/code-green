const express = require('express');
const router = express.Router();
const db = require('../firebase').db;
const svc = require('../services/test-service');


router.get('/',  async (req,res) =>
{
    const resp = await svc.testService();



    res.send(resp);
});


router.get('/friends', async (req, res) => {
    const peopleRef = db.collection('people').doc('associates')
    const doc = await peopleRef.get()
    if (!doc.exists) {
        return res.sendStatus(400)
    }

    res.status(200).send(doc.data())
})


router.post('/data', async function (req, res) {

    const post = await svc.testInsert(req.body.id, req.body.name);

   res.status(200).send(post)
})



router.post('/test', async (req, res) => {



    const peopleRef = db.collection('people').doc('associates')


        const docData = {
            "name": req.body.name,
            "status": req.body.status,
        }



        peopleRef.set({docData})

    // friends[name] = status
    res.status(200);
});





module.exports = router;