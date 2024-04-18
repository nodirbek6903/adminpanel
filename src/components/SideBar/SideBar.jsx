import "./SideBar.css";
import { FaHome, FaRegUserCircle } from "react-icons/fa";
import { MdBrandingWatermark, MdOutlineLocationCity } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="container">
        <div className="admin">
          <FaRegUserCircle className="admin-icon" />
          <h4>Admin</h4>
        </div>
        <div className="sidebar-items">
          <div className="sidebar-item">
            <FaHome className="sidebar-icon" />
            <h4>Dashboard</h4>
          </div>
          <div className="sidebar-item">
            <MdBrandingWatermark className="sidebar-icon" />
            <h4>Brands</h4>
          </div>
          <div className="sidebar-item">
            <MdBrandingWatermark className="sidebar-icon" />
            <h4>Models</h4>
          </div>
          <div className="sidebar-item">
            <IoLocationSharp className="sidebar-icon" />
            <h4>Locations</h4>
          </div>
          <div className="sidebar-item">
            <MdOutlineLocationCity className="sidebar-icon" />
            <h4>Cities</h4>
          </div>
          <div className="sidebar-item">
            <FaCar className="sidebar-icon" />
            <h4>Cars</h4>
          </div>
          <div className="sidebar-item">
            <IoIosSettings className="sidebar-icon" />
            <h4>Settings</h4>
          </div>
          <div className="sidebar-item">
            <FiLogOut className="sidebar-icon" />
            <h4>Logout</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
