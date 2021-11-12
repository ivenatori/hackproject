import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const MainRoutes = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Header />
          <Routes></Routes>
        </BrowserRouter>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default MainRoutes;
