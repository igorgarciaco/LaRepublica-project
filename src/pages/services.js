import React from "react"
import { Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/PageHeader"
import ScrollableTag from "../components/ScrollableTag"
import Form from "../components/Form"
import ServicesIcon from "../components/ServicesIcon"
import KeepInContact from "../components/KeepInContact"

import hex from "../images/slides/hex.png"
import meetingIcon from "../images/icons/services/meeting-icon.svg"
import pizzaIcon from "../images/icons/services/pizza-icon.svg"
import infoIcon from "../images/icons/services/info-icon.svg"
import trategyIcon from "../images/icons/services/strategy-icon.svg"

import "../shared/styles/style.css"


const ServicesPage = () => {
  const pageTitle = 'Services'
  const pagePolygon = hex

  return (
    <Layout className="services-wrapper">
      <SEO title="Services" />
      <PageHeader pageTitle={pageTitle} pagePolygon={pagePolygon} />
      <ScrollableTag />
      <br />
      <br />
      {/* ux RESEARCH  */}
      <div className="container services">
        <Row className="text-md-right research-row">
          <Col md="6">
            <h3 className="section-subtitle"><span className="f-light"> UX </span><br />RESEARCH</h3><br />
            <p className="f-light section-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.</p><br />
          </Col>
          <div className="bg-crop-2">
          </div>
        </Row>
        <Col md="6">
          <Row noGutters>
            <ServicesIcon iconName={meetingIcon} iconLabel="Entrevistas" />
            <ServicesIcon iconName={pizzaIcon} iconLabel="Análise quantitativa" />
            <ServicesIcon iconName={infoIcon} iconLabel="Análise quantitativa" />
            <ServicesIcon iconName={trategyIcon} iconLabel="Testes de usabilidade" />
          </Row>
        </Col>
      </div>
      {/* ux RESEARCH / */}

      {/* ux STRATEGY */}
      <div className="container services services-section">
        <Row className="strategy-row">
          <Col md="6"></Col>
          <div className="bg-crop-3">
          </div>
          <Col md="6" className="justify-content-end">
            <h3 className="section-subtitle"><span className="f-light"> UX </span><br />STRATEGY</h3><br />
            <p className="f-light section-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.</p><br />
          </Col>

        </Row>
        <Row>
          <Col md="6"></Col>
          <Col md="6">
            <Row noGutters>
              <ServicesIcon iconName={meetingIcon} iconLabel="Matriz SWOT" />
              <ServicesIcon iconName={pizzaIcon} iconLabel="Estudo de Personas" />
              <ServicesIcon iconName={infoIcon} iconLabel="Wireflow / Sitemap" />
              <ServicesIcon iconName={trategyIcon} iconLabel="Conceito Criativo" />
              <ServicesIcon iconName={meetingIcon} iconLabel="Design Sprint" />
              <ServicesIcon iconName={pizzaIcon} iconLabel="Lean Inception" />
            </Row>
          </Col>
        </Row>
      </div>
      {/* ux STRATEGY /  */}

      {/* ux DESIGN  */}
      <div className="container services services-section">
        <Row className="text-md-right design-row">
          <Col md="6">
            <h3 className="section-subtitle"><span className="f-light"> UX </span><br />DESIGN</h3><br />
            <p className="f-light section-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.</p><br />
          </Col>
          <div className="bg-crop-4">
          </div>
        </Row>
        <Col md="6">
          <Row noGutters>
            <ServicesIcon iconName={meetingIcon} iconLabel="Wireframes de baixa fidelidade" />
            <ServicesIcon iconName={infoIcon} iconLabel="Wireframes de média fidelidade" />
            <ServicesIcon iconName={trategyIcon} iconLabel="Wireframes de alta fidelidade" />
          </Row>
        </Col>
      </div>
      {/* ux DESIGN  */}

      {/* user INTERFACE */}
      <div className="container services services-section">
        <Row className="interface-row">
          <Col md="6"></Col>
          <div className="bg-crop-5">
          </div>
          <Col md="6" className="justify-content-end">
            <h3 className="section-subtitle"><span className="f-light"> USER </span><br />INTERFACE</h3><br />
            <p className="f-light section-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.</p><br />
          </Col>
        </Row>
        <Row>
          <Col md="6"></Col>
          <Col md="6">
            <Row noGutters>
              <ServicesIcon iconName={meetingIcon} iconLabel="Conceitos criativos" />
              <ServicesIcon iconName={pizzaIcon} iconLabel="design responsivo" />
              <ServicesIcon iconName={infoIcon} iconLabel="design systems" />
              <ServicesIcon iconName={trategyIcon} iconLabel="micro interações" />
              <ServicesIcon iconName={meetingIcon} iconLabel="development integration" />
            </Row>
          </Col>
        </Row>
      </div>
      {/* user INTERFACE /  */}
      {/* Form */}
      <section className="section-keep-in-contact">
        <KeepInContact />
        <Form />
      </section>
    </Layout>
  )
}

export default ServicesPage
