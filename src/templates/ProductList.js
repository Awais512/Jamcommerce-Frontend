import React from "react"
import Layout from "../components/ui/layout"
import { Grid } from "@material-ui/core"
import DynamicToolbar from "../components/product-list/DynamicToolbar"

const ProductList = ({ pageContext: { filterOptions, name, description } }) => {
  return (
    <Layout>
      <Grid container direction="column" alignItems="center">
        <DynamicToolbar
          filterOptions={filterOptions}
          name={name}
          description={description}
        />
      </Grid>
    </Layout>
  )
}

export default ProductList
