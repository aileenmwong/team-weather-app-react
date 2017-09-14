import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div id="weatherPageWrapper">
        <div id="resultWeather">
          <div id="cityName">City Name{}</div>
          <div id="currentTemp">Current Temp{}</div>
          <div id="description">Description{}</div>
          <div id="minTemp">Min Temp{}</div>
          <div id="maxTemp">Max Temp{}</div>
        </div>
      </div>
    )
  }
}
