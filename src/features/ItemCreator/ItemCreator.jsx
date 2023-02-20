import React from "react";
import block from "bem-cn";

import Input from "components/Input";
import Button from "components/Button";

import "./ItemCreator.scss";

const b = block("item-creator");

class ItemCreator extends React.Component {
  constructor(props) {
    super(props);
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
        <div className={b("input")}>
          <Input />
        </div>
        <div className={b("button")}>
          <Button />
        </div>
      </div>
    );
  }
}

export default ItemCreator;
