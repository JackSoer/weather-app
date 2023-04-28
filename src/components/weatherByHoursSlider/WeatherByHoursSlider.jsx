import React, { useContext } from 'react';
import './weatherByHoursSlider.scss';
import Slider from 'infinite-react-carousel';

import WeatherByHoursItem from '../weatherByHoursItem/WeatherByHoursItem';
import ForecastWeatherContext from '../../context/ForecastWeatherContext';

const WeatherByHoursSlider = () => {
  const { forecast } = useContext(ForecastWeatherContext);

  // return (
  //   <div className="weather-by-hours-slider">
  //     <div className="container">
  //       <Slider
  //         arrows={false}
  //         slidesToShow={3}
  //         className="weather-by-hours-slider__item"
  //       >
  //         {chosenDay.hour.map((oneHour) => (
  //           <WeatherByHoursItem
  //             temp={oneHour.temp_c}
  //             img={oneHour.condition.icon}
  //             time={oneHour.time}
  //             key={oneHour.time}
  //           />
  //         ))}
  //       </Slider>
  //     </div>
  //   </div>
  // );
};

export default WeatherByHoursSlider;
