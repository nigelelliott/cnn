'use strict';

/**
 * CNN Developer Challenge - Nigel Elliott
 * index.js - main application entrypoint
 */

// Babel require hook - this is necessary to transpile any JSX code at runtime

require("babel-register");

// Application Dependencies
// --------------------------------------------------------

const application = require('main/server/application');

// --------------------------------------------------------

const port = process.env.PORT || 3000;

// --------------------------------------------------------

application.listen(port, function() {
  
    console.log(`Application server is running on port: ${port}`);
    
});
