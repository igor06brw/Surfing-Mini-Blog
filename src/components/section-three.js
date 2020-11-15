import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from 'gatsby'
import Article from "../templates/article"
import Img from "gatsby-image"

const Section = styled.section`
    max-width:1725px;
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
`
const Container = styled.div`
    background-color: white;
    max-width: 1140px;
    margin: 0 auto;
    overflow-x: hidden;
`

const ArticleImage = styled(Img)`
    width: 300px;
`

const ArticleContent = styled.div`
    width: 50%

`

const ArticleWrapper = styled.div`
    display: inline-flex;
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
                            <ArticleImage fluid={e.node.childImageSharp.fluid}/>
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