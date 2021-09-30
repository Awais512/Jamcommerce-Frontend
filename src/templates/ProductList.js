import React from "react"
import Layout from "../components/ui/layout"
import { Grid } from "@material-ui/core"
import DynamicToolbar from "../components/product-list/DynamicToolbar"

const ProductList = ({ pageContext }) => {
  return (
    <Layout>
      <Grid container direction="column" alignItems="center">
        <DynamicToolbar />
      </Grid>
    </Layout>
  )
}

export default ProductList
