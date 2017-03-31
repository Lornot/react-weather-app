var Fetch = require('whatwg-fetch');

var APIKey = 'f2575f5951cb451e406e289a49292058';
var baseUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?units=metric&cnt=5&appid='+APIKey;

var service = {
  get: function(city) {
      //console.log('making request');
      return fetch(baseUrl + '&q=' + city + ',ua')
      .then(function(response) {
          //console.log("RES: ", response); 
          return response.json();
      })
  }
};

module.exports = service;