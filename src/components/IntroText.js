var React = require('react');

var IntroText = function() {
  return (
    <div>
      <h5>Enter one or more words, separated by spaces. You can even paste a sentence! Punctuation will be stripped out.</h5>
      <h5>Results come from the <a href="http://www.dictionaryapi.com/">Merriam-Webster Dictionary API</a>.</h5>
    </div>
  )
};

module.exports = IntroText;
