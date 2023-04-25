import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './Scss/reset.scss';
import './Scss/general.scss';

import Home from './pages/home/Home';
import For7Days from './pages/for7Days/For7Days';

function App() {
  const API_KEY = '3f9512999515455094c84127232004';
  const [location, setLocation] = useState('New York');

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Home API_KEY={API_KEY} location={location} setLocation={setLocation} />
      ),
    },
    {
      path: '/For7Days',
      element: <For7Days API_KEY={API_KEY} location={location} />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
