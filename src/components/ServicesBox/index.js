import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Row, Col } from "react-bootstrap"

import box from "../../images/services-box.png"

import "./style.css"

const ServicesBox = () => {


    return (
        <Row noGutters className="justify-content-md-end">
            <Col xs="4" md="4"  className="left-col">
                <div
                data-sal="slide-right"
                data-sal-duration="500"
                data-sal-delay="600"
                data-sal-easing="ease-in-sine" 
                className="box-topic">
                    <span className="f-light">UX</span><br /><span className="f-bold">RESEARCH</span>
                </div>
                <div
                data-sal="slide-right"
                data-sal-duration="500"
                data-sal-delay="700"
                data-sal-easing="ease-in-sine" 
                className="box-topic">
                    <span className="f-light">UX</span><br /><span className="f-bold">STRATEGY</span>
                </div>
            </Col>
            <Col xs="4" md="2" className="middle-col">
                <div
                data-sal="zoom-in"
                data-sal-duration="500"
                data-sal-delay="50"
                data-sal-easing="ease-in-sine"
                >
                <img src={box} />
                </div>
            </Col>
            <Col xs="4" md="3" className="right-col">
                <div 
                 data-sal="slide-left"
                 data-sal-duration="500"
                 data-sal-delay="800"
                 data-sal-easing="ease-in-sine"
                className="box-topic">
                    <span className="f-light">UX</span><br /><span className="f-bold">DESIGN</span>
                </div>
                <div
                data-sal="slide-left"
                data-sal-duration="500"
                data-sal-delay="900"
                data-sal-easing="ease-in-sine"
                className="box-topic">
                    <span className="f-light">USER</span><br /><span className="f-bold">INTERFACE</span>
                </div>
            </Col>
        </Row>

    )
}

export default ServicesBox