import axios from "axios";

//יצירת עסק עם post
/*{
    "business":{
        "name": "Avigail Grinboim",
        "description": "...",
        "image-logo": "..."
        
    },
    "userId": "aaa3488f-64fb-4d36-8d98-5d483e7bce7a"
}*/
//שליפת העסק שלנו
export const getMyBussines= ()=>{
    return axios.get(`http://localhost:3000/business/?business_id=8f571327-fd44-4f0f-b0f9-950082e0ced3`);
}
export const updateMyBussines=(business)=>{
    return axios.put(`http://localhost:3000/business/8f571327-fd44-4f0f-b0f9-950082e0ced3`, business);
}
/*{
    "business":{
        "name": "Avigail Grinboim",
        "description": "מוזמנים לחווית צילום בלתי נשכחת עם צלמת שתוציא בשבילכם את התמונות הכי יפות ואיכותיות שישאירו לכם מזכרת מושלמת מהרגעים המרגשים שלכם.
אביגיל גרינבוים- הצלמת המושלמת בשבילך,מתמחה בצילומי ניו בורן, חלאקה, בר מצוה, בת מצוה וחתונה.
והכל במחירים מעולים.",
        "image-logo": "..."
        "address": "רחוב חפץ חיים 5 או בכל מקום שתחפצו.",
        "contact": {
            "mail":"avigailg@gmail.com",
            "phone":"08-9743988",
            "website":"avigailgriboim.co.il"
        },
        "sale": {
            "description": "הנחת 5% על כל עסקת צילום הגדולה מ500 ש"ח",
            "date": "20/02/2024 - 01/03/2024"
        }
        
    },
    "userId": "aaa3488f-64fb-4d36-8d98-5d483e7bce7a"
}*/