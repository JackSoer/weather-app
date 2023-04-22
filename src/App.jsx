import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './Scss/reset.scss';
import './Scss/general.scss';

import Home from './pages/home/Home';
import For7Days from './pages/for7Days/For7Days';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/For7Days',
      element: <For7Days />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
