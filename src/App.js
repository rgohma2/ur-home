import React from 'react'
import ComponentsContainer from './ComponentsContainer'
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade';



class App extends React.Component {
  constructor() {
    super()

    this.state = {
      page: 'home',
    }

  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({page: e.target.accessKey})
  }





  render (){
    return (
      <div className="App">
        <Navbar bg="light" className="justify-content-between" sticky="top" style={{boxShadow:'0px 0px 7px 0px black'}}>
          <Nav>
          <Navbar.Brand onClick={this.handleChange} accessKey={'home'} href="home">
            U R Home
          </Navbar.Brand>
            <Nav.Link onClick={this.handleChange} accessKey={'home'} href="home">Home</Nav.Link>
            <Nav.Link onClick={this.handleChange} accessKey={'about'} href="about_us">About Us</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={this.handleChange} accessKey={'shopping'} href="services/shopping_needs">Shopping Needs</NavDropdown.Item>
              <NavDropdown.Item onClick={this.handleChange} accessKey={'transportation'} href="services/transportation">Transportation</NavDropdown.Item>
              <NavDropdown.Item onClick={this.handleChange} accessKey={'luggage'} href="services/luggage_storage">Luggage Storage</NavDropdown.Item>
              <NavDropdown.Item onClick={this.handleChange} accessKey={'tours'} href="services/tours_&_special_events">Tours & Special Events</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={this.handleChange} accessKey={'contact'} href="contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
        <ComponentsContainer
        page={this.state.page}
        />
      </div>
    );
  }
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

