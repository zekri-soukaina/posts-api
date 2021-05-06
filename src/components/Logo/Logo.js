import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Logo.css";
export default function Logo() {
  return (
    <div className="navBar">
      <NavLink className="logo" to="/">
        say <strong>So</strong>()
      </NavLink>
      <NavLink className="avatar" to="/signup">
        <FontAwesomeIcon icon={faUserCircle} />
      </NavLink>
    </div>
  );
}
