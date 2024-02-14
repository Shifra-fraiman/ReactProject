import React, { useEffect, useState } from "react";
import { getServiceses, getServiceById, updateServiceById, createService } from "../../service/service.api.js";
import { deleteServiceById } from "../../service/service.api.js";

export const Service = () => {
    let [dataService, setDataService] = useState(null);
    let [btnAddService, setBtnAddService] = useState(false);
    let [BtnUpdateService, setBtnUpdateService] = useState(true);
    let [serviceId, setServiceId] = useState(false);
    let [service, setService] = useState(null);




    const getAllServices = async () => {
        const services = await getServiceses();
        const { data } = services;
        setDataService(data);
    }

    useEffect(() => {
        getAllServices();
    }, [], [setDataService]);

    useEffect(() => {
        setBtnUpdateService(!BtnUpdateService);
    }, [service]);


    //להצגת התמונה אחרי העלאה
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const addService = (e) => {
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
        createService(service);
        form.reset();
        setBtnAddService(false);
        service = {
            "business_id": "8f571327-fd44-4f0f-b0f9-950082e0ced3",
            "name": data.name,
            "img": "../../assets/images/service/" + data.img.name,
            "cost": data.cost,
            "duration": data.duration

        }
        addToDataService(dataService, service);
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

        // console.log(data);
    }

    const updateService = async (e) => {
        console.log("I in update");
        e.preventDefault();
        const form = e.target;
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
        updateServiceById(service.id, newService);
        form.reset();
        setBtnUpdateService(false);
        newService = {
            "img": "../../assets/images/service/" + data.img.name,
            "cost": data.cost,
            "duration": data.duration,
            "id": service.id,
            "name": data.name,
            "businessId": "8f571327-fd44-4f0f-b0f9-950082e0ced3"
        }
        let newServices = dataService.filter(s => (s.id != service.id));
        addToDataService(newServices, newService)
    }
    //הוספת אובייקט שירות לשירותים ב state
    const addToDataService = (services, newService) => {
        services.push(newService);
        setDataService(services);
    }

const deleteService = async(e) => {
        e.preventDefault();
        const id= e.target.id;
       
        console.log("id"+id);
        await deleteServiceById(id);
        setDataService(dataService.filter(m=> m.id!=id));
        //deleteMeetingById(id);
        alert("השירות נמחק בהצלחה!");
    }

    return <div>
        {dataService ? <div>{dataService.map(service => <li key={service.id}>{service.name} <img src="../../assets/images/newBorn.JPG" width={'20%'}></img><button key={service.id} id={service.id} onClick={(e) => { getErviceId(e); }}>עידכון</button> <button id={service.id} onClick={e=> deleteService(e)}>❌</button> </li>)}</div> : <h1 color="black" >hello world </h1>}
        <button onClick={() => setBtnAddService(!btnAddService)}>להוספת שירות חדש</button>
        {
            btnAddService ? <div><form name="orderMeeting" onSubmit={e => addService(e)}>
                <div>
                    <label >שם השירות:
                        <input type="text" name="name"></input></label>

                </div>
                <div>
                    <label >משך זמן:
                        <input type="text" name="duration"></input></label>

                </div>
                <div>
                    <label >מחיר:
                        <input type="text" name="cost"></input></label>

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
        {
            BtnUpdateService ? <div><form name="orderMeeting" onSubmit={e => updateService(e)}>
                <div>
                    <label >שם השירות:
                        <input type="text" defaultValue={(service != null) ? service.name : ''} name="name"></input></label>

                </div>
                <div>
                    <label >משך זמן:
                        <input type="text" defaultValue={(service != null) ? service.duration : ''} name="duration"></input></label>

                </div>
                <div>
                    <label >מחיר:
                        <input type="text" defaultValue={(service != null) ? service.cost : ''} name="cost"></input></label>

                </div>
                <div>
                    <label >קישור לתמונה:
                        <input type="file" accept="image/*" defaultValue={(service != null) ? service.image : ''} onChange={handleChange} name="img"></input></label>
                    <img src={file} width={'20%'} />

                </div>
                <button type="submit" >אישור ושליחה</button>
            </form>
            </div>
                : ''
        }
    </div>
}