import React from "react";
import ReactDOM from "react-dom";
import { sayMessage } from "../dist";
import App from "./App";

sayMessage();

ReactDOM.render(
  //   <VlagProvider>
  <App />,
  //   </VlagProvider>,
  document.getElementById("root")
);
