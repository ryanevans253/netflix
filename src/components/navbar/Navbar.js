import { useEffect, useState } from "react";
import icon from "./icon.png";
import logo from "./logo.png";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "nav_black"}`}>
      <img className="nav_logo" src={logo} alt="Netflix Logo" />
      <div className="nav_list">
        <li style={{ fontWeight: 800 }}>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New and Popular</li>
        <li>My List</li>
      </div>

      <div class="nav_icons">
        <SearchIcon />
        <li>DVD</li>
        <NotificationsIcon />
        <img className="nav_icon" src={icon} alt="User Icon" />
        <ArrowDropDownIcon />
      </div>
    </div>
  );
}
