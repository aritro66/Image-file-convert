import React from 'react';
import {Navbar,Container} from 'react-bootstrap';
import logo from "../images/converticon.png";
export default function NavigationBarDisplay() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">
                        {" "}
                        <img
                            alt=""
                            src={logo}
                            width="40"
                            height="40"
                            style={{verticalAlign:"middle"}}
                            className="d-inline-block align-top"
                        />{' '}
                        <span style={{fontSize:"24px",fontFamily: 'Merriweather'}}>Image File Converter</span>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}
