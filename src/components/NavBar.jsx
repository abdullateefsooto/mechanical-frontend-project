import { NavLink } from "react-router-dom";
import logo from "../assets/image/Add_a_heading__3_-removebg-preview (1).png";
import { useState } from "react";
import "../assets/style/navBar.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Ar-Rahman Sooto Autocare" className="logo" />
      </div>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><NavLink to="/" onClick={()=>setOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={()=>setOpen(false)}>About</NavLink></li>
        <li><NavLink to="/service" onClick={()=>setOpen(false)}>Services</NavLink></li>
        <li><NavLink to="/contact" onClick={()=>setOpen(false)}>Contact</NavLink></li>
        <li><NavLink to="/book" className="btn-book" onClick={()=>setOpen(false)}>Book Appointment</NavLink></li>
      </ul>

      <div className="hamburger" onClick={()=>setOpen(!open)}>
        {open ? "✕" : "☰"}
      </div>
    </nav>
  );
}
