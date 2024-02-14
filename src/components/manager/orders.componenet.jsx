import React, { useState, useEffect } from "react";
import { getMeeting, deleteMeetingById } from "../../service/meeting.api";
import { useNavigate } from 'react-router-dom';
import { getMeetingById } from "../../service/meeting.api";


export const Orders = () => {
    let [meetings, setMeetings] = useState(null);
    let [formUpdateMeeting, setFormUpdateMeetring] = useState(false);
    let [meetingId, setMeetingId]= useState(null);
    let id = null;
    const navigate = useNavigate();

    const getAllMeeting = async () => {
        const services = await getMeeting();
        const { data } = services;
        console.log(data);
        setMeetings(data);
    }

    useEffect(() => {
        console.log("in .............");
        getAllMeeting();
    }, [], [id]);

    const deleteOrder = async (e) => {
        e.preventDefault();
        id = e.target.id;

        console.log("id" + id);
        await deleteMeetingById(id);
        setMeetings(meetings.filter(m => m.id != id));
        //deleteMeetingById(id);
        alert("הפגישה נמחקה בהצלחה!")
    }
    const addMeeting = () => {
        navigate('/meeting');
    }
    const updateMeeting = () => {

    }
    const updateMeetingBtn=async(e)=>{
        e.preventDefault();
        id= e.target.id;
        let { data }=await getMeetingById();
        setMeetingId(data);
        setFormUpdateMeetring(!formUpdateMeeting);
    }

    return (<div width={'100%'}>
        {meetings ? <div>{meetings.map(m => <li key={m.id} id={m.id}>{m.type},{m.startTime},  {m.customerDetails.firstName} {m.customerDetails.lastName}
            <button key={m.id} id={m.id} onClick={(e) => deleteOrder(e)}>❌</button>
            <button id={m.id} onClick={e=> updateMeetingBtn(e)}>עדכון</button>
        </li>)}</div> : <h1 color="black" >hello world </h1>}
        <button onClick={e => addMeeting()}>להוספת פגישה</button>
        {formUpdateMeeting? <form name="orderMeeting" onSubmit={e => updateMeeting(e)}>
            <div>
                <img src="src/assets/images/newBorn.JPG" /*src="{service? service.img :''}*/></img>
            </div>
            <div>
                <label >שם פרטי
                    <input type="text" name="firstName"></input></label>

            </div>
            <div>
                <label >שם משפחה
                    <input type="text" name="lastName"></input></label>

            </div>
            <div>
                <label >טלפון
                    <input type="tel" name="phone"></input></label>

            </div>
            <div>
                <label >מיקום
                    <input type="text" name="place"></input>
                </label>

            </div>
            <div>
                <label>בחר תאריך
                    <input type="date" name="date"></input>
                </label>

            </div>
            <div>
                <label >בחר שעת התחלה
                    <input type="time" name="time"></input>
                </label>

            </div>
            <div>
                <label >משך זמן - בשעות
                    <input type="number" name="duration"></input>
                </label>

            </div>
            <div>
                <label >האם אתה רוצה להיכנס לרשימת הלקוחות?
                    <input type="checkbox" name="customer"></input>
                </label>
            </div>
            <button type="submit" >אישור ושליחה</button>
        </form> :''}


    </div>)
}