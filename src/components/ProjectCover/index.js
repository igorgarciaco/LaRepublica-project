import React from "react"
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import playButton from "../../images/icons/play-icon.svg"
import "./style.css"

const ProjectCover = ({ imageYouWant }) => {
    const data = useStaticQuery(
      graphql`
        query allTheImagesQuery{
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
      .filter(edge => edge.node.fluid.originalName === imageYouWant)
      .map(myImage => <Img fluid={myImage.node.fluid} />);
  
    return (
      <>
        <div className="container project-cover-image">
            {TheImageYouWant}
            <div className="project-cover-text">
                <h1 className="f-bold">MASTERCLASS MOBILE APP</h1>
                <p className="f-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br />eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="f-regular text-uppercase"><img src={playButton}/> <span>watch</span></a>
            </div>
        </div>
      </>
    );
  };
  
  
  Image.propTypes = {
    imageYouWant: PropTypes.string,
  };
  
  Image.defaultProps = {
    imageYouWant: '',
  };
  
  export default ProjectCover
