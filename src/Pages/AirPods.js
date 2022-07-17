
import React from "react";
import './Css/airpods.css';
import a1 from '../images/airpods/a1.jpg';
import a2 from '../images/airpods/a2.jpg';
import a3 from '../images/airpods/a3.jpg';
import a4 from '../images/airpods/a4.jpg';

const AirPods =()=>{
    return(
        <div>
            <h1 className="macheader">Air Pods</h1><h1></h1><h3>From $299</h3>
            <div className="watchintro">
            <img src={a2} alt="picture" className="watchhead"/>
            </div>
        </div>
    );
}
export default AirPods;