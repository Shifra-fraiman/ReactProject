import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Enter } from "./enter.component";
import { Nav } from "./nav-manger.component";

export const Admin=()=>{
    const [showNav, setshowNav]= useState(false);

    const setNavFunc=(flag)=>{
        setshowNav(flag);
    }
    
    return <div>
        <h1>Admin</h1>
        <div>
            { showNav? <Nav/> : <Enter  setNavFunc= {setNavFunc}/> }
        </div>
    </div>
   
    
}