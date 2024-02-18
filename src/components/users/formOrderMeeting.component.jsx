import React from "react";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { getServiceById } from "../../service/service.api.js";
import { createMeeting } from "../../service/meeting.api.js";




export const FormOrderMeeting = () => {
        let { id } = useParams();
        let [service, setService] = useState(null);
        const [password, setPassword] = useState('');


        const navigate = useNavigate();

        //     let { nameMeeting }=props;
        //     let { imgMeeting }=props;
        console.log(id);

        const getService = async () => {
                const serviceData = await getServiceById(id);
                console.log(serviceData);
                const { data } = serviceData;
                console.log(data);
                setService(data);
        }

        useEffect(() => {
                getService();
        }, []);

        const generatePassword = () => {
                let charset = "";
                let newPassword = "";

                charset += "!@#$%^&*()";
                charset += "0123456789";
                charset += "abcdefghijklmnopqrstuvwxyz";
                charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

                for (let i = 0; i < 12; i++) {
                        newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
                }

                setPassword(newPassword);
        }

        const order = (event) => {
                event.preventDefault();
                const form = event.target;
                const data = Object.fromEntries([...(new FormData(form)).entries()]);
                const meeting = {
                        business_id: "8f571327-fd44-4f0f-b0f9-950082e0ced3",
                        start_time: data.time,
                        duration: data.duration,
                        meeting: {
                                type: service.name,
                                date: data.date,
                                place: data.place,
                                customerDetails: {
                                        firstName: data.firstName,
                                        lastName: data.lastName,
                                        phone: data.phone
                                }
                        }
                }
                createMeeting(meeting);
                if (data.customer) {
                        generatePassword();
                        console.log(`password`);
                        console.log(password);

                        // const user = {
                        //         "user": {
                        //                 "username": data.firstName+" "+data.lastName,
                        //                 "password": "789",
                        //                 "email": data.email,
                        //                 "phone": data.phone
                        //         }
                        // };
                        // creatUser(user);
                }
                form.reset();
                alert(`${data.date}נפגש בשמחה ב`);


                navigate("/");

        }




        return <form name="orderMeeting" onSubmit={e => order(e)}>
                <div>
                        <img src={service? service.img : 'src/assets/images/logo1.jpg' } ></img>
                </div>
                <div>
                        <label >שם פרטי:
                                <input type="text" name="firstName"></input></label>

                </div>
                <div>
                        <label >שם משפחה:
                                <input type="text" name="lastName"></input></label>

                </div>
                <div>
                        <label >טלפון:
                                <input type="tel" name="phone"></input></label>

                </div>
                <div>
                        <label >מיקום:
                                <input type="text" name="place"></input>
                        </label>

                </div>
                <div>
                        <label>בחר תאריך:
                                <input type="date" name="date"></input>
                        </label>

                </div>
                <div>
                        <label >בחר שעת התחלה:
                                <input type="time" name="time"></input>
                        </label>

                </div>
                <div>
                        <label >משך זמן - בשעות:
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
