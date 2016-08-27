'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const TweetList = require('main/components/tweet-list');

let state = appState;

ReactDOM.render(
    <TweetList hashtag={state.hashtag} tweets={state.tweets} />,
    document.getElementById('app')
);