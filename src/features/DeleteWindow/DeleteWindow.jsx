import React from "react";
import block from "bem-cn";

import Button from "components/Button";

import "./DeleteWindow.scss";

const b = block("delete-window");

class DeleteWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  handleButtonYes = () => {};

  handleButtonNo = () => {};

  render() {
    return (
      <div className={b()}>
        <div className={b("yes")}>
          <Button onClick={this.props.onYes}>Yes</Button>
        </div>
        <div className={b("no")}>
          <Button onClick={this.props.onNo}>No</Button>
        </div>
      </div>
    );
  }
}

export default DeleteWindow;
