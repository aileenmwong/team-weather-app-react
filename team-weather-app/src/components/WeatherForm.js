import React, { Component } from 'react';
import Weather from '../components/Weather'

class WeatherForm extends Component {
  render () {
    return(
      <div>
        <form
          className="add-weather-form"
          onSubmit={this.props.handleWeatherSubmit}
        >
        <input
          type="text"
          value={this.props.zipCode}
          name="zipCode"
          placeholder="Enter Zip Code"
          onChange={this.props.handleInputZipChange}
        /><br/>

        <button id="submit">Get the Weather</button>
        </form>
      </div>
      );
  }
}

export default WeatherForm;
