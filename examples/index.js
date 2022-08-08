import React from "react";
import ReactDOM from "react-dom";
import { VlagProvider } from "../dist";
import App from "./App";

ReactDOM.render(
  <VlagProvider
    flags={[
      {
        id: "new_checkout_page",
        name: "Checkout Page",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        helperText: "This is helper text",
        disabled: false,
      },
      {
        id: "new_product_page",
        name: "Product Page",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        helperText: "This is helper text",
        disabled: false,
      },
    ]}
  >
    <App />
  </VlagProvider>,
  document.getElementById("root")
);
