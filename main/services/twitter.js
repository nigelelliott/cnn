'use strict';

/**
 * Twitter Service
 * --------------------------------
 * Service for fetch the latest tweets for a given hashtag using the Twitter REST API
 * 
 */

// NPM Dependencies
// --------------------------------------------------------

const Twitter = require('twitter');
const config = require('main/config');

// --------------------------------------------------------

const client = new Twitter({
  consumer_key: 'KDi02XkQqI61FSmNJEFK9Jp0G',
  consumer_secret: 'EAepiseleaezkslCMfFJjyYaSFUHkNBjHFX6cHWnCEKs8ffNqg',
  access_token_key: '15848109-JIwrExxR5rUZh0V3MFCUajTLMxD0xUTuuwFiBrgls',
  access_token_secret: 'IuYX2SEy5gup6PD01ILm8GC9hKc6Thadb97HU56k9jDlJ'
});
 
const params = {
    q: `#${config.hashtag}`
};

const MAX_TWEETS = 20;

// --------------------------------------------------------

module.exports = {

    getTweets: (callback) => {

        // call the API...

        client.get('search/tweets', params, function(error, tweets, response) {

            if (error) {

                // if there was an error return the callback (error first)

                return callback(error, null);

            }

            // success - return callback with the response

            return callback(null, tweets.statuses.slice(0, MAX_TWEETS));

        });

    }

};
