import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import DriversPage from "./pages/Drivers";
import ConstructorsPage from "./pages/Constructors";
import StandingsPage from "./pages/Standings";
import ResultsPage from "./pages/Results";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>Error Page</div>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "drivers",
        element: <DriversPage />,
      },
      {
        path: "constructors",
        element: <ConstructorsPage />,
      },
      {
        path: "standings",
        element: <StandingsPage />,
      },
      {
        path: "results",
        element: <ResultsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
