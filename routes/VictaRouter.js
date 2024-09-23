const express = require('express');
const VictaRouter = express.Router();
const hp = require('../controller/VictaController');


VictaRouter.get('/', hp.con);
VictaRouter.get('/hot-deals', (req, res) => {
    res.render('hot-deals');
});
VictaRouter.get('/categories', (req, res) => {
    res.render('categories');
});
VictaRouter.get('/laptops', (req, res) => {
    res.render('laptops');
});
VictaRouter.get('/smartphones', (req, res) => {
    res.render('smartphones');
});
VictaRouter.get('/cameras', (req, res) => {
    res.render('cameras');
});
VictaRouter.get('/accessories', (req, res) => {
    res.render('accessories');
});

module.exports = VictaRouter;
