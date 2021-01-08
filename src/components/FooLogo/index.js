import React from "react";

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FooLogo = () => {
    const { fooLogo } = useStaticQuery(graphql`
    query {
        fooLogo: file(relativePath: { eq: "foo-logo.png" }) {
          childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `)

    return <Img fixed={fooLogo.childImageSharp.fixed} />
}


export default FooLogo