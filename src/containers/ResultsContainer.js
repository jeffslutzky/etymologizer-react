var React = require('react');
var Results = require('../components/Results')
var PropTypes = React.PropTypes;

var ResultsContainer = React.createClass({
  render: function() {
    if (this.props.formSubmitted) {
      return (
        <div>
          <Results loading={this.props.loading} etymologies={this.props.etymologies} />
        </div>
      )
    } else {
      return null;
    }
  }
})

ResultsContainer.propTypes = {
  formSubmitted: PropTypes.bool.isRequired,
  etymologies: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

module.exports = ResultsContainer;
