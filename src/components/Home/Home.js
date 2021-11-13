import React from "react";
import AddProduct from "../AddProduct/AddProduct";
import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";

const Home = () => {
  return (
    <div>
      <Filter />
      <ProductsList />
      {/* <AddProduct /> */}
    </div>
  );
};

export default Home;
