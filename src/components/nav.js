import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"

const StyledNav = styled.nav`
    padding: 10px 50px;
    max-width: 1725px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between
`
const StyledUl = styled.ul`
`

const StyledLi = styled.li`
    display: inline;
    padding: 0 1.5em;


` 
const StyledLink = styled.a`
    width: 100%;
`

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    width: 33%;

    &:nth-of-type(2) {
        justify-content: center;
    }

    &:nth-of-type(3) {
        justify-content: flex-end;
    }
`

const Hamburger = styled.a`
    margin: 20px;
    display: block;
    position: relative;
    height: 25px;
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