var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

var Etymology = React.createClass({
  render: function() {
    var entry = this.props.entry;
    var etymologyHTML = function() {
      return {__html: entry.etymology};
    };
    if (this.props.displayed) {
      return (
          <div style={styles.displayEtymology} className="col-xs-12 col-lg-6">
            <div dangerouslySetInnerHTML={etymologyHTML()} />
          </div>
      )
    } else {
      return null;
    }
  }
});

Etymology.propTypes = {
  displayed: PropTypes.bool.isRequired,
  entry: PropTypes.object.isRequired
}

module.exports = Etymology;
