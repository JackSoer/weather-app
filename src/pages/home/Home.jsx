import React from 'react';
import { useContext } from 'react';
import WeatherContext from '../../context/WeatherContext';
import './Home.scss';

import Navbar from '../../components/navbar/Navbar';
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
      <Navbar />
      <CurrentWeather />
      <WeatherByDaysAndHours />
    </div>
  );
};

export default Home;
