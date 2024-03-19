import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard/index";
import OrderList from "./pages/OrderList/index";
import AddTable from "./pages/AddTable/index";
import TableList from "./pages/TableList/index";
import TableId from "./pages/TableId/index";
import Customer from "./pages/Customer/index";
import Review from "./pages/Review/index";
import AddMenu from "./pages/AddMenu/index";
import MenuList from "./pages/MenuList/index";
import Categories from "./pages/Categories/index";
import Sidebar1 from "components/Sidebar1";
import Addoder from "./pages/Addoder"
const ProjectRoutes = () => {
  return (
    <div className="flex">
    <Sidebar1 />
      <Routes>
        <Route path="dhiwise-dashboard" element={<Home />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="orderlist" element={<OrderList />} />
        <Route path="addoder" element={<Addoder />} />
        <Route path="addtable" element={<AddTable />} />
        <Route path="tablelist" element={<TableList />} />
        <Route path="tableid" element={<TableId />} />
        <Route path="customer" element={<Customer />} />
        <Route path="review" element={<Review />} />
        <Route path="addmenu" element={<AddMenu />} />
        <Route path="menulist" element={<MenuList />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
  );
};

export default ProjectRoutes;



