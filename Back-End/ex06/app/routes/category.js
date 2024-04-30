const router = require('express').Router();
const list = require('../controllers/category-controller');

module.exports = (req,res) => {
    router.use('/', list(req,res));
}