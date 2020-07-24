import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Students() {
  return (
    <div>
      <h1> Here will be the info of every individual student </h1>
      <ul className="student-links">
        <Link to="./Aranka">
          <li>Aranka</li>
        </Link>
        <Link to="./Evelyn">
          <li>Evelyn</li>
        </Link>
        <Link to="./Floris">
          <li>Floris</li>
        </Link>
        <Link to="./Hector">
          <li>Hector</li>
        </Link>
        <Link to="./Martina">
          <li>Martina</li>
        </Link>
        <Link to="./Maurits">
          <li>Maurits</li>
        </Link>
        <Link to="./Rahima">
          <li>Rahima</li>
        </Link>
        <Link to="./Sandra">
          <li>Sandra</li>
        </Link>
        <Link to="./Storm">
          <li>Storm</li>
        </Link>
        <Link to="./Wietske">
          <li>Wietske</li>
        </Link>
      </ul>
    </div>
  );
}

export default Students;
