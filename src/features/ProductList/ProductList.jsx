import React from "react";
import block from "bem-cn";
import { v4 as uuidv4 } from "uuid";

import ProductItem from "features/ProductItem";
import ItemCreator from "features/ItemCreator";
import Button from "components/Button";
import Modal from "modules/Modal";
import DeleteWindow from "features/DeleteWindow";

import "./ProductList.scss";

const b = block("product-list");

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: JSON.parse(localStorage.getItem("productList")) || [],
      deleteWindowOpened: false,
      deleteId: -1,
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

  handleItemCreatorButton = (value) => {
    if (value !== "") {
      const newList = [...this.state.list];
      newList.push({ text: value, checked: false, id: uuidv4() });

      this.updateLocalList(newList);
    }
  };

  handleWindow = (id) => {
    this.setState((preState) => {
      return {
        ...preState,
        deleteWindowOpened: !preState.deleteWindowOpened,
        deleteId: preState.deleteWindowOpened ? -1 : id,
      };
    });
  };

  handleDeleteProduct = () => {
    const newList = [...this.state.list].filter((item) => {
      return item.id !== this.state.deleteId;
    });
    console.log(this.state.list);
    this.updateLocalList(newList);
    this.handleWindow();
  };

  updateLocalList = (newList) => {
    this.setState(
      (preState) => {
        return {
          ...preState,
          list: newList,
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
              <div className={b("delete-button")}>
                <Button
                  onClick={() => {
                    this.handleWindow(product.id);
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
        {this.state.deleteWindowOpened ? (
          <Modal onClose={this.handleWindow}>
            <DeleteWindow
              onYes={this.handleDeleteProduct}
              onNo={this.handleWindow}
            />
          </Modal>
        ) : null}
        <div className={b("item-creator")}>
          <ItemCreator buttonClick={this.handleItemCreatorButton} />
        </div>
      </div>
    );
  }
}

export default ProductList;
