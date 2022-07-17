import React from "react";
import './Css/phone.css';
import m1 from '../images/macbook/m1.jpg';
import m2 from '../images/macbook/m2.jpg';
import m3 from '../images/macbook/m3.jpg';
import m4 from '../images/macbook/m4.jpg';
import i1 from '../images/iphone/i1.jpg';
import i2 from '../images/iphone/i2.jpg';
import i3 from '../images/iphone/i3.jpg';
import i4 from '../images/iphone/i4.jpg';
import i5 from '../images/iphone/i5.jpg';
import macbook from '../images/macbook.jpg';

const Iphone =()=>{
    return(
        <dev>
            <h1 className="macheader">iPhone </h1><h1>13 Pro max</h1><h3>From $999</h3>
            <div className="iphonintro">
            <img src={i5} alt="picture" className="iphonehead"/>
            </div>
           
            <div className="storeimages">
            <a href="/iphone" className="macbook"><img src={i2} alt="picture" className="macbook"/></a>
            <a href="/iphone" className="macbook"><img src={i3} alt="picture" className="macbook"/></a>
            <a href="/iphone" className="macbook"><img src={i1} alt="picture" className="macbook"/></a>
            </div>
            
        </dev>
    );
}
export default Iphone;