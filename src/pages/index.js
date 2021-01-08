import React from "react"
import { Link } from "gatsby"
import { Row, Col } from 'react-bootstrap';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Slider from "../components/Slider"
import ScrollableTag from "../components/ScrollableTag"
import Groups from "../components/Groups"
import ServicesBox from "../components/ServicesBox"
import Form from "../components/Form"
import KeepInContact from "../components/KeepInContact"

import arrowRight from "../images/icons/arrow-right.png"

import "../shared/styles/style.css"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <ScrollableTag />
    <Link to="#we-work" className="skip f-medium">Skip intro <img width="21px" src={arrowRight} /></Link>

    <section>
      <div
        data-sal="slide-down"
        data-sal-duration="500"
        data-sal-delay="50"
        className="container home-we-work"
        id="we-work"
      >
        <Row>
          <Col md="6">
            <h2 className="section-title f-bold">WE<br />W<span className="weird-green">O</span>RK</h2>
          </Col>
          <Col md="6">
            <h3 className="section-subtitle"><span className="f-light"> We Work for a </span><br />several publicity ad groups</h3><br />
            <p className="f-light section-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Col>
        </Row>
      </div>
      <div className="container">
      <div>
        <Row className="">
          <Col md="6"></Col>
          <Col md="6">
            <Groups />
          </Col>
        </Row>
      </div>
      </div>
    </section>
    <div className="bg-crop-1 ">
    </div> 
    <section className="container">
      <div className=" home-our-services">
        <Row className="">
          <Col md="3"></Col>
          <Col md="8">
            <h2 
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-delay="50"
            className="section-title f-bold"><span className="weird-green">O</span>UR<br />SERVICES</h2>
          </Col>
        </Row>
        <Row className="">
        <Col md="3"></Col>
          <Col md="8">
            <p 
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-delay="50"
            className="f-light section-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <br />
      <div>
        <ServicesBox />
      </div>
    </section>

    <section className="section-keep-in-contact">
          <KeepInContact />
            <Form />
    </section>
  </Layout>
)

export default IndexPage
