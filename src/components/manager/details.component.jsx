import React, { useEffect, useState } from "react";
import { getMyBussines } from "../../service/bussines.api";
import { updateMyBussines } from "../../service/bussines.api";
import './details.css'


export const Details = () => {
    const [dataMyBusiness, setDataMyBusiness] = useState("");
    const [address, setAddress] = useState(false);
    const [description, setDescription] = useState(false);
    const [contact, setContact] = useState(false);
    const [sale, setSale] = useState(false);
    let [descriptionInOneSentece, setDescriptionInOneSentece]= useState(null);
    let business, business2;

    useEffect(() => {
        getBussines();
    }, []);

    const getBussines = async () => {
        const myBussines = await getMyBussines();
        setDescriptionInOneSentece(myBussines.data.description);
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

    

    const changeDataOfMyBusiness = (e, type) => {
        e.preventDefault();
        const form = e.target;
        console.log("target: " + e.target);
        const data = Object.fromEntries([...(new FormData(form)).entries()]);
        console.log("data: " + data);
        switch (type) {
            case "description":
                //עדכון ה - useState
                setDataMyBusiness({ ...dataMyBusiness, description: divideStringByPoint(data.text) });
                console.log(dataMyBusiness);
                //עדכון ה- Node
                business = { ...dataMyBusiness, description: JSON.stringify(data.text) };
                business2 = { business, "userId": "aaa3488f-64fb-4d36-8d98-5d483e7bce7a" }
                console.log("business: " + business2);
                //updateMyBussines(business2);
                //סגירת הטופס
                setDescription(!description);
                break;
            case "address":
                //עדכון ה - useState
                setDataMyBusiness({ ...dataMyBusiness, address: data.address });
                console.log(dataMyBusiness);
                //עדכון ה- Node
                business = { ...dataMyBusiness, address: data.address, description: descriptionInOneSentece };
                business2 = { business, "userId": "aaa3488f-64fb-4d36-8d98-5d483e7bce7a" }
                console.log("business: " + business2);

                //סגירת הטופס
                setAddress(!address);
                break;
            case "contact":
                //עדכון ה - useState
                setDataMyBusiness({ ...dataMyBusiness, contact: { "mail": data.mail, "phone": data.phone, "website": data.website } });
                console.log(dataMyBusiness);
                //עדכון ה- Node
                business = { ...dataMyBusiness, contact: { "mail": data.mail, "phone": data.phone, "website": data.website }, description: descriptionInOneSentece };
                business2 = { business, "userId": "aaa3488f-64fb-4d36-8d98-5d483e7bce7a" }
                console.log("business: " + business2);
                //updateMyBussines(business2);
                //סגירת הטופס
                setContact(!contact);
                break;
            case "sale":
                //עדכון ה - useState
                setDataMyBusiness({ ...dataMyBusiness, sale: { "description": data.sale, "dateFrom": data.saleDateFrom ,"dateTo": data.saleDateTo } });
                console.log(dataMyBusiness);
                //עדכון ה- Node
                business = { ...dataMyBusiness, sale: { "description": data.sale, "dateFrom": data.saleDateFrom, "dateTo": data.saleDateTo }, description: descriptionInOneSentece };
                business2 = { business, "userId": "aaa3488f-64fb-4d36-8d98-5d483e7bce7a" }
                console.log("business: " + business2);
                //updateMyBussines(business2);
                //סגירת הטופס
                setSale(!sale);
                break;


            default:
                break;
        }
        updateMyBussines(business2);
        form.reset();
    }


    return <div>
        <h1 >פרטי העסק של: {dataMyBusiness.name}</h1>
        <h4>מידע שיווקי</h4>
        <div >{(dataMyBusiness != undefined) ? (dataMyBusiness.description != undefined) ? dataMyBusiness.description.map(s => <p> {s} </p>) : '' : ''} </div>
        {/* <p>{(dataMyBusiness!= undefined)?  dataMyBusiness.description :''}</p> */}
        <button onClick={() => setDescription(!description)}>לשינוי הטקסט</button>
        {description ?
            <form action="" onSubmit={e => changeDataOfMyBusiness(e, "description")}>
                <label htmlFor="text">כתוב כאן את הטקסט שתרצה שיופיע בדף הבית</label>
                <br />
                <textarea name="text" id="" cols="30" rows="10"></textarea>
                <button>לאישור</button>
            </form> : ''}
        <h4> כתובת:</h4>
        <p>{(dataMyBusiness != undefined) ? dataMyBusiness.address : ''} <button onClick={() => setAddress(!address)}>לשינוי הכתובת</button> </p>
        {address ?
            <form action="" onSubmit={e => changeDataOfMyBusiness(e, "address")}>
                <label htmlFor="text">כתוב כאן את הכתובת לשינוי</label>
                <br />
                <textarea name="address" id="" cols="30" rows="3"></textarea>
                <button>לאישור</button>
            </form> : ''}
        <h4>יצירת קשר:</h4>
        <p>{(dataMyBusiness != undefined) ? (dataMyBusiness.contact != undefined) ? dataMyBusiness.contact.phone : '' : ''}</p>
        <p>{(dataMyBusiness != undefined) ? (dataMyBusiness.contact != undefined) ? dataMyBusiness.contact.mail : '' : ''}</p>
        <p>{(dataMyBusiness != undefined) ? (dataMyBusiness.contact != undefined) ? dataMyBusiness.contact.website : '' : ''}</p>
        <button onClick={() => setContact(!contact)}>לשינוי דרכי יצירת קשר</button>
        {contact ?
            <form action="" onSubmit={e => changeDataOfMyBusiness(e, "contact")}>
                <label htmlFor="phone">טלפון</label>
                <br />
                <input type="tel" name="phone" />
                <label htmlFor="mail">מייל</label>
                <br />
                <input type="email" name="mail" />
                <label htmlFor="website">אתר</label>
                <br />
                <input type="text" name="website" />
                <button>לאישור</button>
            </form> : ''}
        <h4>מבצעים עכשויים</h4>
        {(dataMyBusiness != undefined) ? (dataMyBusiness.sale != undefined) ? <p>{dataMyBusiness.sale.description}  | {dataMyBusiness.sale.dateFrom} - {dataMyBusiness.sale.dateTo} <button onClick={() => setSale(!sale)}>לשינוי המבצע</button></p> : '' : ''}
        {sale ?
            <form action="" onSubmit={e => changeDataOfMyBusiness(e, "sale")}>
                <label htmlFor="sale">כתוב כאן את המלל לשינוי</label>
                <br />
                <textarea name="sale" id="" cols="30" rows="3"></textarea>
                <label htmlFor="saleDateFrom">מתאריך?</label>
                <input type="date" name="saleDateFrom" />
                <br />
                <label htmlFor="saleDateTo">עד תאריך:</label>
                <input type="date" name="saleDateTo" />
                <button>לאישור</button>
            </form> : ''}
    </div>
}