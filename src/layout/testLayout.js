import React from "react";
import { NavLink } from "react-router-dom";

const TestLayout = (props) => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/home"
            className={(navInfo) => (navInfo.isActive ? "linkActive" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/testPage1"
            className={(navInfo) => (navInfo.isActive ? "linkActive" : "")}
          >
            testPage1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/testPage2"
            className={(navInfo) => (navInfo.isActive ? "linkActive" : "")}
          >
            testPage2
          </NavLink>
        </li>
      </ul>
      {props.children}
    </div>
  );
};

export default TestLayout;
