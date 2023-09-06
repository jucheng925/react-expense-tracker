import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#800080",
    textDecoration: "none",
    color: "white",
  };

  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#1d1160",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/months"
        style={linkStyles}
        activeStyle={{
          background: "#1d1160",
        }}
      >
        Months
      </NavLink>
      <NavLink
        to="/months/add"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#1d1160",
        }}
      >
        Expense Form
      </NavLink>
    </div>
  );
}
    
export default NavBar
