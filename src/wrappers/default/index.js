import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "../../helper/scroll-top";
import { ToastContainer } from "react-toastify";

const DefaultWrapper = (props) => {
  return (
    <>
      <ToastContainer />
      <Router>
        {" "}
        <ScrollToTop>{props.children}</ScrollToTop>
      </Router>
    </>
  );
};

export default DefaultWrapper;
