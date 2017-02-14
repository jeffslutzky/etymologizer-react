var React = require('react');
var styles = require('../styles');

var Key = function() {
  return (
    <div style={styles.key}>
      <h5 style={styles.keyWord}>
        Key for primary language of origin:<br />
        <span style={styles.latin}>Latin</span> <span style={styles.angloFrench}>Anglo-French</span> <span  style={styles.greek}>Greek</span> <span style={styles.oldEnglish}>Old English</span> <span style={styles.other}>Other</span>
      </h5>
    </div>
  )
};

module.exports = Key;
