'use strict';

// NPM Dependencies
// --------------------------------------------------------

const express = require('express');
const path = require('path');

// Application Dependencies
// --------------------------------------------------------

const home = require('main/routes/home');
const tweets = require('main/routes/tweets');

// --------------------------------------------------------

const app = express();

// serve the static content from /static

app.use('/static', express.static(path.resolve('main/static')));

// the main application routes are defined in separate files
// this is probably overkill for a small app but makes 
// the project more maintainable as it grows

app.use(home);
app.use(tweets);

module.exports = app;