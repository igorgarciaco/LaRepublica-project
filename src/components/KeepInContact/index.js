import React from "react"

import { Row, Col } from "react-bootstrap"

import "./style.css"

const KeepInContact = () => (
    <>
        <div 
            data-sal="fade"
            data-sal-duration="500"
            data-sal-delay="5"
            className="container home-keep-in-contact"
            >
        <Row>
            <Col md="7">
                <h2 className="section-title f-bold">KEEP IN<br />CONTA<span className="weird-green">C</span>T</h2>
            </Col>
        </Row>
        <Row>
            <Col md="7">
                <p className="f-light">Have a project in mind or wish to obtain more information on how we can help accelerate your business?</p>
            </Col>
        </Row>
        </div>
    </>
)

export default KeepInContact