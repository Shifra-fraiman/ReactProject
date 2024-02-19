import React, { useEffect, useState } from "react";
import { getUsers } from "../../service/user.api";

export const Customers=()=>{
    let [users, setUsers]= useState(null);

const getAllUsers=async()=>{
   const { data }=await getUsers();
   setUsers(data);
}
    useEffect(()=>{
        getAllUsers();
    }, []);

    return <div>
       {users? users.map(u=><li>{ u.username}</li>): ''}
    </div>
}