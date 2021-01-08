import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/PageHeader"
import ScrollableTag from "../components/ScrollableTag"
import Form from "../components/Form"
import KeepInContact from "../components/KeepInContact"

import SolutionsTabPanel from "../components/SolutionsTabPanel"

import hex from "../images/slides/hex.png"
import mask1 from "../images/polygon-masks/mask-1.svg"
import mask2 from "../images/polygon-masks/mask-2.svg"

const SolutionsPage = () => {
  const pageTitle = 'Solutions'
  const pagePolygon = hex

  return (
    <Layout>
      <SEO title="Solutions" />
      <div className="solutions-page-wrapper">
        <PageHeader pageTitle={pageTitle} pagePolygon={pagePolygon} />
        <ScrollableTag />
        <SolutionsTabPanel />
        <div class="mask-2" data-sal="slide-up">
          <img src={mask2}></img>
        </div>
        <div class="mask-1" data-sal="slide-up">
          <img src={mask1}></img>
        </div>
        <section className="section-keep-in-contact">
          <br/>
          <br/>
          <br/>
          <KeepInContact />
          <Form />
        </section>
      </div>
    </Layout>
  )
}

export default SolutionsPage
