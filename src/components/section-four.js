import React from "react"
import styled from "styled-components"
import BackgroundFour from "../images/bg-4.jpg"

const ContainerImageWrapper = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
`
const ContainerImage = styled.img`
    width: 100%;
`


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

const Quote = styled.blockquote`
    padding-bottom: 15%;
    border-bottom: 5px double #cdcdcd;
    text-align: center;

    & > * {
        width: 100%;
    }
    
`

const QuoteSign = styled.p`
    font-size: 5em;
`

const QuoteContent = styled.p`
    font-size: 2em;
`

const QuoteAuthor =  styled.p`
    margin-top: 1em;
    font-size: 2em;
    font-style: italic;
`

const SectionFour = () => {
    return (
        <Section>
            <Container>
                <ContainerImageWrapper>
                    <ContainerImage src={BackgroundFour}/>
                </ContainerImageWrapper>
                <Quote>
                    <QuoteSign>"</QuoteSign>
                    <QuoteContent>Happiness cannot be traveled to, owned, earned, or worn. It is the spiritual experience of living every minute with love, grace & gratitude.</QuoteContent>
                    <QuoteAuthor>Denis Waitley</QuoteAuthor>
                </Quote>
            </Container>
        </Section>
    )
}

export default SectionFour