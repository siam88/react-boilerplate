import React from "react";
import Translate from "./utils/translate";
import DefaultWrapper from "./wrappers/default/index";

const App = () => {
  return <DefaultWrapper>{Translate("bn", "common.login")}</DefaultWrapper>;
};

export default App;
