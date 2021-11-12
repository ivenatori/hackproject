import React, { createContext } from "react";
import axios from "axios";

export const productsContext = createContext();

const INIT_STATE = {
  products: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getProducts = async () => {
    const { data } = await axios(`http://localhost:8000/products?$`);

    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };
};

return (
  <productsContext.Provider
    value={{
      products: state.products,
      currentProduct: state.currentProduct,
      getProducts,
      getCurProduct,
      getPageProducts,
      paginateProducts: state.paginateProducts,
      addToBasket,
      cartLength: state.cartLength,
      cart: state.cart,
      cartProducts,
      getProductsFromBasket,
      changeProductCount,
    }}
  >
    {children}
  </productsContext.Provider>
);

export default ProductsContextProvider;
