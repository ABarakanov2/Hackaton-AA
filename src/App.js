import React from "react";
import AdminTable from "./components/AdminTable";
import AdminContext from "./Contexts/AdminContext";
import Navigation from "./Navigation";
import AdminPage from "./pages/AdminPage";

const App = () => {
  return (
    <div>
      <AdminContext>
        <Navigation />
      </AdminContext>
    </div>
  );
};

export default App;
