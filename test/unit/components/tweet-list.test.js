'use strict';

/**
 * Example tests for Tweet List React component
 * 
 */

// NPM Dependencies
// --------------------------------------------------------

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const expect = require('chai').expect;
const cheerio = require('cheerio');

// Application Components
// --------------------------------------------------------

const TweetList = require('main/components/tweet-list');

// Test Mocks
// --------------------------------------------------------

const mockTweetData = [
    {
        id: 1,
        created_at: 'Sat Aug 27 14:00:00 +0000 2016',
        text: 'test tweet',
        user: {
            screen_name: 'test user 1',
            profile_image_url: 'http://placehold.it/100x100'
        }
    },
    {
        id: 2,
        created_at: 'Sat Aug 27 14:10:00 +0000 2016',
        text: 'test tweet',
        user: {
            screen_name: 'test user 2',
            profile_image_url: 'http://placehold.it/100x100'
        }
    }
];

// --------------------------------------------------------

describe('TweetList Component', function() {

    it('should display the correct title and hashtag', function() {

        // render react component

        let component = ReactDOMServer.renderToString(
            <TweetList hashtag='USElection' tweets={mockTweetData} />
        );

        // render into fake dom

        let $ = cheerio.load(component);

        // assert

        expect($('.tweets__header').text()).to.equal('Latest tweets for #USElection');

    });

    // --------------------------------------------------------

    it('should render 2 tweets', function() {

        // render react component

        let component = ReactDOMServer.renderToString(
            <TweetList hashtag='USElection' tweets={mockTweetData} />
        );

        // render into fake dom

        let $ = cheerio.load(component);

        // assert

        expect($('.tweets__list').children().length).to.equal(2);

    });

    // --------------------------------------------------------

    it('should not render any tweets when no data is supplied', function() {

        // render react component

        let component = ReactDOMServer.renderToString(
            <TweetList hashtag='USElection' tweets={[]} />
        );

        // render into fake dom

        let $ = cheerio.load(component);

        // assert

        expect($('.tweets__list').children().length).to.equal(0);

    });

});