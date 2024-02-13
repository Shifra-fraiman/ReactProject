import axios from "axios";

// export const createService=()=>{
//     return axios.post(`http://localhost:3000/service/`, {
//         "business_id": 1,
//          "name": "ניו בורן",
//          "service": {
//              "img": "../../assets/images/service/newBorn.JPG",
//              "cost": "450 ש''ח ל10 תמונות"
//          }
//  })
// }
//הוספת שירות חדש! רק ע"י המנהל!!!!
export const createService=(service)=>{
    return axios.post(`http://localhost:3000/service/`, service);
}
//שירות לפי מזהה מסוים
// export const getServiceById= ()=>{
//     return axios.get(`http://localhost:3000/service/e1f08dd4-9eec-46dc-9877-b559576c959a`);
// }
 
export const getServiceById= (id)=>{
    return axios.get(`http://localhost:3000/service/${id}`);
}
//מביא את כל השירותים
 //אם נשנה את המנהל נצטרך לשנות את הid כאן
export const getServiceses= ()=>{
    return axios.get(`http://localhost:3000/service/?business_id=8f571327-fd44-4f0f-b0f9-950082e0ced3`);
}

