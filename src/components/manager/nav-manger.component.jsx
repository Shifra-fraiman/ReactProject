import React from "react";
import { Outlet, Link } from "react-router-dom";
import './nav-manager.css';
import { ServicesProvider } from "./service.context";

export const Nav=()=>{
    return <div>
        <h1>Nav</h1>
        <nav>
            <ul>
                <li><Link to={'/admin/details'}>details</Link></li>
                <li><Link to={'/admin/service'}>service</Link></li>
                <li><Link to={'/admin/orders'}>orders</Link></li>
                <li><Link to={'/admin/customers'}>customers</Link></li>
            </ul>
        </nav>
        <div>
            <ServicesProvider>
                <Outlet/>
            </ServicesProvider>
           
        </div>
    </div>
}