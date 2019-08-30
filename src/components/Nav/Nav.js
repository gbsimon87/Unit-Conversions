import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navList">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/weather/">Weather</Link>
        </li>
        <li>
          <Link to="/weight/">Weight</Link>
        </li>
        <li>
          <Link to="/length/">Length</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
