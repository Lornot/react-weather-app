var Fetch = require('whatwg-fetch');
var baseUrl = 'http://localhost:6069';

var uglypuppies = '/uglypuppies';

var service = {
  get: function(url) {
      console.log('making request');
      return fetch(baseUrl + url)
      .then(function(response) {
          console.log("RES: ", response);
          return response.json();
      })
  }
};

module.exports = service;