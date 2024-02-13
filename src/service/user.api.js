import axios from "axios";

//שליפת משתמש לפי userId
export const getUserByUserId= (userId)=>{
    return axios.get(`http://localhost:3000/user/${userId}`);
}
