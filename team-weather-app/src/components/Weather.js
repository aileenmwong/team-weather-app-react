import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div id="weatherPageWrapper">
        <div id="resultWeather">
          <div id="cityName">City Name {this.props.cityName}</div>
          <div id="currentTemp">Current Temp {this.props.currentTemp}</div>
          <div id="description">Description {this.props.description}</div>
          <div id="minTemp">Min Temp {this.props.minTemp}</div>
          <div id="maxTemp">Max Temp {this.props.maxTemp}</div>
        </div>
      </div>
    )
  }
}

export default Weather;
