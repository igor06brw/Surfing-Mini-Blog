import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Article = styled.div`
    margin: 30px auto;
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const ArticleImage = styled.img`
    width: 49%;
    @media (max-width: 768px) {
        width: 100%;
    }
`

const ArticleContent = styled.div`
    width: 51%;
    padding: 0 50px;
    text-align: center;
    @media (max-width: 768px) {
        width: auto;
    }
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

const ArticlePost = ({key, title, body, image, date, author}) => {
    return (
        <Article>
            <ArticleImage src={image}/>
            <ArticleContent>
                <ArticleDate>{date}</ArticleDate>
                <ArticleHeader>{title}</ArticleHeader>
                <ArticleText>{body}</ArticleText>
                <ArticleLink>Read More</ArticleLink>
            </ArticleContent>
        </Article>
    )
}

export default ArticlePost;