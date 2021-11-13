import React, { createContext, useReducer } from "react";
import axios from "axios";

export const productsContext = createContext();

const INIT_STATE = {
  products: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "EDIT_PRODUCT":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async (params="") => {
    const { data } = await axios(`http://localhost:8000/products?${params}`);

    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };
  //добавление новой пиццы
  async function addNewProduct(newProduct) {
    await axios.post(`http://localhost:8000/products`, newProduct);
    getProducts();
  }
  //удаление продукта
  function deleteProduct(id) {
    axios.delete(`http://localhost:8000/products/${id}`);
    getProducts();
  }
  //изменение продукта
  async function saveEditedProduct(editedProduct, id) {
    await axios.patch(`http://localhost:8000/products/${id}`, editedProduct);

    getProducts();
  }
  return (
    <productsContext.Provider
      value={{
        products: state.products,
        getProducts,
        addNewProduct,
        deleteProduct,
        saveEditedProduct,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
