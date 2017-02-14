var React = require('react');
var styles = require('../styles');

var NavBar = function() {
  return (
    <nav style={styles.navbar} className="navbar navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <a style={styles.navText} className="navbar-brand" href="/">
            Etymologizer: Find the origins of words
          </a>
        </div>
      </div>
    </nav>
  )
};

module.exports = NavBar;
