import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./Module/Login/Login";
import SideBar from "./components/SideBar/SideBar";
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Settings/Settings";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import Locations from "./components/Locations/Locations";

function App() {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      localStorage.removeItem("token");
    }
  },[token])

  return (
    <>
    <ToastContainer />
      {token ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      ) : (
        <>
          <SideBar />
          <Navbar />
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
