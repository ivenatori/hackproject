import { GpsFixed } from "@mui/icons-material";
import { bgcolor } from "@mui/system";
import React from "react";
import AddProduct from "../AddProduct/AddProduct";
import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";

const Home = () => {
  let style = {
    display: "block",
    position: "fixed",
    width: "50px",
    height: "50px",
    color: "white",
    borderRadius: "50%",
    backgroundColor: "black",
    top: "80%",
    left: "10%",
    padding: "10px",
  };
  return (
    <div>
      <Filter />
      <ProductsList ket="pizza" title="pizza" title2="пицца" />
      <ProductsList key="sushi" title="sushi" title2="роллы" />
      <ProductsList key="drinks" title="drinks" title2="напитки" />
      <ProductsList key="sous" title="sous" title2="соусы" />
      <a style={style} href="#header">
        top
      </a>
    </div>
  );
};

export default Home;
