import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./Module/Login/Login";
import SideBar from "./components/SideBar/SideBar";
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Settings/Settings";

function App() {
  const token = localStorage.getItem("token");

  return (
    <>
      {!token ? (
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
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
