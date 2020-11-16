import React from "react"
import styled from "styled-components"

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
`

const SectionFive = () => {
    return (  
        <Section>
            <Container>
                <ArticlePost />
            </Container>
        </Section>
    )
}

export default SectionFive