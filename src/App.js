import React from "react";
import Translate from "./utils/translate";
import "./App.css";

const App = () => {
  return <div className="App">{Translate("bn", "common.login")}</div>;
};

export default App;
