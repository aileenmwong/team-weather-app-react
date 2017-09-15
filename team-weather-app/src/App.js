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
      />
      </div>
    );
  }
}

export default App;
