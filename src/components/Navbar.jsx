import React from "react";
import { Link ,NavLink } from "react-router-dom";

const Navbar = () => { 
  return (
    <div className="Navbar container-fluid p-1 fs-5 d-flex justify-content-start ps-2">
      <ul className="nav justify-content-center bg-dark-subtle rounded mx-3">
        <li className="nav-item mx-3">
          <NavLink style={({isActive})=>isActive?{color:"red",marginBottom:"5px" , borderBottom:"5px solid red"}:undefined} className="nav-link "   aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink style={({isActive})=>isActive?{color:"red",marginBottom:"5px" , borderBottom:"5px solid red"}:undefined} className="nav-link" to="/blog">
            Blog
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink style={({isActive})=>isActive?{color:"red",marginBottom:"5px" , borderBottom:"5px solid red"}:undefined} className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink style={({isActive})=>isActive?{color:"red",marginBottom:"5px" , borderBottom:"5px solid red"}:undefined} className="nav-link" to="/product">
            Product
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink style={({isActive})=>isActive? {color:"red",marginBottom:"5px" , borderBottom:"5px solid red"}:{color:"gray"}} className="nav-link " to="*">
            Disabled
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
