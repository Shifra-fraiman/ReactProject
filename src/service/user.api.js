import axios from "axios";

//שליפת משתמש לפי userId
export const getUserByUserId= (userId)=>{
    return axios.get(`http://localhost:3000/user/${userId}`);
}
export const creatUser = (user)=>{
    return axios.post(`http://localhost:3000/user`,user);
    // {  "user": {
    //     "username": "lll",
    //     "password": "lll$147",
    //     "role": "costumer",
    //     "email": "ef@gmail.com",
    //     "phone": "052-7620477"
        
    // }}
}
