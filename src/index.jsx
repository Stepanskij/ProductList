import React from "react";
import ReactDOM from "react-dom";

import App from "modules/App";
import UiKit from "modules/UiKit";

import "./shared/styles.scss";

/* const productList = [
  { text: "We", checked: false, id: 1 },
  { text: "O", checked: true, id: 2 },
  { text: "Pe", checked: true, id: 3 },
];

localStorage.setItem("productList", JSON.stringify(productList)); */

ReactDOM.render(<App />, document.getElementById("root"));
