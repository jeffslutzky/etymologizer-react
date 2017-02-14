var React = require('react');
var IntroText = require('./IntroText');
var FormContainer = require('../containers/FormContainer');
var Key = require('./Key');
var ResultsContainer = require('../containers/ResultsContainer');
var axios = require('axios');

var resourceURL = 'https://etymologizer-api.herokuapp.com/api/word';

var sanitize = function(wordString) {
  wordString = wordString.replace("-", " ");
  wordString = wordString.replace(/\n/g, " ");
  wordString = wordString.replace(/[^a-zA-Z ]/g, "");
  wordString = wordString.replace(/\s+/g, " ").trim();
  wordString = wordString.split(" ");
  return wordString;
};

var getLanguage = function(etymology) {
  if (!etymology) {
    return "none";
  } else if (etymology.includes("Anglo-French")) {
    return "angloFrench";
  } else if (etymology.includes("Old English")) {
    return "oldEnglish";
  } else if (etymology.includes("Latin")) {
    return "latin";
  } else if (etymology.includes("Greek")) {
    return "greek";
  } else {
    return "other";
  }
};

var findCorrectSubEntry = function(entry) {
  for (var i = 0; i < entry.length; i++) {
    if (entry[i].et && typeof entry[i].et === "string") {
      return entry[i].et;
    };
  };
};

var findEtymology = function(word) {
  var entry = word.entry_list.entry;
  if (entry.length) {
    return findCorrectSubEntry(entry);
  } else {
    return entry.et;
  }
};

var getValidHTML = function(etymology) {
  etymology = etymology.replace(/<it>/g , "<em>").replace(/<\/it>/g , "</em>");
  etymology = etymology.replace(/<ma>/g , " (more at <em>").replace(/<\/ma>/g , "</em>)");
  return etymology;
};

var getEtymologies = function(words, response) {
  var etymologies = [];
  // cycle through each word submitted
  var data;
  for (data in response.data) {
    if (response.data.hasOwnProperty(data)) {
      var etymology, language;
      var word = words.shift();
      var wordData = response.data[data];
      wordData.entry_list.entry ? etymology = findEtymology(wordData) : etymology = null;
      etymology ? etymology = getValidHTML(etymology) : etymology = null;
      language = getLanguage(etymology);
      if (!etymology) {
        etymology = "<em>no etymology provided</em>";
      };
      etymologies.push({"word": word, "etymology": etymology, "language": language});
    }
  }
  return etymologies;
};

var processInput = function(wordString) {
  var words = sanitize(wordString); // array
  var wordParams = words.join(" "); // string
  return axios.get(resourceURL, {
    params: {words: wordParams}
  })
    .then(function(response) {
      return getEtymologies(words, response)
    })
    .catch(function (err) {
      console.log('Error: ', err);
    });
};

var Home = React.createClass({
  getInitialState: function() {
    return {
      isSubmitted: false,
      loading: false,
      etymologies: []
    }
  },
  handleSubmit: function(text) {
    this.setState({
      isSubmitted: true,
      loading: true
    });
    processInput(text)
    .then(function(etymologyResults) {
      this.handleEtymologies(etymologyResults)
    }.bind(this))
  },
  handleEtymologies: function(etymologyResults) {
    this.setState({
      etymologies: etymologyResults,
      loading: false
    })
  },
  render: function() {
    return (
      <div className="container">

      <IntroText />

      <div className="row">
      <div className="col-xs-12 col-lg-6">
      <div className="input-group">
      <FormContainer
        handleFormSubmit={this.handleSubmit}
        handleEtymologyResults={this.handleEtymologies}
      />
      </div>
      </div>
      </div>

      <Key />

      <ResultsContainer
        loading={this.state.loading}
        formSubmitted={this.state.isSubmitted}
        etymologies={this.state.etymologies}
      />

      </div>
    )
  }
});

module.exports = Home;
