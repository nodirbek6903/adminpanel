import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./Module/Login/Login";
import SideBar from "./components/SideBar/SideBar";
import Navbar from "./components/Navbar/Navbar";

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
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
