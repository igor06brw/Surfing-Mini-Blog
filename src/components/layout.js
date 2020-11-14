/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import TextSection from "./text-section"

const Layout = () => {
  return (
    <>
      <Header />
      <TextSection />
    </>
  )
}

export default Layout
