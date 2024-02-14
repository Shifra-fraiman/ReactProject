import axios from "axios";

//הוספת פגישה
export const createMeeting= (meeting)=>{
    return axios.post(`http://localhost:3000/meeting/`,meeting);
}
//הצגת כל הפגישות למנהל
export const getMeeting= ()=>{
    return axios.get(`http://localhost:3000/meeting/?business_id=8f571327-fd44-4f0f-b0f9-950082e0ced3`);
}
//מחיקת פגישה ע"י id
export const deleteMeetingById=(id)=>{
    return axios.delete(`http://localhost:3000/meeting/${id}`);
}
//קבלת פגישה ע"י id
export const getMeetingById=(id)=>{
    return axios.get(`http://localhost:3000/meeting/${id}`);
}