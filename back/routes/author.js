const express = require('express');
const route = express();


const authorController = require('../controllers/authorController');



route.get('/author', authorController.all );


module.exports = route;
