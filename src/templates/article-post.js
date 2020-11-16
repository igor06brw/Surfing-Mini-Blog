import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import PostImage from "../images/post-1.jpg"

const Article = styled.div`
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;

    &:nth-of-child(4){
        align-items: flex-end;
    }
`

const ArticleImage = styled.img`
    width: 50%;
`

const ArticleContent = styled.div`
    width: 50%;
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

`

const ArticleLink = styled(Link)`

`

const ArticlePost = () => {
    return (
        <Article>
            <ArticleImage src={PostImage}/>
            <ArticleContent>
                <ArticleDate>Friday, October 7,  2017</ArticleDate>
                <ArticleHeader>NLand Surf Park Opening</ArticleHeader>
                <ArticleText>is is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor. This is      Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor. This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</ArticleText>
                <ArticleLink>Read More</ArticleLink>
            </ArticleContent>
        </Article>
    )
}

export default ArticlePost;