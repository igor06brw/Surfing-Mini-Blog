import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import ArticlePost from '../components/article'
import SectionFive from "../components/section-five"

const ArticleList = (props) => {
    console.log(props.data.allDatoCmsArticle.edges.map)
    const articles = props.data.allDatoCmsArticle.edges;
    return ( 
        <Layout>
            <SectionFive>
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
            </SectionFive>
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

export default ArticleList