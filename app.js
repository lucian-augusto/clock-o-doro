// jshint esversion:6

// Setting PORT
const port = process.env.PORT || 3000;

// Requiring Packages
const express = require('express');
const bodyParser = require('body-parser');

// Setting Up App constants
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');

// Declaring global variables/constants
const items = [];

// Setting up 'home' route
app.route('/')

  // Setting up get request
  .get(function(req, res) {
    res.render('index', {
      newListItem: items
    });
  })

  // Setting up post request
  .post(function(req, res) {
    items.push(req.body.item);
    res.redirect('/');
  });

// Setting up Listening Port
app.listen(port, function() {
  console.log('Server running on port ' + port + '.');
});
