import React, { useContext } from 'react';
import './CurrentWeather.scss';
import WeatherContext from '../../context/WeatherContext';

import Loading from '../loading/Loading';
import WeatherInfo from '../weatherInfo/WeatherInfo';
import Error from '../error/Error';

const CurrentWeather = () => {
  const { fetchError, isLoading } = useContext(WeatherContext);

  return (
    <div className="current-weather">
      {!isLoading && !fetchError && <WeatherInfo />}
      {isLoading && !fetchError && (
        <div className="container">
          <Loading />
        </div>
      )}
      {fetchError && !isLoading && (
        <div className="container">
          <Error errorText={fetchError} />
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;
