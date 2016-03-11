var express = require('express');
var routerService = express.Router();
var serviceProfile = require('./services/servicesProfile');

routerService.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});


routerHermes.get('/profile/:id', serviceProfile.getInfoProfile);


module.exports = routerService;