import React from "react";
import block from "bem-cn";

import ProductItem from "features/ProductItem";

import "./ProductList.scss";

const b = block("product-list");

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        { text: "We", checked: false, id: 1 },
        { text: "O", checked: true, id: 2 },
        { text: "Pe", checked: false, id: 3 },
      ],
    };
  }

  handleItemClick = (id) => {
    this.setState((preState) => {
      return {
        ...preState,
        list: preState.list.map((item) => {
          if (item.id === id) {
            return { ...item, checked: !item.checked };
          }

          return item;
        }),
      };
    });
  };

  render() {
    return (
      <div className={b()}>
        {this.state.list.map((product) => {
          return (
            <div className={b("item")}>
              <ProductItem item={product} onClick={this.handleItemClick} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductList;
