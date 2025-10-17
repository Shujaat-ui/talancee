import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Nav.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand" href="#">
          <span className="brand-highlight">T</span>alencee
        </a>

        <div className="mx-auto">
          <ul className="navbar-nav d-flex flex-row align-items-center">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">About</a>
            </li>

            {/* Service dropdown with nested dropdown */}
            <li className="nav-item dropdown mx-2">
              <a className="nav-link dropdown-toggle" href="#" id="serviceDropdown">
                Service
              </a>
              <ul className="dropdown-menu" aria-labelledby="serviceDropdown">
                <li><a className="dropdown-item" href="#">DEVELOPMENT</a></li>
                <li><a className="dropdown-item" href="#">DESIGN & CONSULTING</a></li>
                <li><a className="dropdown-item" href="#">SEO SERVICE</a></li>

                {/* Nested dropdown */}
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="#">MARKETING</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">GOOGLE ADS SERVICE</a></li>
                    <li><a className="dropdown-item" href="#">SOCIAL MEDIA MARKETING</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Team</a>
            </li>

            {/* Blog dropdown */}
            <li className="nav-item dropdown mx-2">
              <a className="nav-link dropdown-toggle" href="#" id="blogDropdown">
                Blog
              </a>
              <ul className="dropdown-menu" aria-labelledby="blogDropdown">
                <li><a className="dropdown-item" href="#">LATEST POSTS</a></li>
                <li><a className="dropdown-item" href="#">TIPS & INSIGHTS</a></li>
              </ul>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Career</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="d-flex">
          <button className="btn btn-outline-secondary" type="button">
            <FaSearch />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
