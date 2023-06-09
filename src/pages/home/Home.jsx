import React, { useContext } from 'react';
import './Home.scss';
import WeatherContext from '../../context/WeatherContext';

import CurrentWeather from '../../components/currentWeather/CurrentWeather';
import WeatherByDaysAndHours from '../../components/WeatherByDaysAndHours/WeatherByDaysAndHours';

const Home = () => {
  const { currentWeather } = useContext(WeatherContext);

  return (
    <div
      className={
        currentWeather.condition === 'Sunny' ? 'home home--sunny' : 'home'
      }
    >
      <CurrentWeather />
      <WeatherByDaysAndHours />
    </div>
  );
};

export default Home;
