const express = require('express');
const cors = require('cors');
//const middleWare = require('./rs-middleware');


exports.init = async(app) => {
    let options = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'POST, PUT, GET, PATCH, DELETE, OPTIONS'
    };

    // app.options('*', cors(options, req, res, next));

    // Ping is useed to awake the heroku server
    app.get('/ping', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, GET, PATCH, DELETE, OPTIONS');

        res.status(200).send(
            {
                error: false,
                errMsg: "",
                data: 'tidbits API Ping Success'
            }
        )});
    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });
    app.enable("trust proxy");

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.options('*', cors());
    app.use((req, res, next) => {

        let options = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Methods': 'POST, PUT, GET, PATCH, DELETE, OPTIONS'
        };

        app.options('*', cors(options, req, res, next));

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, GET, PATCH, DELETE, OPTIONS');

        next();
    });

    /*
    app.use((req, res, next) => {
        middleWare.rsMiddleWare(req, res, next);
    });
*/
    return app;
};
