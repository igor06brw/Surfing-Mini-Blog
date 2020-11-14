import React from "react"

import Nav from "../components/nav"
import styled from "styled-components"
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from "gatsby-background-image"

const StyledContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`

const StyledBackground = styled(BackgroundImage)`
  display: block;
  width: 100vw;
  height: 80vh;
  position: absolute;
  overflow: hidden;
`

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: {eq: "bg.jpg"}) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  const imageData = data.file.childImageSharp.fluid

  
  return (
    <header>
      <Nav></Nav>
      <StyledContainer>
        <StyledBackground Tag="div" fluid={imageData}>
        </StyledBackground>
      </StyledContainer>
    </header>
  )
}

export default Header
