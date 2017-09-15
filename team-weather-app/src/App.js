import React, { Component } from 'react';
import WeatherForm from './components/WeatherForm';
import Weather from './components/Weather';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      apiData: [],
      inputZipValue: '',
      cityName: '',
      currentTemp: '',
      description: '',
      minTemp: '',
      maxTemp: '',

    }
    this.handleInputZipChange = this.handleInputZipChange.bind(this);
    this.handleWeatherSubmit = this.handleWeatherSubmit.bind(this);
  }
componentWillMount(){

}

componentDidMount(){
  axios(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputZipValue},us&units=imperial&appid=0fc87027b19a680898624a73494f93bc`)
  .then((res) => {
    console.log(res.data)
      this.setState({
        apiData: res.data.data,
        cityName: res.data.cityName,
        currentTemp: res.data.currentTemp,
        description: res.data.description,
        minTemp: res.data.minTemp,
        maxTemp: res.data.maxTemp,
      })
    })
  }

 handleInputZipChange(event) {
  this.setState({
     inputZipValue: event.target.value
   });
 }

handleWeatherSubmit(event){
  event.preventDefault();
  event.target.content = '';

  axios(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputZipValue},us&units=imperial&appid=0fc87027b19a680898624a73494f93bc`)
  .then((res) => {
    this.setState({
        apiData: res.data.data,
        cityName: res.data.cityName,
        currentTemp: res.data.currentTemp,
        description: res.data.description,
        minTemp: res.data.minTemp,
        maxTemp: res.data.maxTemp,
  })
  console.log(res.data)
  })
}


  render() {
    return (
      <div>
      <WeatherForm
      handleWeatherSubmit={this.handleWeatherSubmit}
      handleInputZipChange={this.handleInputZipChange}
      handleInputZipValue={this.handleInputZipValue}
      />
      <Weather
      data={this.state.apiData}
      cityName={this.state.cityName}
      currentTemp={this.state.currentTemp}
      description={this.state.description}
      minTemp={this.state.minTemp}
      maxTemp={this.state.maxTemp}
      />
      </div>
    );
  }
}

export default App;
