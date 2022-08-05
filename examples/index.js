import React from "react";
import ReactDOM from "react-dom";
import { VlagProvider } from "../dist";
import App from "./App";

ReactDOM.render(
  <VlagProvider
    flags={[
      {
        id: "beta_feature",
        name: "Beta Feature",
        description: "Some texts",
        helperText: "",
        disabled: false,
      },
    ]}
  >
    <App />
  </VlagProvider>,
  document.getElementById("root")
);
