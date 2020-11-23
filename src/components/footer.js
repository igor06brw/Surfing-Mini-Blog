import React from "react"
import logo from "../images/logo.png"
import styled from 'styled-components'

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
    transition: all .2s ease;

    & > * {
        color: white;
    }
`

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    width: 33%;
    justify-content: center;


    &:nth-of-type(2) {
        justify-content: center;
    }

    &:nth-of-type(3) {
        justify-content: flex-end;
    }
`


const Footer = (props) => {

    return (
        <footer className="footer section">
            <div className="footer__container">
                <img src={logo} class="footer__logo"/>
                <p className="footer__description">Surfing Website Builder is a big library of pre-designed web elements which help you create website in few minutes.</p>
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
            </div>
        </footer>
        )
}

export default Footer