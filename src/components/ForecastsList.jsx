var React = require('react');
var ForecastBlock = require('./ForecastBlock.jsx');
var SimpleDayForecast = require('./SimpleDayForecast.jsx');
var HTTP = require('../services/httpservice');


var ForecastsList = React.createClass({
    getInitialState: function () {
        return {
            forecasts: [
                {
                    'city': 'London',
                    'time': 'today 29',
                    'icon': '',
                    'temperature' : '26',
                    'wind_direction_icon' : '',
                    'wind_direction_text' : 'North East',
                    'wind_strength_icon' : '',
                    'wind_strength_text' : '7 MPH',
                    'dates': [
                        {
                            'date': '26 August',
                            'icon': '',
                            'temperature': '12 / 26'
                        },
                        {
                            'date': '27 August',
                            'icon': '',
                            'temperature': '12 / 26'
                        },
                        {
                            'date': '28 August',
                            'icon': '',
                            'temperature': '12 / 26'
                        }
                    ]
                }
            ],
            apiForecasts: []
        };
    },
    componentWillMount: function () {
        var cities = [
            'Kiev',
            'Lviv',
            'Odessa'
        ];

        cities.forEach(
            function(city) {
                HTTP.get(city)
                .then(function(data) {
                    var Array = this.state.apiForecasts;

                    data.color = "#"+((1<<24)*Math.random()|0).toString(16);
                    Array.push(data);
                    var new_forecasts = {apiForecasts: Array};
                    this.setState(new_forecasts);
                }.bind(this));
            }.bind(this)
        );
    },
    render: function () {
        var dateArr = (new Date()).toString().split(' ').splice(1,3);
        var time_string = 'TODAY '+dateArr[1]+' '+dateArr[0].toUpperCase()+' '+dateArr[2];
        var ForcastsList = this.state.apiForecasts.map(function(forecast) {
            console.log(forecast);

            function degToCompass(num) {
                var val = Math.floor((num / 22.5) + 0.5);
                var arr = ["North", "North North East", "North East", "East North East", "East", "East South East", "South East", "South South East ", "South", "South South West", "South West", "West South West", "West", "West North West", "North West", "North North West"];
                return arr[(val % 16)];
            }

            var wind_direction_text = degToCompass(forecast.list[0].deg);

            return (
                <div>
                    <ForecastBlock color={forecast.color} city={forecast.city.name} time={time_string}  icon={'http://openweathermap.org/img/w/'+forecast.list[0].weather[0].icon+'.png'} wind_direction_icon="images/windsock.png"  wind_stength_icon="images/wind.png" temperature={Math.round(forecast.list[0].temp.day)} wind_strength_text={forecast.list[0].speed + 'MPH'} wind_direction_text={wind_direction_text} forecasts={forecast.list} />

                </div>
            )
        });
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {ForcastsList}
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = ForecastsList;