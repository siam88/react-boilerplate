import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { DefaultHome, TestPage1, TestPage2, TestPage3 } from "pages";

const RoutesHome = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/home" element={<DefaultHome />} />
      <Route path="/testPage1/*" element={<TestPage1 />} />

      <Route path="/testPage2/*" element={<TestPage2 />}>
        <Route path="subTestPage" element={<p>THis is subChild</p>} />
      </Route>
      <Route path="/testPage3/*" element={<TestPage3 />} />
    </Routes>
  );
};

export default RoutesHome;
