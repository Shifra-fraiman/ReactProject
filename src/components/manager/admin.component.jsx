import React, { useState } from "react";
import { Enter } from "./enter.component";
import { Nav } from "./nav/nav-manger.component";

export const Admin=()=>{
    const [showNav, setshowNav]= useState(false);

    const setNavFunc=(flag)=>{
        setshowNav(flag);
    }
    
    return <div>
     
        <div>
            { showNav? <Nav /> : <Enter  setNavFunc= {setNavFunc}/> }
        </div>
    </div>
   
    
}