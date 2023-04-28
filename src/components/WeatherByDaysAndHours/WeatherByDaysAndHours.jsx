import React from 'react';
import './WeatherByDaysAndHours.scss';

import DaysTabs from '../daysTabs/DaysTabs';
import WeatherByHoursSlider from '../weatherByHoursSlider/WeatherByHoursSlider';
import { ForecastWeatherContextProvider } from '../../context/ForecastWeatherContext';

const WeatherByDaysAndHours = () => {
  return (
    <div className="weather-by-days-and-hours">
      <ForecastWeatherContextProvider>
        <DaysTabs />
        <WeatherByHoursSlider />
      </ForecastWeatherContextProvider>
    </div>
  );
};

export default WeatherByDaysAndHours;
