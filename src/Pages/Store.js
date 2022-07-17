
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
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';

const Store=()=>{
    const IOSSwitch = styled((props) => (
        console.log("on"),
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
      ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
          },
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 22,
          height: 22,
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 2,
          backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
          opacity: 1,
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
            
          }),
        },
      }));
      


    return(
        <div className="App">
        <h1 className="storeheader1"><h2>Store.</h2>The best way to buy the<br></br> products you love.</h1>
		<div className="">
            <div className="storeimages">
            <div className="imageborder"><a href="/watch" ><img src={w1} alt="picture" className="macbook"/></a></div>
            <h1 className="storeheader"><h2>Apple Watch</h2>Over 50% more screen area than Series 3.<br></br> products you love.<FormGroup className="watchswich">
            <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }}/>}
            label="Series"
            />
            </FormGroup></h1>
            </div>

            <div className="storeimages">
            <h1 className="storeheader2"><h2>Mac Book</h2>Save on Mac with an education discount<br></br>Plus get a $150 gift card.◊◊</h1>
            <div className="imageborder"><a href="/mac"  className="macbook"><img src={m2} alt="picture" className="macbook"/></a></div>
            </div>

            <div className="storeimages">
            <div className="imageborder"><a href="/watch" ><img src={a3} alt="picture" className="macbook"/></a></div>
            <h1 className="storeheader"><h2>AirPods</h2>AirPods2nd generation$129<br></br> <br></br>A magical connection to your devices.</h1>
            </div>

            <div className="storeimages">
            <h1 className="storeheader2"><h2>iPhone</h2>Oh. So. Pro.<br></br>From $41.62/mo. for 24 mo. or $999 before trade‑in1<br></br>Plus get a $150 gift card.◊◊</h1>
            <div className="imageborder"><a href="/mac"  className="macbook"><img src={i4} alt="picture" className="macbook"/></a></div>
            </div>
        
        </div>
        <h1 className="HeaderStore">IPad</h1>
        <a href="/ipad"><img src={ipad1} alt="picture" className="Ipad"/></a>
        </div>
    );
}
export default Store;
