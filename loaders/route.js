const express = require('express');
const router = express.Router();
const account = require('../controllers/account-controller')
const budget = require('../controllers/budget-controller')
const department =  require('../controllers/department-controller')


exports.init = async function(app)
{
    app.use('/account', account);
    app.use('/expense',budget)
   // app.use('department',department)
   
}