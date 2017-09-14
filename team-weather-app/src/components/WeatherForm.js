import React, { Component } from 'react';
import Weather from '../components/Weather'

class WeatherForm extends Component {
  render () {
    return(
      <div>
        <form
          className="add-weather-form"
          onSubmit={ }
        >
        <input
          type="text"
          value={this.props.inputZipValue}
          name="zipCode"
          placeholder="Enter Zip Code"
          onChange={this.props.handleInputZipValue}
        /><br/>

        <button id="submit">Get the Weather</button>
        </form>
      </div>
      );
  }
}
