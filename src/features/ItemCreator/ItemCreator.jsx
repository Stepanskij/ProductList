import React from "react";
import block from "bem-cn";

import Input from "components/Input";
import Button from "components/Button";

import "./ItemCreator.scss";

const b = block("item-creator");

class ItemCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
    };
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    this.setState((preState) => {
      return { ...preState, inputValue: `${value}` };
    });
  };

  render() {
    return (
      <div className={b()}>
        <div className={b("input")}>
          <Input
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </div>
        <div className={b("button")}>
          <Button
            onClick={() => this.props.buttonClick(this.state.inputValue)}
            /* radius={15} */
          >
            Add
          </Button>
        </div>
      </div>
    );
  }
}

export default ItemCreator;
