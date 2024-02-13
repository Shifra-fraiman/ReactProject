import React, { useState, useEffect } from "react";
import { getMeeting, deleteMeetingById } from "../../service/meeting.api";


export const Orders = () => {
    let [meeting, setMeeting] = useState(null);
    let id=null;

    const getAllMeeting = async () => {
        const services = await getMeeting();
        const { data } = services;
        console.log(data);
        setMeeting(data);
    }

    useEffect(() => {
        console.log("in .............");
        getAllMeeting();
    }, [], [id]);

    const deleteOrder = async(e) => {
        e.preventDefault();
        id= e.target.id;
       
        console.log("id"+id);
        await deleteMeetingById(id);
        //deleteMeetingById(id);
        alert("הפגישה נמחקה בהצלחה!")
    }

    return (<div width={'100%'}>
        {meeting ? <div>{meeting.map(m => <li key={m.id} id={m.id}>{m.type},{m.startTime},  {m.customerDetails.firstName} {m.customerDetails.lastName}<button key={m.id} id={m.id} onClick={(e) => deleteOrder(e)}>❌</button></li>)}</div> : <h1 color="black" >hello world </h1>}
    </div>)
}