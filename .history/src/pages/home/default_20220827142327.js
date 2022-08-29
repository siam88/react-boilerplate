import React from "react";
import Translate from "utils/translate";
import TestLayout from "layout/testLayout";

const Default = () => {
  return (
    <TestLayout>
      <div>Default {Translate("bn", "common.login")}</div>
      
    </TestLayout>
  );
};

export default Default;
