import React from "react";
import './galery.css';
import image1 from '../../assets/images/new_born/1.jpg';
import image2 from '../../assets/images/new_born/2.jpg';
import image3 from '../../assets/images/new_born/3.jpg';
import image4 from '../../assets/images/new_born/4.jpg';
import image5 from '../../assets/images/new_born/5.jpg';
import image6 from '../../assets/images/new_born/6.jpg';
import image7 from '../../assets/images/new_born/7.jpg';
import image8 from '../../assets/images/new_born/8.jpg';

import image9 from '../../assets/images/chalake/1.jpg';
import image10 from '../../assets/images/chalake/2.jpg';
import image11 from '../../assets/images/chalake/3.jpg';
import image12 from '../../assets/images/chalake/4.jpg';
import image13 from '../../assets/images/chalake/5.jpg';
import image14 from '../../assets/images/chalake/6.jpg';
import image15 from '../../assets/images/chalake/7.jpg';
import image16 from '../../assets/images/chalake/8.jpg';

import image17 from '../../assets/images/chooch/1.jpg';
import image18 from '../../assets/images/chooch/2.jpg';
import image19 from '../../assets/images/chooch/3.jpg';
import image20 from '../../assets/images/chooch/4.jpg';
import image21 from '../../assets/images/chooch/5.jpg';
import image22 from '../../assets/images/chooch/6.jpg';
import image23 from '../../assets/images/chooch/7.jpg';
import image24 from '../../assets/images/chooch/8.jpg';




export const Gallery = () => {
    return <>
        <br /><br /><br /><br />
        <h1>צילומי ניו בורן</h1>
        <div className="gallery">
            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
            <img src={image4} />
            <img src={image5} />
            <img src={image6} />
            <img src={image7} />
            <img src={image8} />
        </div>

        <br /><br /><br /><br />
        <h1>צילומי חאלקה</h1>
        <div className="gallery">
            <img src={image9} />
            <img src={image10} />
            <img src={image11} />
            <img src={image12} />
            <img src={image13} />
            <img src={image14} />
            <img src={image15} />
            <img src={image16} />
        </div>


        <br /><br /><br /><br />
        <h1>צילומי חוץ</h1>
        <div className="gallery">
            <img src={image17} />
            <img src={image18} />
            <img src={image19} />
            <img src={image20} />
            <img src={image21} />
            <img src={image22} />
            <img src={image23} />
            <img src={image24} />
        </div>
    </>
}