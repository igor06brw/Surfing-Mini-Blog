import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Article = styled.div`
    margin: 30px auto;
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;
`

const ArticleImage = styled.img`
    width: 49%;
`

const ArticleContent = styled.div`
    width: 51%;
    padding: 0 50px;
    text-align: center;
`

const ArticleDate = styled.p`   
    width: auto;
`

const ArticleHeader = styled.h3`
    padding: 0;
    margin-bottom: 20px;
`

const ArticleText = styled.p`
    margin-bottom: 25px;

`

const ArticleLink = styled(Link)`
    color: #ffcf0b;
    border-bottom: 1px solid #ffcf0b;
    cursor: pointer;
`

const ArticlePost = (data) => {
    return (
        <Article>
            <ArticleImage src={data.props.node.image.url}/>
            <ArticleContent>
                <ArticleDate>{data.props.node.date}</ArticleDate>
                <ArticleHeader>{data.props.node.header}</ArticleHeader>
                <ArticleText>{data.props.node.post}</ArticleText>
                <ArticleLink>Read More</ArticleLink>
            </ArticleContent>
        </Article>
    )
}

export default ArticlePost;