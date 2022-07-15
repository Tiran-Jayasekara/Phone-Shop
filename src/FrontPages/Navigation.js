import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Form } from 'react-bootstrap';
import Store from "../Pages/Store";
import Mac from "../Pages/Mac";
import IPad from "../Pages/iPad";
import Iphone from "../Pages/iPhone";
import Watch from '../Pages/Watch';
import AirPods from '../Pages/AirPods';
import Accessories from '../Pages/Accessories';
import Support from '../Pages/Support';
import HomePage from "../Pages/HomePage";

const Navigation = () =>{
    return(
        <div className="App">
        <Router>
        <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Store" element={<Store />}/>
            <Route path="/Mac" element={<Mac/>}/>
            <Route path="/iPad" element={<IPad />}/>
            <Route path="/iPhone" element={<Iphone />}/>
            <Route path="/Watch" element={<Watch />}/> 
            <Route path="/AirPods" element={<AirPods />}/>
            <Route path="/Accessories" element={<Accessories />}/>
            <Route path="/Support" element={<Support />}/>
        </Routes>
        <Form />
      </Router>
      
        </div>
    );
}
export default Navigation;