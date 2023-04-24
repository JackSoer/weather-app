import React, { useState } from 'react';
import './Home.scss';

import Navbar from '../../components/navbar/Navbar';
import CurrentWeather from '../../components/currentWeather/CurrentWeather';

const Home = ({ API_KEY }) => {
  const [location, setLocation] = useState('New York');

  return (
    <div className="home">
      <Navbar setLocation={setLocation} location={location} API_KEY={API_KEY} />
      <CurrentWeather API_KEY={API_KEY} location={location} />
    </div>
  );
};

export default Home;
