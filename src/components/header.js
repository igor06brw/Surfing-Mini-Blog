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
  height: 90vh;
  max-width:100%;
  overflow: hidden;
`

const StyledWrapper = styled.div`
  display: block;
  height: 65vh;
  max-width: 1140px;
  margin: 0 auto;
`

const StyledHeadline = styled.h1`
  text-align: center;
  margin-top: 20%;
  color: #fff;
  font-family: 'Parisienne', cursive;
  transform: rotate(-30deg);
  font-size: 18em;

  text-shadow: #fff 0px 0px 5px
`

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: {eq: "bg.jpg"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 3000) {
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
      <StyledWrapper>
        <StyledHeadline>Surfing</StyledHeadline>
      </StyledWrapper>
    </header>
  )
}

export default Header
