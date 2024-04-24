import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cars from "./Module/Cars/cars";
import Dashboard from "./Module/Dashboard/Dashboard";
import { Login } from "./Module/Login/Login";
import Layout from "./Module/layout";
import AuthCheck from "./utils/AuthChek";
import ProtectedRoute from "./utils/ProtectedRoute";
import Settings from "./Module/Settings/Settings";
import Cities from "./Module/Cities/Cities";
import Models from "./Module/Models/Models";
import { NotFoundError } from "./components/NotFound/NotFound";

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
        index: true,
        element: <Dashboard />,
      },
      {
        path: "cars",
        element: <Cars />,
      },
      {
        path: "models",
        element: <Models />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "cities",
        element: <Cities />,
      },
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


