import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    const navigate = useNavigate(); 
    const handleLogout = () => {
    // Remove token from localStorage
    alert("logout successfully")
    localStorage.removeItem('token');
    // Redirect to login page
    navigate('/login');
  };
  return (
    <div className="d-flex justify-content-between align-items-center px-4 py-3 bg-white shadow-sm border-bottom">
      <div className="navbar-nav d-flex flex-row gap-4">
        <Link to="/admin/songs" className="menu nav-link active">
          Songs
        </Link>
        <Link to="/admin/discography" className="menu nav-link active">
          Discography
        </Link>
      </div>
      <button className="btn btn-danger fw-semibold" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
