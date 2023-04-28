import React, { useContext } from 'react';
import './DayTab.scss';
import ForecastWeatherContext from '../../context/ForecastWeatherContext';

const DayTab = ({ date }) => {
  const { setDate } = useContext(ForecastWeatherContext);

  const formatDate = () => {
    const today = new Date();
    const newDate = new Date(date);

    if (today.getDate() === newDate.getDate()) {
      const options = { day: 'numeric', month: 'short' };
      const formatedTodayDate = newDate.toLocaleString('en-US', options);

      return 'Today, ' + formatedTodayDate;
    }

    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    const formatedDate = newDate.toLocaleString('en-US', options);

    return formatedDate;
  };

  const handleDate = () => {
    setDate(date);
  };

  return (
    <button className="day-tab" onClick={handleDate}>
      {formatDate()}
    </button>
  );
};

export default DayTab;
