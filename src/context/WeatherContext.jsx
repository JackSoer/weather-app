import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const API_KEY = '3f9512999515455094c84127232004';
  const [location, setLocation] = useState(
    localStorage.getItem('location') || 'New York'
  );
  const [currentWeather, setCurrentWeather] = useState({});

  const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`;

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

  useEffect(() => {
    setLocation(localStorage.getItem('location') || 'New York');
  }, []);

  const saveLocation = (newLocation) => {
    localStorage.setItem('location', newLocation);
    setLocation(newLocation);
  };

  return (
    <WeatherContext.Provider
      value={{
        API_KEY,
        location,
        setLocation,
        currentWeather,
        fetchError,
        isLoading,
        saveLocation,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
