import React, { useEffect, useReducer, useContext } from 'react';
import { serviceReducer } from './service.reducer.js'
import { getServiceses} from "../../../service/service.api.js";
import { Navigate, useNavigate } from 'react-router-dom';


const ServiceContext = React.createContext();

// custom hook - יצירה של פונקצית הוק, שמחזירה את הקונטקסט של הקטגוריות
export const useServices = () => useContext(ServiceContext);

export const ServicesProvider = (params) => {
    const [services, dispatch] = useReducer(serviceReducer, []);
    const navigate= useNavigate();

    const loadServices = async () => {
        const servicesD = await getServiceses();
        const { data } = servicesD;
        console.log("data: "+data);
        dispatch({
            type: 'load',
            value: data,
        })
        console.log("in context: "+services);
    }

    useEffect(() => {
        loadServices();
        // navigate('admin/service');
    }, []);


    const value = {
        services,
        dispatch,
        loadServices,
    };

    return <ServiceContext.Provider value={value} >
        {/* מכיל את החלק שנשלח בתוך הקומפוננטה */}
        {params.children}
    </ServiceContext.Provider>
}