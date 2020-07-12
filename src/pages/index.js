import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IconsRow from "../components/icons-row"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="row">
      <div className="intro">
        <h1>
          Hi, I'm <span className="text-theme-orange">Aaron</span>, a full-stack
          Software Engineer from
          <span className="text-theme-red"> Birmingham </span>
          with a passion for Cloud Architecture.
        </h1>
      </div>
    </div>
    <IconsRow />
  </Layout>
)

export default IndexPage
