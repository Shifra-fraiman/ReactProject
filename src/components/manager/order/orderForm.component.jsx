import React, { useEffect, useState } from "react";


export const OrderForm = (props) => {
    let [oldMeeting, setOldMeeting] = useState(false);
    let [update, setUpdate] = useState(false);

    
    useEffect(() => {
        if (props != null){
            setUpdate(true);
            setOldMeeting(props.meeting);

        }
    }, []);


    return <form name="orderMeeting" onSubmit={e => updateMeeting(e)}>
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
    </form>
}