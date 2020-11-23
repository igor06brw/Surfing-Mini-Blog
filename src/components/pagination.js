import React from 'react'

const PaginationLinks = ({ currentPage, numberOfPages }) => {
    const isFirst = currentPage === 1
    const isLast = currentPage === numberOfPages
    const previousPage = currentPage - 1 === 1 ? '/' : '/page/' + (currentPage - 1).toString()
    const nextPage = '/page/' + (currentPage + 1).toString()
    console.log(currentPage)
    console.log(numberOfPages)
    return (
        <ul aria-label="Page navigation example">
            {isFirst ? (
                <li disabled>
                    <a previous href="/" />
                </li>
            ) : (
                <li>
                    <a previous href={previousPage} />
                </li>
            )}
            {
                Array.from({ length: numberOfPages }, (_,i) => currentPage === i + 1 ? (
                        <li active key={`page-number${i + 1}`}>
                            <a href={`/${i === 0 ? '' : 'page/' + (i + 1)}`}>
                                {i + 1}
                            </a>
                        </li> 
                    ) : (
                        <li key={`page-number${i + 1}`}>
                            <a href={`/${i === 0 ? '' : 'page/' + (i + 1)}`}>
                                {i + 1}
                            </a>
                        </li>
                    )
                )
            }
            {isLast ? (
                <li disabled>
                    <a next href={nextPage}>Next</a>
                </li>
            ) : (
                <li>
                    <a next href={nextPage}>Next</a>
                </li>
            )}
        </ul>
    )
}

export default PaginationLinks