import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import DriversPage from './pages/Drivers';
import ConstructorsPage from './pages/Constructors';
import ComparisonPage from './pages/Comparison';
import DriverPage from './pages/Driver';
import ConstructorPage from './pages/Constructor';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <div>Error Page</div>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'drivers',
        children: [
          {
            index: true,
            element: <DriversPage />,
          },
          {
            path: ':id',
            element: <DriverPage />,
          },
        ],
      },
      {
        path: 'constructors',
        children: [
          {
            index: true,
            element: <ConstructorsPage />,
          },
          {
            path: ':id',
            element: <ConstructorPage />,
          },
        ],
      },
      {
        path: 'standings',
        element: <div>Standings Page</div>,
      },
      {
        path: 'results',
        element: <div>Results Page</div>,
      },
      {
        path: 'comparison',
        element: <ComparisonPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
