'use strict';

/**
 * Tweet List Item Component
 * --------------------------------
 * Displays an individual tweet
 * 
 */

// NPM Dependencies
// --------------------------------------------------------

const React = require('react');
const moment = require('moment');

// --------------------------------------------------------

class TweetListItem extends React.Component {

    constructor(props) {

        super(props);

        // set initial component state

        this.state = {
            isLoading: true
        };

    }

    componentDidMount() {

        // when the component has loaded remove the loading class after a short timeout
        // this enables us to show a css transition on the client

        setTimeout(() => this.setState({isLoading: false}), 10);

    }

    shouldComponentUpdate(nextProps, nextState) {

        if(nextState.isLoading !== this.state.isLoading) {

            return true;

        }

        return false;

    }

    render() {

        let createdDate = moment(new Date(this.props.tweet.created_at)).format('DD/MM/YYYY H:mm');
        let loadingClassName = this.state.isLoading ? ' tweet--loading' : '';

        return (
            <li className={`tweet tweet--${this.props.parity}${loadingClassName}`}>
                <div className="tweet__wrapper">
                    <img src={this.props.tweet.user.profile_image_url} alt={`Profile image for ${this.props.tweet.user.screen_name}`} className="tweet__img" />
                    <h3 className="tweet__meta">By <span className="tweet__name">{this.props.tweet.user.screen_name}</span> at <span className="tweet__date">{createdDate}</span></h3>
                    <p className="tweet__body">{this.props.tweet.text}</p>
                </div>
            </li>
        )

    }

}

TweetListItem.propTypes = {

    tweet: React.PropTypes.object.isRequired,
    parity: React.PropTypes.string.isRequired

}

module.exports = TweetListItem;