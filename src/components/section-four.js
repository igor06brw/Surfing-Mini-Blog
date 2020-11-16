import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from 'gatsby'

const Section = styled.section`
    max-width:1725px;
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
`
const Container = styled.div`
    background-color: white;
    max-width: 1140px;
    margin: 0 auto;
`

const Quote = styled.blockquote`
    
`

const SectionFour = () => {
    // const data = useStaticQuery(
    //     graphql`
    //       query {

    //       }
    //     `  
    // )


    return (
        <Section>
            <Container>
                <Quote>
                    <p>"</p>
                    <p>Happiness cannot be traveled to, owned, earned, or worn. It is the spiritual experience of living every minute with love, grace & gratitude.</p>
                    <p>Denis Waitley</p>
                </Quote>
            </Container>
        </Section>
    )
}

export default SectionFour