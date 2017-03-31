var React = require('react');
var SimpleDayForecast = require('./SimpleDayForecast.jsx');

var ForecastBlock = React.createClass({

    render: function() {
        var forecastStyle = {
            backgroundColor: this.props.color
        };

        var ForecastsSimpleDaysForecasts = this.props.forecasts.map(function(simple_forecast) {

            var dateArr = (new Date(simple_forecast.dt*1000)).toString().split(' ').splice(1,3);
            var time_string = dateArr[1]+' '+dateArr[0];

            console.log(time_string);

            return (
                <SimpleDayForecast icon={'http://openweathermap.org/img/w/'+simple_forecast.weather[0].icon+'.png'} date={ time_string } min_temperature={ Math.round(simple_forecast.temp.min) } max_temperature={ Math.round(simple_forecast.temp.max) }/>
            );
        });

        return (
            <div style={forecastStyle} className="col-md-4 forecast_block">
                <h1 className="city">{ this.props.city }</h1> 
                <p className="time">{ this.props.time }</p>
                <div className="views">
                    <div className="temperature_block">
                        <img src={ this.props.icon } alt=""/>
                        <p className="temperature">{ this.props.temperature }&deg;</p>
                    </div>
                    <div className="wind_block">
                        <div>
                            <img src={ this.props.wind_direction_icon } alt="Wind Direction"/>
                            <p className="wind_direction">{ this.props.wind_direction_text }</p>
                        </div>
                        <div>
                            <img src={ this.props.wind_stength_icon } alt="Wind Strength"/>
                            <p className="wind_strength_text">{ this.props.wind_strength_text }</p>
                        </div>
                    </div>
                </div>
                <div className="fewDaysForecast">
                     { ForecastsSimpleDaysForecasts }
                </div>
            </div>
        )
    }
});

module.exports = ForecastBlock;