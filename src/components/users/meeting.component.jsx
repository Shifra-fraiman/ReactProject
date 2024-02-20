import React, { useEffect, useState } from "react";
//import { createMeeting } from '../../service/api.js'
import { getServiceses } from "../../service/service.api.js";
import { Outlet, Link, useParams} from "react-router-dom";
import { FormOrderMeeting } from './formOrderMeeting.component.jsx'

export const Meeting=()=>{
    let [dataService, setDataService]=useState(null);

    
    const getAllServices= async()=>{
        const services= await getServiceses();
        //const data= await JSON.parse(services);
        //const data= await services.json();
        const { data } =services;
        setDataService(data);
    }

    useEffect(()=>{
        getAllServices();
    }, [],);

    return (<div width={'100%'}> 
        
        {dataService? <div>{dataService.map(service=> <li key={service.id} id= {service.id}> <Link to={"/meeting/form/"+service.id} >{service.name} <img src={service.img} width={'20%'}></img></Link> </li>)}</div> : <h1 color="black" >hello world </h1>}
        <div>
            <Outlet />
      </div>
        {/* dataService? 
         dataService.map{} <h1> { dataService[0].name }</h1> : <h1 color="black" >hello world </h1>}*/}
        {/* <button >
            <Link to={'/meeting/form'}>ניסוי- להזמנה</Link>
        </button> */}
    </div>)
}