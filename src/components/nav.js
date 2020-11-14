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
    margin: 20px;
    display: block;
    position: relative;
    height: 20px;
    width: 30px;
    cursor: pointer;
`

const Line = styled.span`
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 4px;
    border-radius: 9999px;
    background-color: #1f5e97;

    &:nth-of-type(1) {
        right: 0;
        width: 65%;
    }

    &:nth-of-type(2) {
        top: 10px;
    }
    &:nth-of-type(3) {
        top: 20px;
        left: 0;
        width: 65%;
    }
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