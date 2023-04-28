import React, { useContext } from 'react';
import WeatherContext from '../../context/WeatherContext';
import './WeatherInfo.scss';

const WeatherInfo = () => {
  const { currentWeather } = useContext(WeatherContext);

  return (
    <div className="weather-info">
      <div className="container">
        <div className="weather-info__img">
          <img
            src={currentWeather.img}
            alt=""
            className="weather-info__img-item"
          />
        </div>
        <h2 className="weather-info__condition">{currentWeather.condition}</h2>
        <h2 className="weather-info__temp">{currentWeather.temp}</h2>
        <div className="weather-info__extra-info">
          <div className="weather-info__extra-info-box">
            <img
              src="./images/icons/wind.svg"
              alt=""
              className="weather-info__extra-info-icon"
            />
            <p className="weather-info__wind-info">
              {currentWeather.temp} km/h
            </p>
          </div>
          <div className="weather-info__extra-info-box">
            <img
              src="./images/icons/humidity.svg"
              alt=""
              className="weather-info__extra-info-icon"
            />
            <p className="weather-info__humidity-info">
              {currentWeather.humidity} %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
