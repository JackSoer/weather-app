import React, { useContext } from 'react';
import WeatherContext from '../../context/WeatherContext';
import './WeatherByHoursItem.scss';
import getCurrentTime from '../../utils/getCurrentTime.js';
import formateTimeFromDate from '../../utils/formateTimeFromDate.js';

const WeatherByHoursItem = ({ oneHour }) => {
  const { currentWeather } = useContext(WeatherContext);

  const getClassList = () => {
    const isToday = new Date(oneHour.time).getDate() === new Date().getDate();
    const isPastTime =
      formateTimeFromDate(oneHour.time, true) < getCurrentTime();
    const isSunny = currentWeather.condition === 'Sunny';

    if (isPastTime && isSunny && isToday) {
      return 'weather-by-hours-item weather-by-hours-item--opacity weather-by-hours-item--sunny';
    } else if (isPastTime && isToday) {
      return 'weather-by-hours-item weather-by-hours-item--opacity';
    } else if (isSunny) {
      return 'weather-by-hours-item weather-by-hours-item--sunny';
    } else {
      return 'weather-by-hours-item';
    }
  };

  return (
    <div className={getClassList()}>
      <p className="weather-by-hours-item__time">
        {formateTimeFromDate(oneHour.time)}
      </p>
      <div className="weather-by-hours-item__img">
        <img
          src={oneHour.condition.icon}
          alt=""
          className="weather-by-hours-item__img-item"
        />
      </div>
      <p className="weather-by-hours-item__temp">{oneHour.temp_c}</p>
    </div>
  );
};

export default WeatherByHoursItem;
