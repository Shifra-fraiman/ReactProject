import React, { useEffect, useState } from "react";
//import { createMeeting } from '../../service/api.js'
import { getServiceses } from "../../service/service.api.js";
import { Outlet, Link } from "react-router-dom";
// import { FormOrderMeeting } from './formOrderMeeting.component.jsx'
import './meeting.css'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/system";

export const Meeting = () => {
    let [dataService, setDataService] = useState(null);


    const getAllServices = async () => {
        const services = await getServiceses();
        const { data } = services;
        setDataService(data);
    }

    useEffect(() => {
        getAllServices();
    }, [],);

    return (<div width={'100%'}>

        {dataService ? <div className="photo-card">{dataService.map(service =>
            <li key={service.id} id={service.id} className="photo-details">
                <Link to={"/meeting/form/" + service.id} className="photo-title">{service.name}
                    <img src={service.img} width={'20%'} className="img"></img></Link><h1>____________________________</h1>
                <h4>מחיר: {service.cost}</h4>
                <h6>למשך: {service.duration}</h6></li>)}
        </div> : <h1 color="black" >טוען נתונים...</h1>
            // <Box sx={{ ml: '-20%'}}>
            // <Stack sx={{ color: 'rgb(212, 23, 91)' , mx: 'auto'}} spacing={2} direction="row">
            //     <CircularProgress color="inherit" />
            // </Stack>
            // </Box>
        }
        <div>
            <Outlet />
        </div>
    </div >)
}