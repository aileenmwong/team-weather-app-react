import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div id="weatherPageWrapper">
        <div id="resultWeather">
          <div id="cityName">City Name{this.props.data.name}</div>
          <div id="currentTemp">Current Temp{this.props.data.main.temp}</div>
          <div id="description">Description{this.props.data.weather[0].description}</div>
          <div id="minTemp">Min Temp{this.props.data.temp_min}</div>
          <div id="maxTemp">Max Temp{this.props.data.temp_max}</div>
        </div>
      </div>
    )
  }
}

export default Weather;
