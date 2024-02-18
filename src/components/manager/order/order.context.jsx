import React, { useEffect, useReducer, useContext } from 'react';
import { ordersReducer } from './order.reducer.js'
import { getMeeting } from "../../../service/meeting.api.js";
//import { Navigate, useNavigate } from 'react-router-dom';

const OrderContext = React.createContext();

// custom hook - יצירה של פונקצית הוק, שמחזירה את הקונטקסט של הקטגוריות
export const useOrders = () => useContext(OrderContext);

export const OrdersProvider = (params) => {
    const [orders, dispatch] = useReducer(ordersReducer, []);
    //const navigate= useNavigate();

    const loadOrders = async () => {
        const meetings = await getMeeting();
        const { data } = meetings;
        console.log("data: "+data);
        dispatch({
            type: 'load',
            value: data,
        })
        // console.log("in context: "+services);
    }

    useEffect(() => {
        loadOrders();
        // navigate('admin/service');
    }, []);


    const value = {
        orders,
        dispatch,
        loadOrders,
    };

    return <OrderContext.Provider value={value} >
        {/* מכיל את החלק שנשלח בתוך הקומפוננטה */}
        {params.children}
    </OrderContext.Provider>
}