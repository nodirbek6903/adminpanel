import "./Navbar.css";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FiLogOut, FiSettings, FiUsers } from "react-icons/fi";
import { GrLanguage } from "react-icons/gr"
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }



  return (
    <div className="navbar-container">
      <div className="container">
        <div className="nav-texts">
          <h1>Dashboard</h1>
          <span>Home | Profile</span>
        </div>
        <div className="nav-icons">
          <div className="bars-container">
            <HiMiniBars3BottomRight className="icons" onClick={toggleDropdown} />
            {isOpen && (
                <div className="dropdown">
                <div className="dropdown-items">
                  <FiUsers className="icons dropdown-icons" />
                  <span>Edit Profile</span>
                </div>
                <div className="dropdown-items">
                  <GrLanguage className="icons dropdown-icons" />
                  <span>Language</span>
                </div>
                <div className="dropdown-items">
                  <FiLogOut className="icons dropdown-icons" />
                  <span>Logout</span>
                </div>
              </div>
            )}
          </div>
          <Link to="/settings" style={{color:"#000"}}><FiSettings className="icons" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
