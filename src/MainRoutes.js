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
          </Routes>
        </BrowserRouter>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default MainRoutes;
