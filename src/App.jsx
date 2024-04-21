import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cars from "./Module/Cars/cars";
import Dashboard from "./Module/Dashboard/Dashboard";
import { Login } from "./Module/Login/Login";

import Layout from "./Module/layout";
import AuthCheck from "./utils/AuthChek";
import ProtectedRoute from "./utils/ProtectedRoute";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
