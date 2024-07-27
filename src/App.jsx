import { useState } from "react";

import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Product from "./components/Product.jsx";
import CartContextProvider, {
  CartContext,
} from "./store/shopping-cart-context.jsx";
function App() {
  return (
    // CartContext is the special object that contains the state and state updating function that is recquired for our project. Inside the cartcontext object, it contains the attribute that helps to create the component which wraps the component that requires the information and it is accessable to those components

    <CartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
