import React from "react";
import "./NarBar.css";
import roles from "../../../utils/utils";

import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <img className="logo" src='http://imgfz.com/i/udkTJQO.jpeg' alt="Logo" />
  );
};

const Links = (props) => {

  const userRoles = JSON.parse(localStorage.getItem("user")).roles;
  let views = userRoles
    .map((role) => {
      if (roles[role]) {
        return roles[role];
      }
    })
    .flat()
    .sort((a, b) => a.order - b.order)
    .map((el) => el.views)
    .flat();

  views = views.concat(roles["default"].views);
  return (
    <ul>
      {views.map((view) => (
        <li style = {{display: '-webkit-inline-box'}} key={view.path}>
          <NavLink
            to={view.path}
            onClick={view.path === "/logout" ? props.logout : null}
          >
            <div className="navlink">
              <span className="navlink-label">{view.label}</span>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}; 

const Navbar = (props) => {
  const showNav = props.show ? "visible" : "";

  return (
    <>
      <nav className={"navbar-container " + showNav}>
        <Links logout={props.logout} />
      </nav>
    </>
  );
};

export default Navbar;
