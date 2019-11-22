// jshint esversion:6

// Setting PORT
const port = process.env.PORT || 3000;

// Requiring Packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Setting Up App constants
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');

// // Connecting to the database
// mongoose.connect(dbAddress + dbName, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// });

// Declaring global variables/constants
const items = [];

// // Creating Schemas
// const listItemSchema = new mongoose.Schema({
//   name: String
// });
//
// // const listSchema = new mongoose.Schema({
// //   items: [itemSchema]
// // });
//
// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: [true, 'You must enter an email address.']
//   },
//   password: {
//     type: String,
//     required: [true, 'Please enter a password.']
//   },
//   firstName: {
//     type: String,
//     required: [true, 'Please enter your first name.']
//   },
//   lastName: {
//     type: String,
//     required: [true, 'Please enter your last name.']
//   },
//   list: [listItemSchema]
// });
//
// // Creating Models
// const Item = new mongoose.model('Item', listItemSchema);
//
// // const List = new mongoose.model('List', listSchema);
//
// const User = new mongoose.model('User', userSchema);

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
