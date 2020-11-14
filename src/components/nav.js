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
    display: inline-block;
    height: 30px;
    width: 50px;
    margin: 0 1rem;
    text-align: center;

    &:first-of-type > a {
        &:hover, 
        &:active,
        &:focus {
            color: #3b5998;
        }
    }
    &:nth-of-type(2) > a {
        &:hover, 
        &:active,
        &:focus {
            color: #00acee;
        }
    }
    &:nth-of-type(3) > a {
        &:hover, 
        &:active,
        &:focus {
            color: #c8232c;
        }
    }
    &:last-of-type > a {
        &:hover, 
        &:active,
        &:focus {
            color: #833AB4;
        }
    }

` 
const StyledLink = styled.a`
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
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
                        <StyledLink><i class="fab fa-instagram-square"></i></StyledLink>
                    </StyledLi>
                </StyledUl>
            </Wrapper>
        </StyledNav>
    )
}

export default Nav