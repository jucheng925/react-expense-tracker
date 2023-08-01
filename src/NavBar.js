import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
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
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/months"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Months
      </NavLink>
      <NavLink
        to="/months/add"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Expense Form
      </NavLink>
    </div>
  );
}
    
export default NavBar
