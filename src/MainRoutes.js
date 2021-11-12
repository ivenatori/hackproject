import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsList from "./components/ProductsList/ProductsList";

const MainRoutes = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/list" element={<ProductsList />} />
          </Routes>
        </BrowserRouter>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default MainRoutes;
