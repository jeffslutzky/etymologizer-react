var React = require('react');
var styles = require('../styles');
var Word = require('../components/Word');

var WordList = React.createClass({
  render: function() {
    return (
      <div>
        {
          this.props.etymologies.map((entry, i) =>
            <span style={styles.word} key={entry.word + i}>
              <Word entry={entry} />
            </span>
          )
        }
      </div>
    )
  }
});

module.exports = WordList;
