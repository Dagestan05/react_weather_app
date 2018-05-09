import React from 'react'

const Weather = (props)=>{
  
    const {city, country, temperature, desciption, humidity, error} = props
    return(
      <div className="weather__info">
        {
          city && country && 
        <div className="weather__key">
          Location: <span className="weather__value">{city}, {country}</span> 
        </div>
        }
        
        {
          temperature && 
        <div className="weather__key">
          Temperature: <span className="weather__value">{temperature}</span>
        </div>
        }

        {
          desciption && 
        <div className="weather__key">
          Conditions: <span className="weather__value">{desciption}</span>
        </div>
        }

        {
          humidity &&
        <div className="weather__key">
          Humidity: <span className="weather__value">{humidity}</span> 
        </div>
        }
        {
          error && <div className="weather__error">
          Error Message: <span className="weather__value">{error}</span>
        </div>
        }

      </div>//main div
    )
  }

export default Weather;