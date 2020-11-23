import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import ArticlePost from '../components/article'
import styled from "styled-components"
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
            flex-direction: column;
        }
    }

    @media (max-width: 768px) {
        & > div {
            &:nth-of-type(even) {
                flex-direction: column;
            }
        }
    }
`


const ArticleList = (props) => {
    console.log(props.data.allDatoCmsArticle.edges.map)
    const { currentPage } = props.pageContext
    const articles = props.data.allDatoCmsArticle.edges;
    const postPerPage = 3
    const numberOfPages = 2
    return ( 
        <Layout>
            <Section>
                <Container>
                {
                    articles.map(({node}) => {
                        
                        return(
                            <ArticlePost
                            key={node.id}
                            title={node.title} 
                            date={node.date} 
                            author={node.author} 
                            slug={node.slug} 
                            body={node.body} 
                            image={node.image.url}
                        />
                        )
                    })
                }
                <Pagination currentPage={currentPage} numberOfPages={numberOfPages} />
                </Container>
            </Section>
        </Layout>
    )
}

export const articleListQuery = graphql`
    query articleListQuery($skip: Int!, $limit: Int!) {
        allDatoCmsArticle(sort: {fields: date, order: DESC}, limit: $limit, skip: $skip) {
            edges {
                node {
                    author
                    title
                    id
                    slug
                    date(formatString: "dddd, MMMM DD, YYYY")
                    body
                    image {
                        url
                    }
                }
            }
        }
    }
`

export default ArticleList