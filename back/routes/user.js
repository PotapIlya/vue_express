const express = require('express');
const route = express();


const userController = require('../controllers/userController');



route.get('/user', userController.all );


module.exports = route;
