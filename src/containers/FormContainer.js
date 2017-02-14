var React = require('react');
var Form = require('../components/Form')
var PropTypes = React.PropTypes;

var FormContainer = React.createClass({
  getInitialState: function() {
    return {
      text: '',
    }
  },
  handleChange: function(e) {
    this.setState({
      text: e.target.value
    })
  },
  handleSubmit: function() {
    this.props.handleFormSubmit(this.state.text);
  },
  render: function() {
    return (
      <Form text={this.state.text} onChange={this.handleChange} onSubmit={this.handleSubmit} />
    )
  }
});

FormContainer.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
}

module.exports = FormContainer;
