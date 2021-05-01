import React from "react";
import { NavLink } from "react-router-dom";
import "./Logo.css";
export default function Logo() {
  return (
    <div>
      <NavLink className="logo" to="/" exact>
        say <strong>So</strong>()
      </NavLink>
    </div>
  );
}
