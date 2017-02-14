var React = require('react');
var styles = require('../styles');

var Footer = function() {
  return (
    <div style={styles.footer} className="text-center">
      <p style={styles.footerPara}>created by <a href="http://www.jeffslutzky.com">Jeff Slutzky</a></p>
      <p style={styles.footerPara}>with React <a href="https://github.com/jeffslutzky/etymologizer-react">(code)</a> and a Rails API <a href="https://github.com/jeffslutzky/etymologizer-rails-api">(code)</a></p>
    </div>
  )
};

module.exports = Footer;
