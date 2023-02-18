import React from "react";

import Checkbox from "components/Checkbox/Checkbox";
import TextProduct from "components/TextProduct";

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <label>
        <TextProduct textProduct={this.props.textProduct}/>
        <Checkbox />
      </label>
    );
  }
}

export default ProductItem;
