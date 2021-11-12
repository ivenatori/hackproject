import React from "react";
import ProductsList from "./components/ProductsList/ProductsList";
import MainRoutes from "./MainRoutes";
import PrimarySearchAppBar from './components/Header/Header'

const App = () => {
  return (
    <div>
      <PrimarySearchAppBar/>
     
      <ProductsList />

    </div>
  );
};

export default App;
