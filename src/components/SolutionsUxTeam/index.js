import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const SolutionsUxTeam = () => {
    const { uxTeamBg } = useStaticQuery(graphql`
    query {
        uxTeamBg: file(relativePath: { eq: "uxteam.png" }) {
          childImageSharp {
            fluid(maxWidth: 920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    return(
        <Img fluid={uxTeamBg.childImageSharp.fluid} />
    )
}

export default SolutionsUxTeam