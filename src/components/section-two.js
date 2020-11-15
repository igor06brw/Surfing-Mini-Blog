import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from "gatsby-background-image"

const Section = styled.section`
    max-width:1725px;
`

const Container = styled.div`
    margin: 0 auto;
    background-color: white;
    height: 500px;
    max-width: 1140px;
    overflow-x: hidden;
`

const CustomBackground = styled(BackgroundImage)`
    width: 100%;
`

const Wrapper = styled.div`
    text-align: center;
`


const SectionTwo= () => {
    const data = useStaticQuery(
        graphql`
          query {
            file(relativePath: {eq: "bg-2.jpg"}) {
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
        <Section>
            <Container>
                <CustomBackground Tag="div" fluid={imageData}>
                    <Wrapper>
                        <h3>When you get a good group of babes together, there’s nothing better!" </h3>
                        <p>An elegant, modern and fully cutomizable UI Kit</p>
                    </Wrapper>
                </CustomBackground>
            </Container>
        </Section>
    )
}

export default SectionTwo