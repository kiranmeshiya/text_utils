import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import { Container,Button } from 'react-bootstrap';

export default function About() {

    const [myStyle,setStyle] = useState({
        color:'black',
        backgroundColor:'white',
        border : '2px solid white'
    })

    const [btnText,setbtnText] = useState('Enable Dark Mode')
    const ToggleStyle = () =>
    {
        if(myStyle.color === 'black')
        {
            setStyle({
                color:'White',
                backgroundColor:'black',
                border : '2px solid white'
            })
            setbtnText("Enable Light Mode")
        }
        else
        {
            setStyle({
                color:'black',
                backgroundColor:'white'
            })
            setbtnText("Enable Dark Mode")

        }
    }
    // let myStyle = {
    //     color:'white',
    //     backgroundColor:'black'
    // }
    return (
        <Container style={myStyle}>
            <h1 className='my-4 text-center' >About Us</h1>
            <Accordion defaultActiveKey="0"  >
                <Accordion.Item eventKey="0" style={myStyle}>
                    <Accordion.Header style={myStyle}>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item >
                <Accordion.Item eventKey="1" style={myStyle}>
                    <Accordion.Header style={myStyle}>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" style={myStyle}>
                    <Accordion.Header style={myStyle}>Accordion Item #3</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <br/>
            <div className='my-3 mb-3 text-center'>
            <Button variant="light" className='text-center' onClick={ToggleStyle}>{btnText}</Button>
            </div>
            <br/>
        </Container>
    )
}
