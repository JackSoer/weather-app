import React, { useContext } from 'react';
import './DayTab.scss';
import ForecastWeatherContext from '../../context/ForecastWeatherContext';
import formateDate from '../../utils/formateDate';

const DayTab = ({ dayDate }) => {
  const { setDate, date } = useContext(ForecastWeatherContext);
  const isChosenDay = date === dayDate;

  const handleDate = () => {
    setDate(dayDate);
  };

  return (
    <button
      className={
        isChosenDay
          ? 'day-tab day-tab--active day-tab--hover-active-off'
          : 'day-tab'
      }
      onClick={handleDate}
    >
      {formateDate(dayDate)}
    </button>
  );
};

export default DayTab;
