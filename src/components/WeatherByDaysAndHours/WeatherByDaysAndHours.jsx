import React, { useContext } from 'react';
import './WeatherByDaysAndHours.scss';
import ForecastWeatherContext from '../../context/ForecastWeatherContext';

import DaysTabs from '../daysTabs/DaysTabs';
import WeatherByHoursSlider from '../weatherByHoursSlider/WeatherByHoursSlider';
import Loading from '../loading/Loading';
import Error from '../error/Error';

const WeatherByDaysAndHours = () => {
  const { isLoading, fetchError, forecast } = useContext(
    ForecastWeatherContext
  );

  return (
    <div className="weather-by-days-and-hours">
      <DaysTabs />
      {!isLoading && !fetchError && forecast.length && <WeatherByHoursSlider />}
      {isLoading && !fetchError && <Loading />}
      {!isLoading && fetchError && <Error errorText={fetchError} />}
    </div>
  );
};

export default WeatherByDaysAndHours;
