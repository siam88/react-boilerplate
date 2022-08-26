import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "helpers/scroll-top";
import { ToastContainer } from "react-toastify";
import RoutesHome from "routes";

const DefaultWrapper = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <ToastContainer />
        <ScrollToTop />
        <RoutesHome />
      </Router>
    </Suspense>
  );
};

export default DefaultWrapper;

/*--- Spinner Component ---*/
const Spinner = () => {
  return (
    <div className="flone-preloader-wrapper">
      <div className="flone-preloader">
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
