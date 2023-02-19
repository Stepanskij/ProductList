import React from "react";
import block from "bem-cn";

import ProductList from "features/ProductList";

const b = block("app");

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={b()}>
        <ProductList />
      </div>
    );
  }
}

export default App;
