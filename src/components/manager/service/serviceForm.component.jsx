import React, { useEffect, useState } from "react";

export const ServiceForm = (props) => {
    let [service, setService] = useState('');
    const [file, setFile] = useState();

    useEffect(() => {
        if (props?.serviseObj)
            setService(props.serviseObj);
    }, [])


    return <>{
        <form name="orderMeeting" onSubmit={(e) => props.onsubmit(e, service)}>
            <div>
                <label >שם השירות:
                    <input type="text" name="name" defaultValue={(service != null) ? service.name : ''}></input></label>

            </div>
            <div>
                <label >משך זמן:
                    <input type="text" name="duration" defaultValue={(service != null) ? service.duration : ''}></input></label>

            </div>
            <div>
                <label >מחיר:
                    <input type="text" name="cost" defaultValue={(service != null) ? service.cost : ''}></input></label>

            </div>
            <div>
                <label >קישור לתמונה:
                    <input type="file" accept="image/*" onChange={props.handleChange} name="img"></input></label>
                <img src={file} width={'40%'} />

            </div>
            <button type="submit" >אישור ושליחה</button>
        </form>

    }
    </>
}