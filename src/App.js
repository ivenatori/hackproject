import React from "react";
import ProductsList from "./components/ProductsList/ProductsList";
import MainRoutes from "./MainRoutes";
import PrimarySearchAppBar from "./components/Header/Header";
import AddProduct from "./components/AddProduct/AddProduct";

const App = () => {
  return (
    <div>
      <PrimarySearchAppBar />

      <ProductsList />

      <AddProduct />
    </div>
  );
};

export default App;
