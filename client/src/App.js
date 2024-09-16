import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import DriversPage from "./pages/Drivers";

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
        element: <div>Constructors Page</div>,
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
