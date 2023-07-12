import React, { useContext } from 'react';
import ForecastWeatherContext from '../../context/ForecastWeatherContext';
import WeatherContext from '../../context/WeatherContext';
import './For7Days.scss';

const For7Days = () => {
  const { currentWeather } = useContext(WeatherContext);
  const { forecast } = useContext(ForecastWeatherContext);
  console.log(forecast);
  return (
    <div
      className={
        currentWeather.condition === 'Sunny'
          ? 'for-7-days for-7-days--sunny'
          : 'for-7-days'
      }
    ></div>
  );
};

export default For7Days;
