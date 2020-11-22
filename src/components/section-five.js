import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from 'gatsby'
import ArticlePost from "../templates/article-post"


const Section = styled.section`
    max-width:1725px;
    display: flex;
    margin: 15em auto 0 auto;
    flex-direction: row;
    justify-content: space-between;
`
const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto 20% auto;
    position: relative;

    & > div {
        &:nth-of-type(even) {
            flex-direction: row;
        }
    }
`

const Pagination = styled.div`

`

const NextPage = styled(Link)`

`

const PrevPage = styled(Link)`

`

const SectionFive = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allDatoCmsSurfingschema(sort: {fields: date, order: DESC}, limit: 3) {
                    edges {
                        node {
                            author
                            header
                            id
                            date
                            post
                            image {
                                url
                            }
                        }
                    }
                }
            }
        `  
    )

    const allPosts = data.allDatoCmsSurfingschema.edges
    console.log(Array.from(allPosts));

    return (  
        <Section>
            <Container>
                {
                
                    allPosts.map((e, i) =>  (
                        <ArticlePost props={e}/>
                    ))
                }
            <Pagination>
                <NextPage>See more</NextPage>
            </Pagination>
            </Container>
        </Section>
    )
}

export default SectionFive