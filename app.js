// jshint esversion:6

// Setting PORT
const port = process.env.PORT || 3001;

// Requiring Packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Setting Up App constants
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Declaring global variables/constants
// const items = [];

// Handle React routing, return all requests to React app
app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// Setting up Listening Port
app.listen(port, function() {
  console.log('Server running on port ' + port + '.');
});
