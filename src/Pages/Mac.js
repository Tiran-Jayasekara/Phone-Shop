import React from "react";
import './Css/mac.css';
import m1 from '../images/macbook/m1.jpg';
import m2 from '../images/macbook/m2.jpg';
import m3 from '../images/macbook/m3.jpg';
import m4 from '../images/macbook/m4.jpg';
import macbook from '../images/macbook.jpg';

const Mac =() =>{
    return(
        <dev>
            <h1 className="macheader">MacBook Air</h1><h1>Don’t take it lightly</h1><h3>From $1199</h3>
            <img src={m4} alt="picture" className="macbookhead"/>
            <div className="Storeintro">
           
            <img src={macbook} alt="picture" className="backgroundmac"/>
            </div>
		    <div className="storeimage">
            <div className="storeimages">
            <img src={m1} alt="picture" className="macbook"/>
            <img src={m2} alt="picture" className="macbook"/>
            <img src={m3} alt="picture" className="macbook"/>
            </div>
            </div>
        </dev>
    );
}
export default Mac;