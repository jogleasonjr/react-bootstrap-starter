(function () {
    var React = require('react'),
        ReactDOM = require('react-dom')
        injectTapEventPlugin = require("react-tap-event-plugin"),
        Main = require('./components/main.jsx');

    //Needed for React Developer Tools
    window.React = React;

    //Needed for onTouchTap
    //Can go away when react 1.0 release
    //Check this repo:
    //https://github.com/zilverline/react-tap-event-plugin
    injectTapEventPlugin();

    // Render the main app react component into the document body.https://facebook.github.io/react/blog/2015/10/01/react-render-and-top-level-api.html
    ReactDOM.render(<Main />, document.body);

})();