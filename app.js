const express = require('express');
const app = express();
const recipes = require('./recipesData.json');

//Route to get the whole list of recipes
app.get('/', (req, res) => {
    res.json(recipes)
  });

//Route for Spaghetti Bolognese recipe
  app.get('/spaghetti-bolognese', (req, res) => {
    res.json(recipes[0])
  });

//Route for Caesar Salad recipe
  app.get('/caesar-salad', (req, res) => {
    res.json(recipes[1])
  });

//Route for Beef Tacos recipe
  app.get('/beef-tacos', (req, res) => {
    res.json(recipes[2])
  });

//Route for Chicken Stir-Fry recipe
  app.get('/chicken-stir-fry', (req, res) => {
    res.json(recipes[3])
  });

//Route for API usage instructions
  app.get('/info', (req, res) => {
    res.send('Welcome to the recipe API!')
  });

// Start the server
  app.listen(5000, () => {
    console.log('Server is listening on port 5000')
  });