import { useEffect, useState } from "react";
import icon from "./icon.png";
import logo from "./logo.png";
import "./navbar.css";

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
      <img className="nav_icon" src={icon} alt="User Icon" />
    </div>
  );
}
