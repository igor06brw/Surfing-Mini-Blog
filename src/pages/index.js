import React from "react"
import Header from "../components/header"
import SectionTwo from "../components/section-two"
import SectionThree from "../components/section-three"
import SectionFour from "../components/section-four"
import SectionFive from "../components/section-five"
import ArticlePost from "../templates/article-post"

const IndexPage = () => (
  <>
    <Header />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive>
      <ArticlePost>
        
      </ArticlePost>
    </SectionFive>
  </>
)

export default IndexPage
