import React, { useContext } from 'react';
import './DaysTabs.scss';

import DayTab from '../dayTab/DayTab';
import ForecastWeatherContext from '../../context/ForecastWeatherContext';

const DaysTabs = () => {
  const { forecast } = useContext(ForecastWeatherContext);

  return (
    <div className="days-tabs">
      <div className="container">
        {forecast.map((forecastday) => (
          <DayTab date={forecastday.date} key={forecastday.date} />
        ))}
      </div>
    </div>
  );
};

export default DaysTabs;
