import * as React from "react"
import HeroBlock from "../components/home/HeroBlock"
import PromotionalProducts from "../components/home/PromotionalProducts"

import Layout from "../components/ui/layout"

const IndexPage = () => (
  <Layout>
    <HeroBlock />
    <PromotionalProducts />
  </Layout>
)

export default IndexPage
