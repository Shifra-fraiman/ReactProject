import React from "react";
import { useState, useEffect } from 'react';
import { getMyBussines } from '../service/bussines.api';
import Popup from 'reactjs-popup';
import './home.css';
// import advertising from '../assets/images/advertising.jpg';

export const Home = () => {
    const [dataMyBusiness, setDataMyBusiness] = useState("");
    const [showPopup, setShowPopup] = useState(true);

    const getBussines = async () => {
        const myBussines = await getMyBussines();
        let sentece = (JSON.stringify(myBussines.data.description)).slice(1, -1);
        console.log("sentece: " + sentece);
        let s = divideStringByPoint(sentece);
        myBussines.data.description = s;
        console.log(myBussines);
        setDataMyBusiness(myBussines.data);
    }

    const divideStringByPoint = (sentece) => {
        return (JSON.stringify(sentece)).slice(1, -1).split('.');
    }

    useEffect(() => {
        getBussines();
        // setShowPopup(!showPopup);
        // if (dataMyBusiness != undefined && dataMyBusiness.sale != undefined) {
        //     let saleDateFrom = dataMyBusiness.sale.dateFrom.split('-');
        //     saleDateFrom = new Date(saleDateFrom[0], saleDateFrom[1], saleDateFrom[2]);
        //     console.log("saleDateFrom: " + saleDateFrom);
        // }
        // console.log(`${new Date().toDateString()} < ${Date.parse("2024-03-01")} = ${new Date().toDateString() < Date.parse("20-02-2024")}`);
    }, []);

    const offset = {
        left: 50,
        top: 50,
    };


    return <div>
        <Popup popupClass={"popup-content"} /*offset={offset}*/ show={true} open={true}
            modal nested>
            {
                close => (
                    <div className='modal'>
                        <div className='content'>
                            <h3>מבצע שווה במיוחד!!</h3>
                            <h3>{(dataMyBusiness != undefined) ? (dataMyBusiness.sale != undefined) ? <p> רק עד: {dataMyBusiness.sale.dateTo}  </p> : '' : ''}</h3>
                            {(dataMyBusiness != undefined) ? (dataMyBusiness.sale != undefined) ? <p>{dataMyBusiness.sale.description} </p> : '' : ''}
                        </div>
                    </div>
                )
            }
        </Popup>
        <img src="../src/assets/images/חתוך3.jpg"
            width={'100%'}>
        </img>
        <div id="whoMeBackground">
            <div id="whoMe">
                <h2 id="whoMeTitle">מי אני?</h2>
                <div id="whoMeText">{(dataMyBusiness != undefined) ? (dataMyBusiness.description != undefined) ? dataMyBusiness.description.map(s => <p> {s} </p>) : '' : ''} </div>
            </div>
        </div>

        <div id="gallery"></div>

        <div id="contactAndAddress">
            <p>{(dataMyBusiness != undefined) ? (dataMyBusiness.contact != undefined) ? dataMyBusiness.contact.phone : '' : ''}</p>
            <p>{(dataMyBusiness != undefined) ? (dataMyBusiness.contact != undefined) ? dataMyBusiness.contact.mail : '' : ''}</p>
            <p>{(dataMyBusiness != undefined) ? (dataMyBusiness.contact != undefined) ? dataMyBusiness.contact.website : '' : ''}</p>
        </div>
        {/* <img src={advertising}/> */}
    </div>

}