import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './TopBar.css';


const TopBar = ()=>{

    return (
        <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/"><h6>Apple Center</h6></Navbar.Brand>
            <Nav className="TopBar">
              
              <Nav.Link href="/Store">Store</Nav.Link>
              <Nav.Link href="/Mac">Mac</Nav.Link>
              <Nav.Link href="/iPad">iPad</Nav.Link>
              <Nav.Link href="/iPhone">iPhone</Nav.Link>
              <Nav.Link href="/Watch">Watch</Nav.Link>
              <Nav.Link href="/AirPods">AirPods</Nav.Link>
              <Nav.Link href="/Accessories">Accessories</Nav.Link>
              <Nav.Link href="/Support">Support</Nav.Link>
            </Nav>
            <div>
              
        </div>
          </Container>
        </Navbar>
        
        <br />
        <br />
        
       
      </div>

        
      );
}
export default TopBar;
