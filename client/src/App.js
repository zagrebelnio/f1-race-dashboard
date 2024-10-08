import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import DriversPage from "./pages/Drivers";
import ConstructorsPage from "./pages/Constructors";

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
        element: <div>Standings Page</div>,
      },
      {
        path: "results",
        element: <div>Results Page</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
