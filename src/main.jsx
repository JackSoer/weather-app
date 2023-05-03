import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WeatherContextProvider } from './context/WeatherContext';
import { ForecastWeatherContextProvider } from './context/ForecastWeatherContext';
import { SearchContextProvider } from './context/SearchContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherContextProvider>
      <ForecastWeatherContextProvider>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </ForecastWeatherContextProvider>
    </WeatherContextProvider>
  </React.StrictMode>
);
