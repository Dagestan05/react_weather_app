import React from 'react'

const Weather = (props)=>{
  
    const {city, country, temperature, desciption, humidity, error} = props
    return(
      <div>
        {city && country && 
        <div>
          Location: {city}, {country}
        </div>}
        
        {temperature && 
        <div>
          Temperature: {temperature}
        </div>}

        {desciption && 
        <div>
          Conditions: {desciption}
        </div>}

        {humidity &&
        <div>
          Humidity: {humidity} 
        </div>}
        {error && <div>
          Error Message: {error}
        </div>}

      </div>//main div
    )
  }

export default Weather;