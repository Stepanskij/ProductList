import React from "react";
import block from "bem-cn";

import "./Button.scss";

const b = block("button");

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className={b({ radius: this.props.radius || "5" })}
        {...this.props}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
