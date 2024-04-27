import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cars from "./Module/Cars/cars";
import { Login } from "./Module/Login/Login";
import Layout from "./Module/layout";
import AuthCheck from "./utils/AuthChek";
import ProtectedRoute from "./utils/ProtectedRoute";
import Settings from "./Module/Settings/Settings";
import Cities from "./Module/Cities/Cities";
<<<<<<< HEAD
import Brands from "./Module/Brands/Brands";
=======
import Models from "./Module/Models/Models";
import { NotFoundError } from "./components/NotFound/NotFound";
import Locations from './Module/Locations/Locations';
>>>>>>> 15dfef5e0bec16753f85d024f06535cdc36994ab

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthCheck>
        <Login />
      </AuthCheck>
    ),
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
<<<<<<< HEAD
        index: true,
        element: <Dashboard />,
      },
      {
        path: "brands",
        element: <Brands />,
      },
      {
=======
>>>>>>> 15dfef5e0bec16753f85d024f06535cdc36994ab
        path: "cars",
        element: <Cars />,
      },
      {
        path: "models",
        element: <Models />,
      },
      {
        path: "locations",
        element: <Locations />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "cities",
        element: <Cities />,
      },
<<<<<<< HEAD
=======
      {
        path: "locations",
        element: <Locations />
      }
>>>>>>> 15dfef5e0bec16753f85d024f06535cdc36994ab
    ],
  },
  {
    path: "*",
    element: <NotFoundError />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
