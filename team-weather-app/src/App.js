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

  }
componentWillMount(){

}

componentDidMount(){
  axios('')
  .then(res => {
    this.setState(prevState => {
      return {
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

  axios.post('https:',{
    cityname:
    currentTemp:
    description:
    minTemp:
    maxTemp:
  })
}





  render() {
    return (
      <WeatherForm
        data={}
    );
  }
}

export default App;
