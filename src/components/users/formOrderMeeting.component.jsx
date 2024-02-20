import React from "react";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { getServiceById, getServiceses } from "../../service/service.api.js";
import { createMeeting } from "../../service/meeting.api.js";
import TextField from '@mui/material/TextField';
import './formOrder.css';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Autocomplete from '@mui/material/Autocomplete';
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';



// import { makeStyles } from "@material-ui/core/styles";


export const FormOrderMeeting = () => {
        let { id } = useParams();
        let [service, setService] = useState(null);
        const [password, setPassword] = useState('');
        let [allServices, setAllServices] = useState('');


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

                //allServices
                const allServiceses = await getServiceses();
                setAllServices(allServiceses.data);
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
                return newPassword;
        }

        const order = async (event) => {
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
                        let myPas = generatePassword();
                        console.log(`password`);
                        console.log(password);
                        console.log(myPas);
                        const user = {
                                "user": {
                                        "username": data.firstName + " " + data.lastName,
                                        "password": myPas,
                                        "email": data.email,
                                        "phone": data.phone
                                }
                        };
                        const allUsers = await getUsers();
                        const allUsersData = allUsers.data;
                        console.log(allUsers);
                        const sameUser = allUsersData.filter(user => user.username === data.firstName + " " + data.lastName && user.phone === data.phone);
                        if (sameUser[0] == null)
                                createUser(user);
                        else {
                                alert("הינך לקוח הקיים במערכת")
                        }

                }
                form.reset();
                alert(`${data.date}נפגש בשמחה ב`);


                navigate("/");

        }


        const theme = {
                spacing: 8,
        }

        return <>
                <form name="orderMeeting" onSubmit={e => order(e)}>
                        <Box sx={{ mx: 'auto' }}>
                                <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={allServices ? allServices.map(s => s.name) : ''}
                                        sx={{ mx: 'auto', width: 200, mt: 2, mb: 2 }}
                                        renderInput={(params) => <TextField {...params} label={service ? service.name : ''} />}
                                />
                        </Box>
                        <br />
                        <br />
                        {/* <Box sx={{ borderColor: 'Primary.main' }}> */}
                        <TextField id="outlined-basic" label="שם פרטי" name="firstName" variant="outlined" margin="2px" />
                        <br />
                        <br />
                        <TextField id="outlined-basic" label="שם משפחה" name="lastName" variant="outlined" margin="2px" />
                        <br />
                        <br />
                        <TextField id="outlined-basic" label="טלפון" variant="outlined" type="tel" name="phone" margin="2px" />
                        <br />
                        <br />
                        <TextField id="outlined-basic" label="מיקום" name="place" variant="outlined" margin="2px" />
                        {/* </Box> */}

                        <Box sx={{ mx: 'auto', width: 200 }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ m: -2 }}>
                                        <DemoItem label="בחר תאריך" sx={{ ml: '-20%' }} >
                                                <DesktopDatePicker />
                                        </DemoItem>
                                </LocalizationProvider>
                        </Box>
                        <Box sx={{ mx: 'auto', width: 200 }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['TimePicker', 'DateTimePicker']}>
                                                <DemoItem label="זמן (התחלה)">
                                                        <TimePicker />
                                                </DemoItem>

                                        </DemoContainer>
                                </LocalizationProvider>
                        </Box>
                        <br />
                        <br />
                        <TextField id="outlined-basic" label="משך זמן-בשעות" name="time" variant="outlined" margin="2px" />
                        {/* <InputLabel shrink>Count</InputLabel> */}
                      
                        <div>
                                <label >האם אתה רוצה להיכנס לרשימת הלקוחות?
                                        <input type="checkbox" name="customer"></input>
                                </label>
                        </div>
                        <button type="submit" >אישור ושליחה</button>
                </form >
        </>

}
