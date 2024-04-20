import "./SideBar.css";
import { FaHome, FaRegUserCircle } from "react-icons/fa";
import { MdBrandingWatermark, MdOutlineLocationCity } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName === activeItem ? "" : itemName);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
  }

  return (
    <div className="sidebar-container">
      <div className="container">
        <div className="admin">
          <FaRegUserCircle className="admin-icon" />
          <h4>Admin</h4>
        </div>
        <div className="sidebar-items">
          <Link
            className={`sidebar-item ${
              activeItem === "dashboard" ? "active" : ""
            }`}
            onClick={() => handleItemClick("dashboard")}
          >
            <FaHome className="sidebar-icon" />
            <h4>Dashboard</h4>
          </Link>
          <Link
            to="/brands"
            className={`sidebar-item ${
              activeItem === "brands" ? "active" : ""
            }`}
            onClick={() => handleItemClick("brands")}
          >
            <MdBrandingWatermark className="sidebar-icon" />
            <h4>Brands</h4>
          </Link>
          <Link
            to="/models"
            className={`sidebar-item ${
              activeItem === "models" ? "active" : ""
            }`}
            onClick={() => handleItemClick("models")}
          >
            <MdBrandingWatermark className="sidebar-icon" />
            <h4>Models</h4>
          </Link>
          <Link
            to="/locations"
            className={`sidebar-item ${
              activeItem === "locations" ? "active" : ""
            }`}
            onClick={() => handleItemClick("locations")}
          >
            <IoLocationSharp className="sidebar-icon" />
            <h4>Locations</h4>
          </Link>
          <Link
            to="/cities"
            className={`sidebar-item ${
              activeItem === "cities" ? "active" : ""
            }`}
            onClick={() => handleItemClick("cities")}
          >
            <MdOutlineLocationCity className="sidebar-icon" />
            <h4>Cities</h4>
          </Link>
          <Link
            to="/cars"
            className={`sidebar-item ${activeItem === "cars" ? "active" : ""}`}
            onClick={() => handleItemClick("cars")}
          >
            <FaCar className="sidebar-icon" />
            <h4>Cars</h4>
          </Link>
          <Link
            to="/settings"
            className={`sidebar-item ${
              activeItem === "settings" ? "active" : ""
            }`}
            onClick={() => handleItemClick("settings")}
          >
            <IoIosSettings className="sidebar-icon" />
            <h4>Settings</h4>
          </Link>
          <Link to="/login" className="sidebar-item" onClick={handleLogout}>
            <FiLogOut className="sidebar-icon" />
            <h4>Logout</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
