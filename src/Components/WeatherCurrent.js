import React from 'react';

const WeatherCurrent = props => {

    let weather = props.weatherData.map(d => {
        let date = new Date(d.dt *1000).toLocaleString('en-GB').replace(',','');
        let temperature = Math.round(d.main.temp);
        let city = d.name; 
        let country = d.sys.country;      
        let icon = d.weather[0].icon;
        let error;
        
    
    
    return (
            <div className = "container" key = {city}>
                <div className = "row">
                    <div className = "d-block mx-auto">
                        <div className="card text-center">
                            {city && country && <h5 className="card-header bg-primary text-white">{city}, {country}</h5>}
                                <div className = "card-body bg-info text-white">
                                    {temperature && <p className = "card-text">{temperature} °C</p>}      
                                    {icon && <p className = "card-text"><img src={`http://openweathermap.org/img/wn/${icon}.png`} alt = "icon" /></p>}
                                    {date && <p className = "card-text">{date}</p>}
                                    {error && <p className = "card-text">{error}</p>}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
});
return <>{weather}</>;
}
export default WeatherCurrent;
