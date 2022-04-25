import axios from "axios";
import React, { useReducer } from "react";

export const adminContext = React.createContext();

const initState = {
  products: [],
  productToEdit: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_TO_EDIT":
      return { ...state, productToEdit: action.payload };
    default:
      return state;
  }
};

const API = " http://localhost:8030/products";

const AdminContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
  };

  const getProduct = async () => {
    const response = await axios(API);
    const action = {
      type: "GET_PRODUCT",
      payload: response.data,
    };
    dispatch(action);
  };

  const getProductToEdit = async (id) => {
    const response = await axios(`${API}/${id}`);
    const action = {
      type: "GET_PRODUCT_TO_EDIT",
      payload: response.data,
    };
    dispatch(action);
  };
  const saveEditedProduct = async (editedProduct) => {
    await axios.patch(`${API}/${editedProduct.id}`, editedProduct);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProduct();
  };

  return (
    <adminContext.Provider
      value={{
        addProduct,
        getProduct,
        getProductToEdit,
        saveEditedProduct,
        deleteProduct,
        products: state.products,
        productToEdit: state.productToEdit,
      }}
    >
      {props.children}
    </adminContext.Provider>
  );
};

export default AdminContext;
