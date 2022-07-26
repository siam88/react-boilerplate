import React from "react";
import Translate from "./utils/translate";
import {Navigate,Route,Routes} from 'react-router-dom'

const App = () => {
  return <div className="App">{Translate("bn", "common.login")}</div>;
};

export default App;
