import React from "react";
import './Css/watch.css';
import w1 from '../images/watch/1.jpg';
import w2 from '../images/watch/2.jpg';
import w3 from '../images/watch/3.jpg';
import w4 from '../images/watch/4.jpg';

const Watch =()=>{
    return(
        <div>
            <h1 className="macheader">Watch </h1><h1></h1><h3>From $599</h3>
            <div className="watchintro">
            <img src={w1} alt="picture" className="watchhead"/>
            </div>
        </div>
    );
}
export default Watch;