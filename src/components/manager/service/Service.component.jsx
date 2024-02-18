import React, { useEffect, useState, useReducer } from "react";
import { getServiceses, getServiceById, updateServiceById, createService, deleteServiceById } from "../../../service/service.api.js";
import chalake from '../../../assets/images/service/chalake.jpg';
import newBorn from '../../../assets/images/service/newBorn.jpg';
// import { serviceReducer } from "./service/service.reducer.js";
import { useServices } from './service.context.jsx';

export const Service = () => {
    // let [dataService, setDataService] = useState(null);
    let [btnAddService, setBtnAddService] = useState(false);
    let [BtnUpdateService, setBtnUpdateService] = useState(false);
    let [serviceId, setServiceId] = useState(false);
    let [service, setService] = useState(null);

    const { services, dispatch, loadServices } = useServices();



    //להצגת התמונה אחרי העלאה
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const addService =async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = Object.fromEntries([...(new FormData(form)).entries()]);
        console.log(data);
        let service = {
            "business_id": "8f571327-fd44-4f0f-b0f9-950082e0ced3",
            "name": data.name,
            "service": {
                "img": "../../assets/images/service/" + data.img.name,
                "cost": data.cost,
                "duration": data.duration
            }
        }
        console.log(service);
        await createService(service);
        form.reset();
        setBtnAddService(false);
       
        await loadServices();
    }

    const getErviceId = async (e) => {
        console.log(e);
        e.preventDefault();
        console.log(e.target);

        if (e.target != undefined) {
            console.log(`e.target.id: ${e.target.id}`);
            console.log(`e.target: ${e.target}`);
            const serviceData = await getServiceById(e.target.id);
            const { data } = serviceData;
            setService(data);
        }
        setBtnUpdateService(true);

    }

    const updateService = async (e) => {
        console.log("I in update");
        e.preventDefault();
        const form = e.target;
        console.log(e.target);
        console.log(e.target.value);
        const data = Object.fromEntries([...(new FormData(form)).entries()]);

        let newService = {
            "business_id": "8f571327-fd44-4f0f-b0f9-950082e0ced3",
            "service": {
                "name": data.name,
                "img": "../../assets/images/service/" + data.img.name,
                "cost": data.cost,
                "duration": data.duration
            }
        }
        form.reset();
        setBtnUpdateService(false);
        await updateServiceById(service.id, newService);
        await loadServices();

        
    }
    
    const deleteService = async (service) => {
        await deleteServiceById(service.id);
        await loadServices();
        alert("השירות נמחק בהצלחה!");
    }



    return <div>
      
        {services ? <div>{services.map(service => <li key={service.id}> {service.name}
            <img src={service.img == "chalake" ? chalake : newBorn} width={'20%'}></img>
            <button type="button" key={service.id} id={service.id} onClick={(e) => { getErviceId(e); }}>עידכון</button>
            <button id={service.id} onClick={() => deleteService(service)}>❌</button> </li>)}</div> :
            <h1 color="black" >hello world </h1>}
        <button onClick={() => setBtnAddService(!btnAddService)}>להוספת שירות חדש</button>
        {
            btnAddService || BtnUpdateService ? <div><form name="orderMeeting" onSubmit={e => btnAddService? addService(e) : updateService(e)}>
                <div>
                    <label >שם השירות:
                        <input type="text" name="name" defaultValue={BtnUpdateService? (service!=null)?service.name :'':'' }></input></label>

                </div>
                <div>
                    <label >משך זמן:
                        <input type="text" name="duration" defaultValue={BtnUpdateService? (service!=null)?service.duration :'':'' }></input></label>

                </div>
                <div>
                    <label >מחיר:
                        <input type="text" name="cost" defaultValue={BtnUpdateService? (service!=null)?service.cost :'' :'' }></input></label>

                </div>
                <div>
                    <label >קישור לתמונה:
                        <input type="file" accept="image/*" onChange={handleChange} name="img"></input></label>
                    <img src={file} width={'40%'} />

                </div>
                <button type="submit" >אישור ושליחה</button>
            </form>
            </div> : ''
        }
        
    </div>
}