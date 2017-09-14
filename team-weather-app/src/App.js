import React, { Component } from 'react';
import WeatherForm from './components/WeatherForm';
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
    this.handleWeatherSubmitChange = this.handleWeatherSubmitChange.bind(this);

  }
componentWillMount(){

}

componentDidMount(){
  axios{`http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputZipValue},us&units=imperial&appid=0fc87027b19a680898624a73494f93bc`},{
  .then(res => {
    this.setState(prevState => {
      return{
        apiData: res.data.apiData,
      }
    });
  });

}

 handleInputZipChange(event) {
  this.setState({
     inputZipValue: event.target.value
   });
 }

handleWeatherSubmit(event){
  event.preventDefault();
  event.target.content = '';

  axios(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputZipValue},us&units=imperial&appid=0fc87027b19a680898624a73494f93bc`,{
  .then((res) => {
    this.setState({
    apiData: res.data.apiData,
  })
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

      data={this.state.weather}

      </div>
    );
  }
}

export default App;
