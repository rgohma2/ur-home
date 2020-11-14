import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';



function App() {
  return (
    <div className="App">
      <Navbar bg="light" className="justify-content-between">
        <Nav>
        <Navbar.Brand href="#home">
          U R Home
        </Navbar.Brand>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about_us">About Us</Nav.Link>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#services/shopping_needs">Shopping Needs</NavDropdown.Item>
            <NavDropdown.Item href="#services/transportation">Transportation</NavDropdown.Item>
            <NavDropdown.Item href="#services/luggage_storage">Luggage Storage</NavDropdown.Item>
            <NavDropdown.Item href="#services/tours_&_special_events">Tours & Special Events</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
      <Image 
      src="/ur-home-background.jpg" 
      width="100%"
      /> 
    </div>
  );
}

export default App;

/*
<img
            alt=""
            src="/ur-home-logo.png"
            width=""
            height=""
            className="d-inline-block align-top"
          />{' '}
*/

