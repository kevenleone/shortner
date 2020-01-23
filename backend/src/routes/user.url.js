const express = require('express')
const user = require('../controllers/user.controller')
const Router = express.Router();

Router.delete('/:id', user.delete);
Router.get('/', user.getall);
Router.get('/:id', user.get);
Router.put('/:id', user.put);
Router.post('/', user.post);
Router.post('/login', user.login);

module.exports = Router;

