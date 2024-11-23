import {  useState } from "react";
import "./App.css";
import Navigator from "./components/Navigator";
import {  ToastContainer } from "react-toastify";

import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Admin from "./components/Admin";
import SingleProduct from "./components/SingleProduct";
import AddProduct from "./components/AddProduct";
import ProductsContext from "./context/products";
import CartContext from "./context/cart";
function App() {

  return (
<ProductsContext>
      <CartContext>
        <div className="App">
          <ToastContainer />
          <Navigator>logo</Navigator>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/add" element={<AddProduct />} />
          </Routes>
        </div>
        </CartContext>
    </ProductsContext>
  );
}

export default App;
