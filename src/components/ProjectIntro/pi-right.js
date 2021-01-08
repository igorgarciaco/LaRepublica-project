import React from 'react'
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Row, Col } from "react-bootstrap"
import arrowRight from "../../images/icons/arrow-right.png"


import "./style.css"

const ProjectIntroR = ({ projectTitle, projectDescription, projectImage }) => {

    const data = useStaticQuery(
        graphql`
          query allProjectsThumbL{
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth:500) {
                    ...GatsbyImageSharpFluid_tracedSVG
                    originalName
                  }
                }
              }
            }
          }`,
    );

    const TheImageYouWant = data.allImageSharp.edges
        .filter(edge => edge.node.fluid.originalName === projectImage)
        .map(myImage => <Img className="project-image image-right" fluid={myImage.node.fluid} />)

    return (
        <>
            <div data-sal="slide-right">
                <Row>
                    <Col md="6" className="">
                        {TheImageYouWant}
                    </Col>
                    <Col md="6" className="project-description-right project-intro">
                        <div>
                            <h2 className="f-light ux">UX</h2>
                            <h2 className="text-uppercase project-title f-bold">{projectTitle}</h2>
                            <p className="project-subtitle f-light">
                                {projectDescription}
                            </p>
                            <Link className="project-link f-regular">See the project <img width="21px" src={arrowRight} /></Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ProjectIntroR