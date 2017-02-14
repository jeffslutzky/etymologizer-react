var React = require('react');
var styles = require('../styles');
var PropTypes = React.PropTypes;
var Etymology = require('../components/Etymology');

var Word = React.createClass({
  getInitialState: function() {
    return {
      displayed: false
    }
  },
  handleMouseOver: function() {
    this.setState({
      displayed: true
    })
  },
  handleMouseOut: function() {
    this.setState({
      displayed: false
    })
  },
  render: function() {
    var entry = this.props.entry;
    return (
      <div>
        <h4 style={styles[entry.language]} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} >
          {entry.word}
        </h4>
        <Etymology entry={entry} displayed={this.state.displayed} />
      </div>
    )
  }
});

Word.propTypes = {
  entry: PropTypes.object.isRequired
}

module.exports = Word;
