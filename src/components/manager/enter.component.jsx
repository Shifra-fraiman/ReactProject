import React from "react";
import { getMyBussines } from '../../service/bussines.api';
import { getUserByUserId } from '../../service/user.api';

export const Enter = (props) => {

    const getBussines = async () => {
        const myBussines = await getMyBussines();
        const { data } = myBussines;
        console.log(data);
        return data.userId;
    }

    const getManager = async (id) => {
        const manager = await getUserByUserId(id);
        const { data } = manager;
        console.log(data);
        return data;
    }


    const identity = async (e) => {
        e.preventDefault();
        const form = e.target;
        const admin = Object.fromEntries([...(new FormData(form)).entries()]);
        
        const userId = await getBussines();
        const manager = await getManager(userId);

        console.log("manager: " + manager);

        if (admin.name == manager.username && admin.password == manager.password) {
            props.setNavFunc(true);
        }
        else {
            alert("שם מישתמש או הסיסמה אינם נכונים!!")
            props.setNavFunc(false);
        }
    }

    return <div>
        <h1>נא הכנס שם משתמש וסיסמה:</h1>
        <form name="updateCustomer" onSubmit={e => identity(e)}>
            <div>
                <label>שם משתמש
                    <input type="text" name="name"></input></label>
            </div>
            <div>
                <label>סיסמה
                    <input type="text" name="password"></input></label>
            </div>
            <button type="submit" >לכניסה</button>
        </form>
    </div>
}