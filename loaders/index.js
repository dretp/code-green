const express = require('./express');
const routes = require('./route');


exports.init = async (app) => {
    //Connect to mysql database
    // await db.connect();
    console.log('Database Connection Established');

    //Express pipeline establishment
    await express.init(app);
    console.log('Express Initialized');

    //Routes Initialization
    await routes.init(app)
    console.log('Routes Initialized');

};