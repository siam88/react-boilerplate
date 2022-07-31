import React from "react";

const LoadingSuspense = ({ height, width }) => {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height,
    width,
  };

  return <div style={style}>Loading ...</div>;
};

LoadingSuspense.defaultProps = {
  width: "100%",
  height: "100%",
};

export default LoadingSuspense;
