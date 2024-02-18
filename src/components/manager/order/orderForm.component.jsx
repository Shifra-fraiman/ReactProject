import React, { useEffect, useState } from "react";

export const OrderForm = (props) => {
    let [oldMeeting, setOldMeeting] = useState(false);
    let [update, setUpdate] = useState(false);

    useEffect(() => {
        if (props.objUpdate != null) {
            setUpdate(true);
            setOldMeeting(props.objUpdate);
        }
    }, []);


    return <form name="orderMeeting" onSubmit={e => update ? props.updateMeeting(e,oldMeeting.id) : props.addMeeting(e)}>
        <div>
            <img src="src/assets/images/newBorn.JPG" /*src="{service? service.img :''}*/></img>
        </div>
        <div>
            <label >שם פרטי:
                <input type="text" defaultValue={update ? oldMeeting ? oldMeeting.customerDetails.firstName : '' : ''} name="firstName"></input></label>

        </div>
        <div>
            <label >שם משפחה:
                <input type="text" defaultValue={update ? oldMeeting ? oldMeeting.customerDetails.lastName : '' : ''} name="lastName"></input></label>

        </div>
        <div>
            <label >טלפון:
                <input type="tel" defaultValue={update ? oldMeeting ? oldMeeting.customerDetails.phone : '' : ''} name="phone"></input></label>

        </div>
        <div>
            <label >סוג השירות:
                <input type="text" defaultValue={update ? oldMeeting ? oldMeeting.type : '' : ''} name="type"></input>
            </label>

        </div>
        <div>
            <label >מיקום:
                <input type="text" defaultValue={update ? oldMeeting ? oldMeeting.place : '' : ''} name="place"></input>
            </label>

        </div>
        <div>
            <label>בחר תאריך:
                <input type="date" defaultValue={update ? oldMeeting ? oldMeeting.date : '' : ''} name="date"></input>
            </label>

        </div>
        <div>
            <label >בחר שעת התחלה:
                <input type="time" defaultValue={update ? oldMeeting ? oldMeeting.startTime : '' : ''} name="time"></input>
            </label>

        </div>
        <div>
            <label >משך זמן - בשעות:
                <input type="number" defaultValue={update ? oldMeeting ? oldMeeting.duration : '' : ''} name="duration"></input>
            </label>

        </div>
        <div>
            <label >האם אתה רוצה להיכנס לרשימת הלקוחות?
                <input type="checkbox" defaultValue={update ? oldMeeting ? oldMeeting.customer ? customer : '' : '' : ''} name="customer"></input>
            </label>
        </div>
        <button type="submit" >אישור ושליחה</button>
    </form>
}