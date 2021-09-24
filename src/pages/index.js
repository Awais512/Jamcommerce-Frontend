import * as React from "react"
import FeaturedProducts from "../components/home/FeaturedProducts"
import HeroBlock from "../components/home/HeroBlock"
import PromotionalProducts from "../components/home/PromotionalProducts"

import Layout from "../components/ui/layout"

const IndexPage = () => (
  <Layout>
    <HeroBlock />
    <PromotionalProducts />
    <FeaturedProducts />
  </Layout>
)

export default IndexPage
