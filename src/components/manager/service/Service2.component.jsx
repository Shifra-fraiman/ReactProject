import React, { useEffect, useState } from "react";
import { getServiceses, getServiceById, updateServiceById, createService } from "../../service/service.api.js";
import { deleteServiceById } from "../../service/service.api.js";
import chalake from '../../assets/images/service/chalake.jpg';
import newBorn from '../../assets/images/service/newBorn.jpg';


const Service2 = () => {
    // let [dataService, setDataService] = useState(null);
    // let [btnAddService, setBtnAddService] = useState(false);
    // let [BtnUpdateService, setBtnUpdateService] = useState(true);
    // let [serviceId, setServiceId] = useState(false);
    // let [service, setService] = useState(null);

    const [services, dispatch] = useReducer(serviceReducer, getAllServices());

    const getAllServices = async () => {
        const services = await getServiceses();
        const { data } = services;
        setDataService(data);
    }

    // useEffect(() => {
    //     getAllServices();
    // }, [], [setDataService]);

    // const addService = (category => {
    //     // הודעה על הוספה
    //     // הפונקציה מקבלת action - 
    //     // אוביקט פעולה שמתאר מה קרה
    //     dispatch({
    //         type: 'add',
    //         //newService: category,
    //     })
    //     setCanAdd(false);
    // })

    // const removeService = (category) => {
    //     dispatch({
    //         type: 'remove',
    //         id: category.id,
    //     })
    //     // const newCategories = categories.filter(c => c.id !== category.id);
    //     // setCategories(newCategories);
    // }

    // const editCategory = (category) => {
    //     dispatch({
    //         type: 'edit',
    //         id: category.id,
    //     })

    //     // const newCategory = {
    //     //     ...category,
    //     //     edit: true,
    //     // };
    //     // // שכפול של המערך
    //     // const newCategories = [...categories];
    //     // // מציאת האינדקס של הקטגוריה
    //     // const index = newCategories.findIndex(c => c.id === category.id);
    //     // // newCategories[index] = newCategory;
    //     // newCategories.splice(index, 1, newCategory);
    //     // setCategories(newCategories);
    // } 

    // const saveCategory = (category, newValue) => {
    //     dispatch({
    //         type: 'save',
    //         id: category.id,
    //         newValue,
    //     })
    // }

    return (
        <div>
            {/* { !canAdd && <button onClick={() => setCanAdd(!canAdd)}>
            Add Category
        </button> }

        { canAdd && <AddCategory add={addCategory}/> } */}
        {/* <ul>
            { categories.map(category => <li key={category.id}>
                { category.edit && <input onBlur={e => saveCategory(category, e.target.value)} defaultValue={category.category} /> }
                { !category.edit && <Link to={'/categories/' + category.id}> {category.category} </Link> }
                 <button onClick={() => removeCategory(category)}>X</button>
                 <button onClick={() => editCategory(category)}>E</button>
            </li>) }
        </ul> */}
        <ul>
        {
            services.map(s=> <li key={s.id}>{s.name}</li>)
        }
        </ul>
        {/* <div>
            
            <Outlet />
        </div> */}
        </div>
    )
}
