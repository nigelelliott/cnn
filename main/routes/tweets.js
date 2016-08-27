'use strict';

/**
 * Tweets Router
 * --------------------------------
 * Defines the tweets api route
 * This simply returns the list of tweets as a JSON object, used by the client to poll and fetch new data
 * 
 */

// NPM Dependencies
// --------------------------------------------------------

const express  = require('express');

// Application Dependencies
// --------------------------------------------------------

const twitter = require('main/services/twitter');

// --------------------------------------------------------

const router   = express.Router();

// --------------------------------------------------------

router.get('/tweets', (request, response, error) => {

    // fetch tweets using api service
    
    twitter.getTweets((error, data) => {

        if(error) {

            response.status(500).send('error!');

        } else {

            response.status(200).send(data);

        }

    });

});

module.exports = router;