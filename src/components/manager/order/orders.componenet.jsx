import React, { useState, useEffect } from "react";
import { getMeeting, deleteMeetingById, getMeetingById, createMeeting, } from "../../../service/meeting.api";
import { useNavigate } from 'react-router-dom';
import { useOrders } from "./order.context";
import { OrderForm } from './orderForm.component';



export const Orders = () => {
    // let [meetings, setMeetings] = useState(null);
    let [formUpdateMeeting, setFormUpdateMeetring] = useState(false);
    let [meetingId, setMeetingId] = useState(null);
    let id = null;
    const navigate = useNavigate();

    const { orders, dispatch, loadOrders } = useOrders();

    // const getAllMeeting = async () => {
    //     const services = await getMeeting();
    //     const { data } = services;
    //     console.log(data);
    //     setMeetings(data);
    // }

    // useEffect(() => {
        
    // }, [orders]);

    const deleteOrder = async (e) => {
        e.preventDefault();
        // id = e.target.id;

        // console.log("id" + id);
        await deleteMeetingById(e.target.id);
        await loadOrders();
        //deleteMeetingById(id);
        alert("הפגישה נמחקה בהצלחה!");
    }
    const addMeeting = async (e) => {
        console.log("i in add meeting");
        e.preventDefault();
        const form = e.target;
        const data = Object.fromEntries([...(new FormData(form)).entries()]);
        const meeting = {
            business_id: "8f571327-fd44-4f0f-b0f9-950082e0ced3",
            start_time: data.time,
            duration: data.duration,
            meeting: {
                type: data.type,
                date: data.date,
                place: data.place,
                customerDetails: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    phone: data.phone
                }
            }
        }
        await createMeeting(meeting);
        await loadOrders();
        form.reset();
        setFormUpdateMeetring(false);
    }

    const updateMeeting = async (e, id) => {
        e.preventDefault();
        const form = e.target;
        const data = Object.fromEntries([...(new FormData(form)).entries()]);
        const meeting = {
            business_id: "8f571327-fd44-4f0f-b0f9-950082e0ced3",
            start_time: data.time,
            duration: data.duration,
            meeting: {
                type: data.type,
                date: data.date,
                place: data.place,
                customerDetails: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    phone: data.phone
                }
            }
        }
        await updateMeeting(id, meeting);
        await loadOrders();
        form.reset();
    }


    const updateOrAddMeetingBtn = (meeting) => {
        setMeetingId(meeting);
        setFormUpdateMeetring(!formUpdateMeeting);
    }

    const sortOrders = (type) => {
        switch (type) {
            case "name":
                dispatch({
                    type: 'sortByCustomerName',
                })
                break;
            case "date":
                dispatch({
                    type: 'sortByDate',
                })
                break;

            default:
                break;
        }
    }

    return (
        <div width={'100%'}>
            {orders ? <div>{orders.map(m => <li key={m.id} id={m.id}>{m.type},{m.startTime},  {m.customerDetails.firstName} {m.customerDetails.lastName}
                <button key={m.id} id={m.id} onClick={(e) => deleteOrder(e)}>❌</button>
                <button id={m.id} onClick={() => updateOrAddMeetingBtn(m)}>עדכון</button>
            </li>)}</div> : <h1 color="black" >hello world </h1>}
            <button onClick={e => updateOrAddMeetingBtn(null)}>להוספת פגישה</button>
            {formUpdateMeeting ? <OrderForm objUpdate={meetingId} updateMeeting={updateMeeting} addMeeting={addMeeting} /> : ''}
            <select onChange={(e) => sortOrders(e.target.value)}>מיון
            <option value="normal" >רגיל </option>
                <option value="name" >שם הלקוח</option>
                <option value="date">תאריך</option>
            </select>
        </div>)
}