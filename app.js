// jshint esversion:6

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

// Setting up 'home' get route
app.get('/', function(req, res) {
  res.render('index', {
    newListItem: items
  });
});

app.post('/', function(req, res) {
  items.push(req.body.newItem);
  res.redirect('/');
});

// Setting up Listening Port
app.listen(process.env.PORT || 3000, function() {
  console.log('Server running on port 3000.');
});
