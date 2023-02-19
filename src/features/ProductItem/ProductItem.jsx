import React from "react";
import block from "bem-cn";

import Checkbox from "components/Checkbox";

import "./ProductItem.scss";

const b = block("product-item");

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={b()}
        onClick={() => {
          this.props.onClick(this.props.item.id);
        }}
      >
        <div className={b("checkbox")}>
          <Checkbox isChecked={this.props.item.checked} />
        </div>
        <div className={b("text")}>{this.props.item.text}</div>
      </div>
    );
  }
}

export default ProductItem;
