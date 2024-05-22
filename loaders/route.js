const express = require('express');
const router = express.Router();
const account = require('../controllers/account-controller')




exports.init = async function(app)
{
    app.use('/account', account);
}