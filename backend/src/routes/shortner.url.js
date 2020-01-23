const express = require('express')
const shortner = require('../controllers/shortner.controller')
const Router = express.Router();

Router.delete('/:id', shortner.delete);
Router.get('/', shortner.getall);
Router.get('/:id', shortner.get);
Router.put('/:id', shortner.put);
Router.post('/', shortner.post);

module.exports = Router;

