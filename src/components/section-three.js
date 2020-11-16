import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"

const Section = styled.section`
    max-width:1725px;
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
`
const Container = styled.div`
    background-color: white;
    max-width: 1140px;
    margin: 0 auto;
`

const ArticleImage = styled(Img)`
    width: 53.8em;
`

const ArticleContent = styled.div`
    margin-top: 3.5em;
    width: 45%;

    & > * {
        padding: 0;
    }

`

const ArticleWrapper = styled.div`
    display: inline-flex;
    
    justify-content: flex-end;
    padding: 5em 2em;

    &:nth-of-type(even) {
        flex-direction: row-reverse;


        & > div:first-of-type {
            left: auto;
            right: 0;
        }
    }
`

const ArticleImageWrapper = styled.div`
    left: 0;
    position: absolute;
`

const SectionThree= () => {
    const data = useStaticQuery(
        graphql`
          query {
            allFile(filter: {name: {regex: "/article/"}}) {
                edges {
                    node {
                        id
                        relativePath
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
          }
        `  
    )
    const articleNodes = data.allFile.edges;


    return (
        <Section>
            <Container>
                {
                    articleNodes.map(e => (
                        <ArticleWrapper>
                            <ArticleImageWrapper>
                                <ArticleImage fluid={e.node.childImageSharp.fluid}/>
                            </ArticleImageWrapper>
                            <ArticleContent>
                                <h3>Surfing an excellent workout</h3>
                                <p>I meant no insult. You are done. Fired. Do not show your face at the laundry again. Stay away from Pinkman. Do not go near him. Ever. Are you listening to me? What do you say? I meant no insult. You are done. Fired. Do not show your face at the laundry again. Stay away from Pinkman. Do not go near him. Ever. Are you listening to me? What do you say?</p>
                            </ArticleContent>
                        </ArticleWrapper>
                    ))
                }
            </Container>
        </Section>
    )
}

export default SectionThree