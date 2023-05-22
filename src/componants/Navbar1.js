import React from 'react';
import PropTypes from 'prop-types';
import {Form, Container, Nav ,Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";
export default function Navbar1(props) {
  return (
    <div>
      <Navbar bg={props.mode} expand="lg" className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
      <Container fluid>
        <Navbar.Brand  className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}><i>{props.title}</i></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/about" className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.aboutText}</Link>
          
          </Nav>
          <Form className='px-3 d-flex'>
          {/* <Form.Check 
        type="switch"
        id="green"
        label="Green Dark Mode"
        className='px-4'
        onClick={() => props.togglemode}
      />
       <Form.Check 
        type="switch"
        id="red"
        label="Red Dark Mode"
        className='px-4'
        onClick={props.togglemode}
      /> */}
       <Form.Check 
        type="switch"
        id="yellow"
        label="Blue Mode"
        className='px-4'
        onClick={props.togglemode1}
      />
      <Form.Check 
        type="switch"
        id="dark"
        label="Enable Dark Mode"
        className='px-4'
        onClick={props.togglemode}
      />
      </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  );
}

Navbar1.propTypes = 
{
    title : PropTypes.string.isRequired,
    aboutText :PropTypes.string,
}

Navbar1.defaultProps = {
    title:'set title please',
    aboutText:'text please'
};