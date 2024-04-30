const router = require('express').Router();
const list = require('../controllers/category-controller');
const { create } = require('../controllers/user-controller');

module.exports = (req, res) => {
    // router.get('/', list(req , res))
    router.post('/:name', create(req , res))
}