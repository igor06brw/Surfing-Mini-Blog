import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"


const SectionThree= () => {
    
    const Section = styled.section`
        max-width:1725px;
        display: flex;
        margin: 0 auto;
        flex-direction: row;
        justify-content: space-between;
    `

    const Article = styled.article`
        background-color: white;
        max-width: 1140px;
        overflow-x: hidden;
    `

    
    
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

    const articleImage = data.allFile.edges.node.childImageSharp.fluid;
    const articleNodes = data.allFile.edges
    
    return (
        <Section>
            <Article>
                {
                    articleNodes.map(e => {
                        console.log(e);
                    })
                }
            </Article>
        </Section>
    )
}

export default SectionThree