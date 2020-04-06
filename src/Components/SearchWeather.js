import React, {useState} from 'react';

const SearchWeather = props => {

    const [ city, setCity ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.searchWeather(city);
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='city' name='city' onChange={(e) => setCity(e.target.value)}/>            
            <button type = "submit">Submit</button>
            <p id = "error"></p>
        </form>
    );
}

export default SearchWeather;