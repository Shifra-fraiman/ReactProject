import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import './nav-manager.css';
import { ServicesProvider } from "../service/service.context";
import { OrdersProvider } from "../order/order.context"

export const Nav = () => {
    const [link, setLink]= useState('');
    function handleClick() {
        setLink(true);
      }
    return <div>
        {link? '': <h1 className="title">שלום לך, מנהל יקר</h1>}
        {link? '':<h2  className="title">מכאן תוכל לנהל את האתר שלך ביעילות ובנוחות</h2>}
        <nav>
            <ul>
                <li><Link to={'/admin/details'} onClick={handleClick}>פרטי העסק</Link></li>
                <li><Link to={'/admin/service'} onClick={handleClick}>שירותי העסק</Link></li>
                <li><Link to={'/admin/orders'} onClick={handleClick}>הזמנות</Link></li>
                <li><Link to={'/admin/customers'} onClick={handleClick}>לקוחות</Link></li>
            </ul>
        </nav>
        <div>
            <OrdersProvider>
                <ServicesProvider>
                    <Outlet />
                </ServicesProvider>
            </OrdersProvider>

        </div>
    </div>
}