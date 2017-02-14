var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Loading = require('./Loading')
var WordList = require('../components/WordList')

var Results = React.createClass({
  render: function() {
    if (this.props.loading) {
      return <Loading />
    } else {
      return (
        <div className="row col-xs-12 col-lg-6" style={styles.displayWords} >
          {this.props.etymologies.length ? <h5>Mouse over a word below to see its full etymology.</h5> : <div></div>}
          <WordList etymologies={this.props.etymologies} />
        </div>
      )
    }
  }
});

Results.propTypes = {
  etymologies: PropTypes.array.isRequired
}

module.exports = Results;
