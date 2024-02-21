import React, { useState, useEffect } from "react";
import { getMeeting, deleteMeetingById, getMeetingById, createMeeting, updateMeetingById } from "../../../service/meeting.api";
import { useNavigate } from 'react-router-dom';
import { useOrders } from "./order.context";
import { OrderForm } from './orderForm.component';
import './order.css';


export const Orders = () => {
    let [formUpdateMeeting, setFormUpdateMeetring] = useState(false);
    let [meetingId, setMeetingId] = useState(null);
    let id = null;
    const navigate = useNavigate();
    const [sort, setSort] = useState("");
    const { orders, dispatch, loadOrders } = useOrders();


    const deleteOrder = async (e) => {
        e.preventDefault();
        setFormUpdateMeetring(false);
        await deleteMeetingById(e.target.id);
        await loadOrders();
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
        await updateMeetingById(id, meeting);
        await loadOrders();
        form.reset();
        setFormUpdateMeetring(false);
    }


    const updateOrAddMeetingBtn = (meeting) => {
        setMeetingId(meeting);
        setFormUpdateMeetring(!formUpdateMeeting);
    }

    const sortOrders = async (type) => {
        console.log("hello ");
        switch (type) {
            case "name":
                await dispatch({
                    type: 'sortByCustomerName',
                })
                console.log("hello 2");
                console.log(orders);
                orders.map(m => console.log(m.lastName));
                break;
            case "date":
                await dispatch({
                    type: 'sortByDate',
                })
                console.log(orders);
                break;

            default:
                break;
        }
    }
    const types = [{ name: "ללא מיון", value: "normal" }, { name: "שם הלקוח", value: "name" }, { name: "תאריך", value: "date" }]
    return (
        <div width={'100%'}>

            <label htmlFor="">מיון:</label>
            <select onChange={(e) => { setSort(e.target.value); sortOrders(e.target.value) }}>מיון
                <option value="normal" >ללא מיון </option>
                <option value="name" >שם הלקוח</option>
                <option value="date">תאריך</option>
            </select>
            {orders ? <div>{orders.map(m => <li key={m.id} id={m.id} className="li">
                <div> שם המזמין: {m.customerDetails.firstName} {m.customerDetails.lastName}
                    <br />
                    סוג השירות: {m.type} | משעה: {m.startTime} | במשך: {m.duration}
                    <br />

                    בתאריך: {m.date}

                </div>
                <button key={m.id} id={m.id} onClick={(e) => deleteOrder(e)}>❌</button>
                <button id={m.id} onClick={() => updateOrAddMeetingBtn(m)}>עדכון</button>
            </li>)}</div> : <h1 color="black" >טוען נתונים...</h1>}
            <button onClick={e => updateOrAddMeetingBtn(null)}>להוספת פגישה</button>
            {formUpdateMeeting ? <OrderForm objUpdate={meetingId} updateMeeting={updateMeeting} addMeeting={addMeeting} /> : ''}

        </div>)
}