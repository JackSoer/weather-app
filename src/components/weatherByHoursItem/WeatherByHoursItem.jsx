import React, { useContext } from 'react';
import WeatherContext from '../../context/WeatherContext';
import './WeatherByHoursItem.scss';
import getCurrentTime from '../../utils/getCurrentTime';

const WeatherByHoursItem = ({ oneHour }) => {
  const { currentWeather } = useContext(WeatherContext);

  const formateTimeFromDate = (date, withoutLetters = false) => {
    const newTime = date.split(' ')[1];

    const newTimeNumber = Number(newTime.split(':')[0]);

    if (withoutLetters) {
      return newTimeNumber;
    }

    if (newTimeNumber < 12) {
      return newTime + ' A.M.';
    } else {
      return newTime + ' P.M.';
    }
  };

  const getClassList = () => {
    const isPastTime =
      formateTimeFromDate(oneHour.time, true) < getCurrentTime();
    const isSunny = currentWeather.condition === 'Sunny';

    if (isPastTime && isSunny) {
      return 'weather-by-hours-item weather-by-hours-item--opacity weather-by-hours-item--sunny';
    } else if (isPastTime) {
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
