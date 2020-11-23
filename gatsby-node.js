const _ = require('lodash');
const path = require('path');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const articleList = path.resolve('src/templates/article-list.js')

    return graphql(`
        {
            allDatoCmsArticle(sort: {fields: date, order: DESC}) {
                edges {
                    node {
                        author
                        title
                        id
                        slug
                        date
                        body
                        image {
                            url
                        }
                    }
                }
            }
        }
    `).then(res => {
        if(res.error) return Promise.reject(res.error)

        const postPerPage = 3
        const numberOfPages = 2
        console.log(numberOfPages);

        Array.from({ length: numberOfPages }).forEach((_, index) => {
            const isFirstPage = index === 0
            const currentPage = index + 1

            if(isFirstPage) return

            createPage({ 
                path: `/page/${currentPage}`,
                component: articleList,
                context: {
                    limit: postPerPage,
                    skip: index * postPerPage,
                    currentPage,
                    numberOfPages
                }
            })
        })
    })
}