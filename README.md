# CNN Developer Challenge

## Description

This is a small universal React application that displays tweets for a given hashtag.  The application requests the latest tweets using the Twitter REST API and renders the response to HTML on the server.  On the client, the data is rehydrated and the same components that render the data on the server are used to poll an internal API endpoint for any further new tweets every 10 seconds.

## Installation

1. Run `npm install` to install dependencies.
2. Run `npm run build` to build the client js.
3. Run `npm start` to run the application. The application will be running at http://localhost:3333
4. Run `npm test` to run the unit tests.

## Assumptions

- Liberal use of ES6 syntax is ok... (requires Node v4 or higher to run)
- Relies on some modern browser features e.g. Fetch API.  We could use a polyfill for other browsers in a real-world scenario.
- The app is structured in such a way that it would be easy to expand in the future.  Some of the folder structure may be overkill for such a small app.
- The test directory is just a brief overview of how I would setup and unit test the components.  To more thoroughly test we would probably have unit tests for the server code and also some integration tests.

