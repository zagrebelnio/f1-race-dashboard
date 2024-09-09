import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>Error Page</div>,
    children: [
      {
        index: true,
        element: <div>Home Page</div>,
      },
      {
        path: "drivers",
        element: <div>Drivers Page</div>,
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
