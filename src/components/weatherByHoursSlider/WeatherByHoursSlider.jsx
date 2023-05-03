import React, { useContext } from 'react';
import './WeatherByHoursSlider.scss';
import Slider from 'react-slick';
import getCurrentTime from '../../utils/getCurrentTime.js';

import WeatherByHoursItem from '../weatherByHoursItem/WeatherByHoursItem';
import ForecastWeatherContext from '../../context/ForecastWeatherContext';

const WeatherByHoursSlider = () => {
  const { forecast, date } = useContext(ForecastWeatherContext);

  const getCurrentDay = () => {
    const currentDay = forecast.find(
      (forecastDay) => forecastDay.date === date
    );

    return currentDay;
  };

  return (
    <div className="weather-by-hours-slider">
      <div className="container">
        <Slider
          dots={false}
          infinite={false}
          speed={500}
          slidesToShow={2}
          slidesToScroll={2}
          arrows={false}
          initialSlide={getCurrentTime()}
        >
          {getCurrentDay().hour.map((oneHour) => (
            <WeatherByHoursItem oneHour={oneHour} key={oneHour.time} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WeatherByHoursSlider;
