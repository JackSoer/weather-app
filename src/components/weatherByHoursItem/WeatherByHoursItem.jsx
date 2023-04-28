import React, { useContext } from 'react';
import WeatherContext from '../../context/WeatherContext';
import './WeatherByHoursItem.scss';

const WeatherByHoursItem = ({ time, img, temp }) => {
  const { currentWeather } = useContext(WeatherContext);

  return (
    <div
      className={
        currentWeather.condition === 'Sunny'
          ? 'weather-by-hours-item weather-by-hours-item--sunny'
          : 'weather-by-hours-item'
      }
    >
      <p className="weather-by-hours-item__time">{time}</p>
      <div className="weather-by-hours-item__img">
        <img src={img} alt="" className="weather-by-hours-item__img-item" />
      </div>
      <p className="weather-by-hours-item__temp">{temp}</p>
    </div>
  );
};

export default WeatherByHoursItem;
