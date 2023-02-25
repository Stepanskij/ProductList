import React, { Suspense } from "react";
import block from "bem-cn";

import ProductList from "features/ProductList";
import Modal from "modules/Modal";
// import UiKit from "modules/UiKit";
const UiKit = React.lazy(() => import("modules/UiKit"));

import "./App.scss";

const b = block("app");

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={b()}>
        <ProductList />
        {/* 
        <Suspense fallback={<div>Загрузка...</div>}>
          <UiKit />
        </Suspense> */}
      </div>
    );
  }
}

export default App;
