import * as ReactDOM from "react-dom";

import React from "react";
import block from "bem-cn";

import "./Modal.scss";

const b = block("modal");

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ReactDOM.createPortal(
      <div
        className={b()}
        onClick={(e) => {
          this.props.onClose();
        }}
      >
        <div
          className={b("children")}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {this.props.children}
        </div>
      </div>,
      document.querySelector("#modal-root")
    );
  }
}

export default Modal;
