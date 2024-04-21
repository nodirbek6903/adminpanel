import "./SideBar.css";
import { FaHome, FaRegUserCircle } from "react-icons/fa";
import { MdBrandingWatermark, MdOutlineLocationCity } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useState } from "react";
=======

const sidebarItems = [
  { icon: <FaHome className="sidebar-icon" />, title: 'Dashboard', path: '/' },
  { icon: <MdBrandingWatermark className="sidebar-icon" />, title: 'Brands', path: '/brands' },
  { icon: <MdBrandingWatermark className="sidebar-icon" />, title: 'Models', path: '/models' },
  { icon: <IoLocationSharp className="sidebar-icon" />, title: 'Locations', path: '/locations' },
  { icon: <MdOutlineLocationCity className="sidebar-icon" />, title: 'Cities', path: '/cities' },
  { icon: <FaCar className="sidebar-icon" />, title: 'Cars', path: 'cars' },
  { icon: <IoIosSettings className="sidebar-icon" />, title: 'Settings', path: '/settings' },
  { icon: <FiLogOut className="sidebar-icon" />, title: 'Logout', path: '/logout' },
];
>>>>>>> 902ddf2315bf07e0c3b7a86e1e47c5f6b663710f

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
<<<<<<< HEAD
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
=======
        {sidebarItems.map((item, index) => (
        <Link to={item.path} key={index} className="sidebar-item">
          {item.icon}
          <h4>{item.title}</h4>
        </Link>
      ))}

>>>>>>> 902ddf2315bf07e0c3b7a86e1e47c5f6b663710f
        </div>
      </div>
    </div>
  );
};

export default SideBar;
