import React from "react"
import Header from "../components/header"
import SectionTwo from "../components/section-two"
import SectionThree from "../components/section-three"
import SectionFour from "../components/section-four"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
