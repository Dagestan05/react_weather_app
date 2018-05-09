import React from 'react';
import Titles from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = '2cea7fc442814f6aa6d3a1e2d48a5b56';

class App extends React.Component{
  constructor(){
    super();
    this.getWeather = this.getWeather.bind(this)

    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: '',
      error: null
    }
  }
  getWeather(event){
    event.preventDefault();
    const city = event.target.elements.city.value
    const country = event.target.elements.country.value

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`)
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((data) => {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description
      });
      
    })
    .catch((error) => {
      this.setState({error: error.message});
    });
  }

  render(){
    const {temperature, city, country, humidity, description, error} = this.state;
    return(
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather 
          temperature={temperature} 
          city ={city}
          country={country}
          humidity={humidity} 
          description={description}
          error = {error}
        />
      </div>
    );
  }
}

export default App;