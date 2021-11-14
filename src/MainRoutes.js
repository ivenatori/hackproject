import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import PrimarySearchAppBar from "./components/Header/Header";
import Home from "./components/Home/Home";
import AuthContextProvider from "./contexts/AuthContext";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductsContextProvider from "./contexts/ProductsContext";
import Auth from "./components/Auth/Auth";
import EditProducts from "./components/EditProduct/EditProducts";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";

const MainRoutes = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <PrimarySearchAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<ProductsList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/edit" element={<EditProducts />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default MainRoutes;
