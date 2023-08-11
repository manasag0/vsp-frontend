import React from "react";
import { useLocation,useNavigate } from "react-router-dom";

const NavBar = (setSearchKeyword) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
   
      <nav className="nav">
        <ul>
          <li className="title" onClick={() => navigate("/")}>
            Tuner
          </li>
          {location.pathname === "/" && (
            <li>
              <input
                type="search"
                name="search"
                onChange={(event) => setSearchKeyword(event.target.value)}
                id="search"
                placeholder="Search"
              />
            </li>
          )}
          <li>
            <span onClick={() => navigate("/register")}>Register</span>
            <span>|</span>
            <span onClick={() => navigate("/login")}>Login</span>
          </li>
        </ul>
      </nav>
  );
};

export default NavBar;