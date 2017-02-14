var React = require('react');
var Footer = require('./Footer');
var NavBar = require('./NavBar');

var Main = function(props) {
  return (
    <div>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  )
};

module.exports = Main;
