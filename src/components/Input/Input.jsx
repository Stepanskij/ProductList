import React from "react";
import block from "bem-cn";

import "./Input.scss";

const b = block("input");

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <input {...this.props} className={b()}></input>;
  }
}

export default Input;
