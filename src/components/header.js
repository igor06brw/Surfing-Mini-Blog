import React from "react"

import Nav from "../components/nav"
import styled from "styled-components"
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from "gatsby-background-image"

const StyledContainer = styled.div`
  overflow: hidden;
`

const AbsoluteOfBackground = styled.div`
  display: block;
  overflow-x: hidden;
  z-index: -1;
  right: 0;
  position: absolute;
`

const StyledBackground = styled(BackgroundImage)`
  width: 100vw;
  height: 100vh;
  max-width:100%;
  overflow: hidden;
`

const StyledHeader = styled.div`
  display: block;
  max-width: 1140px;
  margin: 0 auto;
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
        <AbsoluteOfBackground>
          <StyledBackground Tag="div" fluid={imageData}/>
        </AbsoluteOfBackground>
      </StyledContainer>
      <StyledHeader>ssss</StyledHeader>
    </header>
  )
}

export default Header
