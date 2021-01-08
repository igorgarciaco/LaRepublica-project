import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import { Row, Col } from "react-bootstrap"

import PageHeader from "../components/PageHeader"
import ScrollableTag from "../components/ScrollableTag"
import Form from "../components/Form"
import KeepInContact from "../components/KeepInContact"
import ProjectIntroL from "../components/ProjectIntro"
import ProjectIntroR from "../components/ProjectIntro/pi-right"

import hex from "../images/slides/hex.png"
import outlineDot from "../images/icons/polygon-outline-dot.png"


const WorkPage = () => {
    const pageTitle = 'Work'
    const pagePolygon = hex

    return (
        <Layout>
            <div className="work-wrapper">
                <SEO title="Work" />
                <PageHeader pageTitle={pageTitle} pagePolygon={pagePolygon} />
                <ScrollableTag />
                <div
                    data-sal="slide-down"
                    data-sal-duration="500"
                    data-sal-delay="50"
                    className="vertical-line"> </div>
                <div className="container">
                    <Row data-sal="slide-down" className="line-cut">
                        <img src={outlineDot} />
                    </Row>
                </div>
                <div className="container">
                    <Row>
                        <Col md="12" className="text-center">
                            <h2 className="f-bold subtitle">
                                Tempor incididunt ut labore
                            </h2>
                            <p className="f-light description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.
                            </p>
                        </Col>
                    </Row>
                </div>
                <br />
                <br />
                <br />
                <div className="container">
                    <ProjectIntroL
                        projectTitle="Bradesco Digital Bank"
                        projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        projectImage="vivo-thumb.png"
                        projectLink="work/bradesco-digital-bank"
                    />
                    <ProjectIntroR
                        projectTitle="vivo mobile app"
                        projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        projectImage="vivo-thumb.png"
                        projectLink="work/bradesco-digital-bank"
                    />
                    <ProjectIntroL
                        projectTitle="ellus men store"
                        projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        projectImage="ellus-thumb.png"
                        projectLink="work/bradesco-digital-bank"
                    />
                    <ProjectIntroR
                        projectTitle="nike woman soccer"
                        projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        projectImage="nike-women.png"
                        projectLink="work/bradesco-digital-bank"
                    />
                </div>
                <section className="section-keep-in-contact">
                    <KeepInContact />
                    <Form />
                </section>
            </div>
        </Layout>
    )
}

export default WorkPage