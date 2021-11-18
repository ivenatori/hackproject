import { GpsFixed } from "@mui/icons-material";
import { bgcolor } from "@mui/system";
import React from "react";
import AddProduct from "../AddProduct/AddProduct";
import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import MainCarousel from "../MainCarousel/MainCarousel";
import { Link } from "react-router-dom";
import Favorites from "../../assets/css/favorites.png";
import shadows from "@mui/material/styles/shadows";

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

  let styles = {
    display: "block",
    position: "fixed",
    width: "50px",
    height: "50px",
    color: "white",
    borderRadius: "50%",
    top: "50%",
    right: "10%",
  };
  let imgStyle = {
    "box-shadow": "1px 1px 30px #fff",
    "border-radius": "50%",
  };
  return (
    <div>
      <MainCarousel />
      <Filter />
      <ProductsList ket="pizza" title="pizza" title2="пицца" />
      <ProductsList key="sushi" title="sushi" title2="роллы" />
      <ProductsList key="drinks" title="drinks" title2="напитки" />
      <ProductsList key="sous" title="sous" title2="соусы" />
      <a style={style} href="#header">
        top
      </a>
      <Link style={styles} to="/favorites">
        <img style={imgStyle} width="70px" height="60px" src={Favorites}></img>
      </Link>
    </div>
  );
};

export default Home;
