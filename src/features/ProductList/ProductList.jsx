import React from "react";
import block from "bem-cn";

import ProductItem from "features/ProductItem";

import "./ProductList.scss";

const b = block("product-list");

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: JSON.parse(localStorage.getItem("productList")),
    };
  }

  handleItemClick = (id) => {
    this.setState(
      (preState) => {
        return {
          ...preState,
          list: preState.list.map((item) => {
            if (item.id === id) {
              return { ...item, checked: !item.checked };
            }

            return item;
          }),
        };
      },
      () => {
        const productList = JSON.stringify(this.state.list);
        localStorage.setItem("productList", productList);
      }
    );
  };

  render() {
    return (
      <div className={b()}>
        {this.state.list.map((product) => {
          return (
            <div className={b("item")} key={product.id}>
              <ProductItem item={product} onClick={this.handleItemClick} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductList;
