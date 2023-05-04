import React, { useContext } from 'react';
import './DaysTabs.scss';
import ForecastWeatherContext from '../../context/ForecastWeatherContext';

import DayTab from '../dayTab/DayTab';

const DaysTabs = () => {
  const { forecast } = useContext(ForecastWeatherContext);

  return (
    <div className="days-tabs">
      <div className="container">
        {forecast.map((forecastday) => (
          <DayTab dayDate={forecastday.date} key={forecastday.date} />
        ))}
      </div>
    </div>
  );
};

export default DaysTabs;
