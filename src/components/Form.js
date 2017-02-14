var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

var Form = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <textarea className="form-control" value={this.props.text} onChange={this.props.onChange} rows="3" cols="50" id="textArea" placeholder="Enter text here" />
        <button className="btn btn-primary" style={styles.button}>
        Show etymology
        </button>
      </form>
    )
  }
});

Form.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

module.exports = Form;
