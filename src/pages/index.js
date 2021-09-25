import * as React from "react"
import FeaturedProducts from "../components/home/FeaturedProducts"
import HeroBlock from "../components/home/HeroBlock"
import MarketingButtons from "../components/home/MarketingButtons"
import PromotionalProducts from "../components/home/PromotionalProducts"

import Layout from "../components/ui/layout"

const IndexPage = () => (
  <Layout>
    <HeroBlock />
    <PromotionalProducts />
    <FeaturedProducts />
    <MarketingButtons />
  </Layout>
)

export default IndexPage
