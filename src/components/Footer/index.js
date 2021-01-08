import React from "react";
import { Row, Col, Nav, Navbar } from "react-bootstrap"
import { Link } from "gatsby"

import FooLogo from "../FooLogo"
import FooSocial from "../FooSocial"

import "./style.css"

const Footer = () => (
    <footer>
        <div className="container foo-container">
            <Row noGutters>
                <Col md="3">
                    <FooLogo />
                </Col>
                <Col md="6 company">
                    <p><span className="weird-green f-light">A COMPANY FROM</span><br />
                        <span className="f-bold">DIGITAL BUSINESS GROUP</span></p>
                </Col>
                <Col md="3 foo-social">
                    <FooSocial />
                </Col>
            </Row>
            <Row noGutters className="nav-foo">
                {/* <Col className="nav-foo"> */}
                                <Col md="1" sm="12" className="text-center">
                                    <Link className="foo-nav-link">Solutions</Link>
                                </Col>
                                <Col md="1" sm="12" className="text-center">
                                    <Link className="foo-nav-link">Services</Link>
                                </Col>
                                <Col md="1" sm="12" className="text-center">
                                    <Link className="foo-nav-link">Work</Link>
                                </Col>
                                <Col md="1" sm="12" className="text-center">
                                    <Link className="foo-nav-link">About</Link>
                                </Col>
                                <Col md="1" sm="12" className="text-center">
                                    <Link className="foo-nav-link">Contact</Link>
                                </Col>
                {/* </Col> */}
                <Col md="7">
                    <Navbar.Text className="foo-contact f-light">
                        +55 11 91234 56 78 <br/>
                        contact@larepublica.com.br
                    </Navbar.Text>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <p className="copyright f-light">© La Republica 2020. All rights reserved.</p>
                </Col>
            </Row>
        </div>
    </footer>
)

export default Footer