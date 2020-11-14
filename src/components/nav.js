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
                    <StyledLink><i class="fab fa-facebook-f"></i></StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink><i class="fab fa-twitter"></i></StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink><i class="fab fa-pinterest"></i></StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink><i class="fab fa-instagram"></i></StyledLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    )
}

export default Nav