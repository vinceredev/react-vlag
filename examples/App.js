import React from "react";
import { Features, Vlag } from "../dist";
import { injectStyle } from "../dist/inject-style";

const App = () => {
  injectStyle();
  return (
    <div>
      <Features></Features>
      <h1>Current Checkout Page : </h1>
      <Vlag name="new_checkout_page">
        {(isActive) => (isActive ? <p>Beta</p> : <p>Released</p>)}
      </Vlag>
      <h1>Current Product Page : </h1>
      <Vlag name="new_product_page">
        {(isActive) => (isActive ? <p>Beta</p> : <p>Released</p>)}
      </Vlag>
    </div>
  );
};

export default App;
