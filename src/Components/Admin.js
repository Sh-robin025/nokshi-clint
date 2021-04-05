import React from 'react';
import SideBar from './SideBar';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import ProductManage from './ProductManage';
import AddProduct from './AddProduct';
import AdminProfile from './AdminProfile';

const Admin = () => {

    return (
        <div className="d-flex">
            <SideBar />
            <Route exact path="/admin">
                <AdminProfile />
            </Route>
            <Route path="/admin/productManage">
                <ProductManage />
            </Route>
            <Route path="/admin/addProduct">
                <AddProduct />
            </Route>
        </div>
    );
};

export default Admin;