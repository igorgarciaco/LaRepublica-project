import React from 'react'
import { Link } from "gatsby"

import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

import { Row, Col } from "react-bootstrap"
import arrowRight from "../../images/icons/arrow-right.png"


import "./style.css"

const ProjectIntro = ({ projectTitle, projectDescription, projectImage, projectLink }) => {
    const data = useStaticQuery(
        graphql`
          query allProjectsThumbR{
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth:1000) {
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
        .map(myImage =>
        <Img className="project-image image-left" fluid={myImage.node.fluid} />);
    
    return (
        <>
            <div data-sal="slide-left">
                <Row>
                    <Col md="6" className="order-md-last">
                        {TheImageYouWant}
                    </Col>
                    <Col md="6" className="project-description-left project-intro order-md-first">
                        <div>
                            <h2 className="f-light ux">UX</h2>
                            <h2 className="text-uppercase project-title f-bold">{projectTitle}</h2>
                            <p className="project-subtitle f-light">
                                {projectDescription}
                            </p>
                            <Link to={projectLink} className="project-link f-regular">See the project <img width="21px" src={arrowRight} /></Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ProjectIntro