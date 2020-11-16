import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Article = styled.div`

`

const ArticleImage = styled.img`

`

const ArticleContent = styled.div`

`

const ArticleDate = styled.p`

`

const ArticleHeader = styled.h3`

`

const ArticleText = styled.p`

`

const ArticleLink = styled(Link)`

`

const ArticlePost = (props) => {
    return (
        <Article>
            <ArticleImage />
            <ArticleContent>
                <ArticleDate>Friday, October 7,  2017</ArticleDate>
                <ArticleHeader>NLand Surf Park Opening</ArticleHeader>
                <ArticleText>is is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor. This is      Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor. This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</ArticleText>
                <ArticleLink>Read More</ArticleLink>
            </ArticleContent>
        </Article>
    );
}

export default ArticlePost;