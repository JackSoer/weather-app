import { createContext, useState, useEffect, useContext } from 'react';
import WeatherContext from './WeatherContext';
import axios from 'axios';
import { API_KEY } from '../data/constans';

const ForecastWeatherContext = createContext();

export const ForecastWeatherContextProvider = ({ children }) => {
  const { location } = useContext(WeatherContext);
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=10`;

  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [forecast, setForecast] = useState([]);
  const [date, setDate] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(url, { cancelToken: source.token });

        if (isMounted) {
          setForecast(response.data.forecast.forecastday);
          setDate(response.data.forecast.forecastday[0].date);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setForecast([]);
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
    <ForecastWeatherContext.Provider
      value={{
        forecast,
        date,
        setDate,
        isLoading,
        fetchError,
      }}
    >
      {children}
    </ForecastWeatherContext.Provider>
  );
};

export default ForecastWeatherContext;
