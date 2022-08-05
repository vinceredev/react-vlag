import React from "react";
import { useVlag, Vlag } from "../dist";

const BetaFeature = () => {
  return "Beta";
};

const ReleasedFeature = () => {
  return "Released";
};

const App = () => {
  const ff = useVlag();

  return (
    <Vlag name="beta_features">
      {(isActive) => (isActive ? <BetaFeature /> : <ReleasedFeature />)}
    </Vlag>
  );

  // if (ff.isEnabled("beta_features")) {
  //   return <BetaFeature />;
  // }

  // return <ReleasedFeature />;
};

export default App;
