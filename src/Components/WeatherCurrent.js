import React, {useState, useEffect} from 'react';

const WeatherCurrent = props => {

    let weather = props.weatherData.map(d => {
        let date = new Date(d.dt * 1000).toLocaleString('en-GB');
        let temperature = Math.round(d.main.temp);
        let city = d.name.trim();        
        let icon = d.weather[0].icon;
        let error;
        
    
    
    return (
       
            <div>
            {city && <p>{city}</p>}
            {temperature && <p>{temperature} °C</p>}      
            {icon && <p><img src={`http://openweathermap.org/img/wn/${icon}.png`} alt = "icon" /></p>}
            {date && <p>{date}</p>}
            {error && <p>{error}</p>}
            </div>
        
    );
});
return <>{weather}</>;
}
export default WeatherCurrent;
