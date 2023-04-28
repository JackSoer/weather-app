import { createContext, useState, useEffect, useContext } from 'react';
import WeatherContext from './WeatherContext';
import axios from 'axios';

const ForecastWeatherContext = createContext();

export const ForecastWeatherContextProvider = ({ children }) => {
  const { API_KEY } = useContext(WeatherContext);
  const URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=3`;

  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [forecast, setForecast] = useState([]);

  const formateMonth = (monthNum) => {
    if (monthNum < 10) {
      return `0${monthNum}`;
    } else {
      return monthNum;
    }
  };

  const formateDate = () => {
    const today = new Date();
    const newDate = `${today.getFullYear()}-${formateMonth(
      today.getMonth() + 1
    )}-${today.getDate()}`;

    return newDate;
  };
  const [date, setDate] = useState(formateDate());

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(URL, { cancelToken: source.token });

        if (isMounted) {
          setForecast(response.data.forecast.forecastday);
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
