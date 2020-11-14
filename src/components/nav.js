import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"

const StyledNav = styled.nav`
    max-width: 1725px;
`
const StyledUl = styled.ul`
    
`

const StyledLi = styled.li`

` 
const StyledLink = styled.a`

`

const Wrapper = styled.div`

`

const Hamburger = styled.a`

`

const Line = styled.span`
    background-color: #cdcdcd;
`




const Nav = () => {

    return (
        <StyledNav>

            <Wrapper>
                <Hamburger>
                    <Line />
                    <Line />
                    <Line />
                </Hamburger>
            </Wrapper>
            <Wrapper>
                <img src={logo} />
            </Wrapper>
            <Wrapper>
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
            </Wrapper>
        </StyledNav>
    )
}

export default Nav