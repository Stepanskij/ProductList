import React from "react";

class TextProduct extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <text>{this.props.textProduct}</text>;
  }
}

export default TextProduct;
