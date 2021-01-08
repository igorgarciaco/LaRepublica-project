import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Row, Col } from "react-bootstrap"

import "./style.css"

const Groups = () => {
  const { data } = useStaticQuery(graphql`
  query{
    data: allFile(filter: { absolutePath: { regex: "/groups/" }}, sort: {fields: name}) {
    edges {
      node {
        childImageSharp {
          sizes(maxWidth: 150) {
            ...GatsbyImageSharpSizes_tracedSVG
          }
        }
      }
    }
  }
}
  `)
  const groups = data.edges

  return (
    <>
      <Row>
          {groups.map(({ node }) =>
            <Col md="4" className="group-wrapper">
              <div
                data-sal="slide-left"
                data-sal-duration="500"
                data-sal-delay="50"
              >
              <Img sizes={node.childImageSharp.sizes} className="groups-logo" />
              </div>
            </Col>
          )}
      </Row>

    </>
  )




}

export default Groups
