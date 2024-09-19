const express = require('express');
const route = express.Router();

const userController = require('../app/controllers/UserController');

route.get('/:id/edit', userController.edit);
route.post('/store', userController.store);
route.put('/:id', userController.update);
route.delete('/:id', userController.delete)

module.exports = route;