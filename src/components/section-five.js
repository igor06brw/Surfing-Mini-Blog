import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from 'gatsby'
import ArticlePost from '../components/article'
import Pagination from '../components/pagination'

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

const SectionFive = ({children}) => {
    const postsPerPage = 3;
    let numberOfPages
    return ( 
        <Section>
            <Container>
                <StaticQuery query={sectionFiveQuery} render={data => {
                    numberOfPages = Math.ceil(data.allDatoCmsArticle.totalCount / postsPerPage)
                    console.log(numberOfPages)
                    return(
                        <>
                            {data.allDatoCmsArticle.edges.map(({ node }) => (
                                <ArticlePost
                                    key={node.id}
                                    title={node.title} 
                                    date={node.date} 
                                    author={node.author} 
                                    slug={node.slug} 
                                    body={node.body} 
                                    image={node.image.url}
                                />
                            ))}
                        </>
                    )}}
                />
                {children}
                <Pagination currentPage={1} numberOfPages={numberOfPages} />
            </Container>
        </Section>
    )
}

export const sectionFiveQuery = graphql`
    query {
        allDatoCmsArticle(sort: {fields: date, order: DESC}, limit: 3) {
            totalCount
            edges {
                node {
                    author
                    title
                    id
                    slug
                    date
                    body
                    image {
                        url
                    }
                }
            }
        }
    }
`  


export default SectionFive;