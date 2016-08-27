'use strict';

/**
 * Tweet List Component
 * --------------------------------
 * Main component displays the hashtag and tweets
 * 
 */

// NPM Dependencies
// --------------------------------------------------------

const React = require('react');

// Components
// --------------------------------------------------------

const TweetListItem = require('main/components/tweet-list-item');

// --------------------------------------------------------

class TweetList extends React.Component {

    constructor(props) {

        super(props);

        // initial component state
        
        this.state = {
            tweets: props.tweets,
            counter: 10
        };

    }

    componentDidMount() {

        // trigger countdown at specified interval

        setInterval(this.countdown.bind(this), 1000);

    }

    countdown() {

        // countdown called every second

        if(this.state.counter === 0) {

            // if counter has reached 0 then fetch new tweets and reset counter

            this.fetchNewTweets();

            this.setState({
                counter: 10
            });

        } else {

            // decrement counter

            this.setState({
                counter: --this.state.counter
            });

        }

    }

    fetchNewTweets() {

        // fetch new tweets using fetch API (only available in latest browsers - see http://caniuse.com/#feat=fetch)

        if(window && window.fetch) {

            fetch('/tweets')
            .then((response) => response.json())
            .then((tweets) => this.setState({tweets: tweets}));

        }

    }

    render() {

        return (
            <section className="tweets">

                <h2 className="tweets__header">Latest tweets for #{this.props.hashtag}</h2>

                <p className="tweets__counter">Updating in {this.state.counter}s...</p>

                <ul className="tweets__list">

                    {this.state.tweets.map((tweet, i) => <TweetListItem key={tweet.id} tweet={tweet} parity={(i % 2 === 0) ? 'even' : 'odd'} />)}

                </ul>

            </section>
        )

    }

}

TweetList.propTypes = {

    hashtag: React.PropTypes.string.isRequired,
    tweets: React.PropTypes.array.isRequired

}

module.exports = TweetList;