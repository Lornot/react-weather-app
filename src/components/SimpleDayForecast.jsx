var React = require('react');

var SimpleDayForecast = React.createClass({

    render: function() {

        return (
            <div>
                <div className="date">{ this.props.date }</div>
                <img src={ this.props.icon } alt="Weather"/>
                <div className="min_max_temperature">{  this.props.min_temperature}&deg; / {this.props.max_temperature}&deg;</div>
            </div>
        )
    }
});

module.exports = SimpleDayForecast;