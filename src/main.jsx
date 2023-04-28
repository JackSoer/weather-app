import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WeatherContextProvider } from './context/WeatherContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherContextProvider>
      <App />
    </WeatherContextProvider>
  </React.StrictMode>
);
