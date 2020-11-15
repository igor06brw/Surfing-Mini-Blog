import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from 'gatsby'

import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

const Section = styled.section`
    max-width:1725px;
`

const Container = styled.div`
    margin: 0 auto;
    background-color: white;
    max-width: 1140px;
    overflow-x: hidden;
`

const CustomBackground = styled(BackgroundImage)`
    width: 100%;
`

const Wrapper = styled.div`
    &:first-of-type {
        text-align: center;
        padding-bottom: 20px;
    }
    &:last-of-type {
        text-align: left;
        display: flex;
        justify-content: space-evenly;
    }
`


const SectionTwo= () => {
    const data = useStaticQuery(
        graphql`
          query {
            bgTwo: file(relativePath: {eq: "bg-2.jpg"}) {
              childImageSharp {
                fluid(quality: 100, maxWidth: 3000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            bgThree: file(relativePath: {eq: "bg-3.jpg"}) {
              childImageSharp {
                fluid(quality: 100, maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `
    )
    const bgTwo = data.bgTwo.childImageSharp.fluid
    const bgThree = data.bgThree.childImageSharp.fluid

    
    return (
        <Section>
            <Container>
                <Img fluid={bgThree} />
                <CustomBackground Tag="div" fluid={bgTwo}>
                    <Wrapper>
                        <h3>When you get a good group of babes together, there’s nothing better!" </h3>
                        <p>An elegant, modern and fully cutomizable UI Kit</p>
                    </Wrapper>
                    <Wrapper>
                        <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor. This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor. This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.

This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor. This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor. </p>
                        <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.

This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor. This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor. </p>
                    </Wrapper>
                </CustomBackground>
            </Container>
        </Section>
    )
}

export default SectionTwo