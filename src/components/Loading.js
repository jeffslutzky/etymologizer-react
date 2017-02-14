var React = require('react');
import spinner from '../images/spinner.gif'

var Loading = React.createClass({
  render: function() {
    return <img src={spinner} alt="Loading..."/>
  }
});

module.exports = Loading;
