import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import ProjectCover from "../../components/ProjectCover"
import ScrollableTag from "../../components/ScrollableTag"
import ProjectIntroL from "../../components/ProjectIntro"
import ProjectIntroR from "../../components/ProjectIntro/pi-right"
import KeepInContact from "../../components/KeepInContact"
import MoreWork from "../../components/MoreWork"
import LineFragmentBoth from "../../components/LineFragment/both"
import LineFragmentTop from "../../components/LineFragment/top"
import LineFragmentBottom from "../../components/LineFragment/bot"
import Form from "../../components/Form"
import WorkSlider from "../../components/WorkSlider"

import arrowLeft from "../../images/icons/arrow-left.svg"
import smartphone from "../../images/smartphone.png"

import "../../shared/styles/style.css"


const bradesco = () => (
    <Layout>
        <div className="project-detail">
            <SEO title="Project Details" />
            <Link to="/work" className="go-back f-regular"><img src={arrowLeft} /> Back</Link>
            <ProjectCover imageYouWant="project-cover.png" />
            <div style={{ top: "90%", position: "absolute" }}>
                <ScrollableTag />
            </div>
            <div className="d-md-none" style={{ marginTop: "-100px" }}>
                <LineFragmentBoth />
            </div>
            <div className="container">
                <h2 data-sal="slide-left" className="f-bold mobile-project-title"><span className="f-light">UX</span> RESEARCH</h2>
                <ProjectIntroL
                    projectTitle="Research"
                    projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    projectImage="ux-research.png"
                />
                <div className="d-md-none">
                    <LineFragmentBoth  />
                </div>
                <h2 data-sal="slide-right" className="f-bold mobile-project-title"><span className="f-light">UX</span> STRATEGY</h2>
                <ProjectIntroR
                    projectTitle="Strategy"
                    projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    projectImage="ux-strategy.png"
                />
            </div>
            <LineFragmentBoth className="d-md-block" />
            <div className="container design-container">
                <h2 className="f-bold"><span className="f-light">UX</span> DESIGN</h2>
                <p className="f-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.</p>

                <img src={smartphone} /> &nbsp; &nbsp; &nbsp; &nbsp;
                <img src={smartphone} /> &nbsp; &nbsp; &nbsp; &nbsp;
                <img src={smartphone} /> &nbsp; &nbsp; &nbsp; &nbsp;
                <LineFragmentBoth />
                <h2 className="f-bold"><span className="f-light">USER</span> DESIGN</h2>
                <p className="f-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.</p>

            </div>
        </div>
        <WorkSlider />
        <LineFragmentBoth />
        <div className="container design-container">
            <h2 className="f-bold"><span className="f-light">MORE</span> WORK</h2>
            <MoreWork />
            <LineFragmentTop />
        </div>
        <section className="section-keep-in-contact">
            <KeepInContact />
            <Form />
        </section>
    </Layout>
)

export default bradesco