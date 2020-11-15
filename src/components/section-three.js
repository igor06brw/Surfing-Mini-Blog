const SectionThree= () => {
    
    const Section = styled.section`
        max-width:1725px;
        display: flex;
        margin: 0 auto;
        flex-direction: row;
        justify-content: space-between;
    `

    const Container = styled.div`
        background-color: white;
        max-width: 1140px;
        overflow-x: hidden;
    `
    
    
    const data = useStaticQuery(
        graphql`
          query {

          }
        `  
    )
    
    return (
        <Section>
        
        </Section>
    )
}

export default SectionThree