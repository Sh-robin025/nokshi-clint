import React from 'react';
import SideBar from './SideBar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductManage from './ProductManage';
import AddProduct from './AddProduct';

const Admin = () => {
    return (
        <div className="d-flex">
            <SideBar />
            <Route exact path="/admin">
                <ProductManage />
            </Route>
            <Route path="/admin/productManage">
                <ProductManage />
            </Route>
            <Route path="/admin/addProduct">
                <AddProduct />
            </Route>
            <Route path="*">
                <h3>page not found,404 !</h3>
            </Route>
        </div>
    );
};

export default Admin;