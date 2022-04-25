import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddproductPage from "./pages/AddPage";
import AdminPage from "./pages/AdminPage";
import EditPage from "./pages/EditPage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin-panel" element={<AdminPage />} />
        <Route path="/admin-panel/add" element={<AddproductPage />} />
        <Route path="admin-panel/edit/:id" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
