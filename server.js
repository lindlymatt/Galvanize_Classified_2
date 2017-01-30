'use strict';

// Require dependencies, establish server.
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const port = process.env.PORT || 3000;

// Run the server through the body and cookie parser.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Run the server through the public folder, if necessary.
app.use(express.static(path.join(__dirname, 'public')));

// Run the server through the .env configurations on the server.
require('dotenv').config();

// Require and navigate through our routes.
const messages = require('./routes/classifieds');
app.use('/classifieds', messages);

// Wildcard Route, send the index back if nothing matches in classifieds.
app.use('*', function (req, res, next) {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') })
})

app.listen(port, () => {
  console.log(`Accepting requests on Port ${port}...`);
});

module.exports = app;
