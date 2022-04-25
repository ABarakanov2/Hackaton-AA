import React from "react";

export const adminContext = React.createContext();

const initState = {
  products: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const AdminContext = () => {
  return <div>AdminContext</div>;
};

export default AdminContext;
