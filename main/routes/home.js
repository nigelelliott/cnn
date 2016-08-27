'use strict';

/**
 * Home Router
 * --------------------------------
 * Defines the main homepage route
 * 
 */

// NPM Dependencies
// --------------------------------------------------------

const fs = require('fs');
const path = require('path');
const express  = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// Application Dependencies
// --------------------------------------------------------

const config = require('main/config');
const twitter = require('main/services/twitter');

// Components
// --------------------------------------------------------

const TweetList = require('main/components/tweet-list');

// --------------------------------------------------------

const router   = express.Router();
let headerPartial = fs.readFileSync(path.resolve('main/partials/header.html')).toString();
let footerPartial = fs.readFileSync(path.resolve('main/partials/footer.html')).toString();

router.get('/', (request, response, error) => {

    // fetch tweets using api service

    twitter.getTweets((error, data) => {

        if(error) {

            response.status(500).send(`Error: ${error[0].message}`);

        } else {

            // render the response into the Tweet List component

            let content = ReactDOMServer.renderToString(<TweetList hashtag={config.hashtag} tweets={data} />);

            // serialize the data and insert into html so that it can be rehydrated on the client

            footerPartial = footerPartial.replace('{{appStateTweets}}', JSON.stringify(data));
            footerPartial = footerPartial.replace('{{appStateHashtag}}', config.hashtag);

            // send response

            response.status(200).send(`${headerPartial}${content}${footerPartial}`);

        }

    });

});

module.exports = router;