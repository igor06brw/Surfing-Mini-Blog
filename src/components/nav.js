import React from "react"
import styled from "styled-components"

const StyledNav = styled.nav`
    max-width: 1725px;
`
const StyledUl = styled.ul`
    
`

const StyledLi = styled.li`

` 
const StyledLink = styled.a`

`


const Nav = () => {

    return (
        <StyledNav>
            <StyledUl>  
                <StyledLi>
                    <StyledLink></StyledLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    )
}

export default Nav