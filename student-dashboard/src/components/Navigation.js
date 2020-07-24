import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="./Home">
          <li>Overview</li>
        </Link>

        <Link to="./Students">
          <li>Students</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
