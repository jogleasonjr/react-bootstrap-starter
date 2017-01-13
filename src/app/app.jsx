(function () {
    var React = require('react'),
        ReactDOM = require('react-dom')
        Main = require('./components/main.jsx');

    //Needed for React Developer Tools
    window.React = React;

    // Render the main app react component into the document body.https://facebook.github.io/react/blog/2015/10/01/react-render-and-top-level-api.html
    ReactDOM.render(<Main />, document.body);

})();