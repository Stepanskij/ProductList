import React from "react";
import block from "bem-cn";

import checkMarkerPng from "./img/checkMarker.png";

import "./Checkbox.scss";

const b = block("checkbox");

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={b()} onClick={this.props.onClick}>
        {this.props.isChecked ? (
          <img className={b("marker")} src={checkMarkerPng} />
        ) : null}
      </div>
    );
  }
}

export default Checkbox;
