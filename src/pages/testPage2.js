import React from "react";
import TestLayout from "layout/testLayout";
import { NavLink, Outlet } from "react-router-dom";

const TestPage2 = () => {
  return (
    <TestLayout>
      <ul>
        <li>
          <NavLink
            to="subTestPage"
            className={(navInfo) => (navInfo.isActive ? "linkActive" : "")}
          >
            sub child
          </NavLink>
        </li>
      </ul>
      <Outlet /> TestPage2
    </TestLayout>
  );
};

export default TestPage2;
