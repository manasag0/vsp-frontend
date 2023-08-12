import React from "react";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate=useNavigate();
  return (
    <nav className="nav">
      <ul>
        <li className="title" onClick={()=>navigate('/')}>Tuner</li>

        <li>
          <input type="search" name="search" id="search" placeholder="Search" />
        </li>

        <li>
          <span onClick={()=>navigate('/register')}>Register</span>
          <span>|</span>
          <span onClick={()=>navigate('/login')}>Login</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
