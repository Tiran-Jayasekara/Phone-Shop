
import React from "react";
import './Css/store.css';
import q from '../images/q.jpg';
import mac2 from '../images/mac2.jpg';
import mac3 from '../images/mac3.jpg';
import macair from '../images/macair.jpg';
import mac4 from '../images/mac4.png';
import mi1 from '../images/mi1.png';
import mi2 from '../images/mi2.png';
import iwatch from '../images/iwatch.jpg';
import iwatch2 from '../images/iwatch2.jpg';
import iphone from '../images/iphone.jpg';
import w1 from '../images/watch/1.jpg';
import w2 from '../images/watch/2.jpg';
import w3 from '../images/watch/3.jpg';
import w4 from '../images/watch/4.jpg';
import w5 from '../images/watch/5.jpg';
import w6 from '../images/watch/6.jpg';
import w7 from '../images/watch/7.jpg';
import w8 from '../images/watch/8.jpg';
import ipad1 from '../images/ipad1.jpg';
import i1 from '../images/iphone/i1.jpg';
import i2 from '../images/iphone/i2.jpg';
import i3 from '../images/iphone/i3.jpg';
import i4 from '../images/iphone/i4.jpg';
import m1 from '../images/macbook/m1.jpg';
import m2 from '../images/macbook/m2.jpg';
import m3 from '../images/macbook/m3.jpg';
import m4 from '../images/macbook/m4.jpg';
import a1 from '../images/airpods/a1.jpg';
import a2 from '../images/airpods/a2.jpg';
import a3 from '../images/airpods/a3.jpg';
import a4 from '../images/airpods/a4.jpg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Store=()=>{
    return(
        <div className="App">
        <h1 className="HeaderStore">Apple Watch</h1>
		<div className="storeimage">
            <div className="storeimages">
            <div className="imageborder"><a href="/watch" ><img src={w1} alt="picture" className="macbook"/></a></div>
            <div className="imageborder"><a href="/watch" className="macbook"><img src={w5} alt="picture" className="macbook"/></a></div>
            <div className="imageborder"><a href="/watch" className="macbook"><img src={w4} alt="picture" className="macbook"/></a></div>
            </div>

            <h1 className="HeaderStore">MacBook</h1>
            <div className="storeimages">
            <div className="imageborder"><a href="/mac" className="macbook"><img src={m1} alt="picture" className="macbook"/></a></div>
            <div className="imageborder"><a href="/mac"  className="macbook"><img src={m2} alt="picture" className="macbook"/></a></div>
            <div className="imageborder"><a href="/mac" className="macbook"><img src={m3} alt="picture" className="macbook"/></a></div>
            </div>

            <h1 className="HeaderStore">AirPods/HeadPhones</h1>
            <div className="storeimages">
            <div className="imageborder"><a href="/airpods" className="macbook"><img src={a1} alt="picture" className="macbook"/></a></div>
            <div className="imageborder"><a href="/airpods" className="macbook"><img src={a2} alt="picture" className="macbook"/></a></div>
            <div className="imageborder"><a href="/airpods" className="macbook"><img src={a3} alt="picture" className="macbook"/></a></div>
            </div>

            <h1 className="HeaderStore">iPhone</h1>
            <div className="storeimages">
            <div className="imageborder"><a href="/iphone" className="macbook"><img src={i2} alt="picture" className="macbook"/></a></div>
            <div className="imageborder"><a href="/iphone" className="macbook"><img src={i3} alt="picture" className="macbook"/></a></div>
            <div className="imageborder"><a href="/iphone" className="macbook"><img src={i1} alt="picture" className="macbook"/></a></div>
            </div>
        
        </div>
        <h1 className="HeaderStore">IPad</h1>
        <a href="/ipad"><img src={ipad1} alt="picture" className="Ipad"/></a>
    
        </div>
    );
}
export default Store;