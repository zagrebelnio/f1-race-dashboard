import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import DriversPage from './pages/Drivers';
import ConstructorsPage from './pages/Constructors';
import ComparisonPage from './pages/Comparison';
import DriverPage from './pages/Driver';
import ConstructorPage from './pages/Constructor';
import { SeasonProvider } from './context/SeasonContext';
import StandingsPage from './pages/Standings';
import ResultsPage from './pages/Results';

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
        element: <StandingsPage />,
      },
      {
        path: 'results',
        element: <ResultsPage />,
      },
      {
        path: 'comparison',
        element: <ComparisonPage />,
      },
    ],
  },
]);

function App() {
  return (
    <SeasonProvider>
      <RouterProvider router={router} />
    </SeasonProvider>
  );
}

export default App;
