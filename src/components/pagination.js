import React from 'react'
import styled from 'styled-components'

const PaginationContainer = styled.div`
    text-align: center;
`
const PaginationList = styled.ul`
    display: inline-flex;
    text-align: center;
    list-style: none;
`
const PaginationItem = styled.li`
    margin: 1em 2em
`
const PaginationLink = styled.a`
    text-decoration: none;
    color: var(--scroll-text);
    border-bottom: 1px solid var(--scroll-text);
`


const PaginationLinks = ({ currentPage, numberOfPages }) => {
    const isFirst = currentPage === 1
    const isLast = currentPage === numberOfPages
    const previousPage = currentPage - 1 === 1 ? '/' : '/page/' + (currentPage - 1).toString()
    const nextPage = '/page/' + (currentPage + 1).toString()
    console.log(currentPage)
    console.log(numberOfPages)
    return (
        <PaginationContainer>
            <PaginationList aria-label="Page navigation example">
                {isFirst ? (
                    <PaginationItem disabled>
                        <PaginationLink previous href="/" >Previous</PaginationLink>
                    </PaginationItem>
                ) : (
                    <PaginationItem>
                        <PaginationLink previous href={previousPage} >Previous</PaginationLink>
                    </PaginationItem>
                )}
                {isLast ? (
                    <PaginationItem disabled>
                        <PaginationLink next href={nextPage}>See more</PaginationLink>
                    </PaginationItem>
                ) : (
                    <PaginationItem>
                        <PaginationLink next href={nextPage}>See more</PaginationLink>
                    </PaginationItem>
                )}
            </PaginationList>
        </PaginationContainer>
    )
}

export default PaginationLinks