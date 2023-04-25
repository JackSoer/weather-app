import React, { useEffect, useState } from 'react';
import './CurrentWeather.scss';
import axios from 'axios';

import Loading from '../loading/Loading';
import WeatherInfo from '../weatherInfo/WeatherInfo';
import Error from '../error/Error';

const CurrentWeather = ({ API_KEY, location }) => {
  const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`;

  const [currentWeather, setCurrentWeather] = useState({});
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(URL, { cancelToken: source.token });

        if (isMounted) {
          const weather = response.data.current;
          const newCurrentWeather = {
            temp: weather.temp_c,
            condition: weather.condition.text,
            img: weather.condition.icon,
            humidity: weather.humidity,
            wind: weather.wind_kph,
          };

          setCurrentWeather(newCurrentWeather);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setCurrentWeather({});
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData();

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [location]);

  return (
    <div className="current-weather">
      {!isLoading && !fetchError && (
        <WeatherInfo currentWeather={currentWeather} />
      )}
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
