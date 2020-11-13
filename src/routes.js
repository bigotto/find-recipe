const express = require('express');
const FindRecipe = require('./controllers/FindRecipe');

const routes = express.Router();

routes.get('/recipes', FindRecipe.find);

module.exports = routes;