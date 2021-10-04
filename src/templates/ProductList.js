import React from "react"
import Layout from "../components/ui/layout"
import { Grid } from "@material-ui/core"
import { graphql } from "gatsby"
import DynamicToolbar from "../components/product-list/DynamicToolbar"
import ListOfProducts from "../components/product-list/ListOfProducts"

const ProductList = ({
  pageContext: { filterOptions, name, description },
  data: {
    allStrapiProduct: { edges: products },
  },
}) => {
  return (
    <Layout>
      <Grid container direction="column" alignItems="center">
        <DynamicToolbar
          filterOptions={filterOptions}
          name={name}
          description={description}
        />
        <ListOfProducts products={products} />
      </Grid>
    </Layout>
  )
}

export default ProductList

export const query = graphql`
  query GetCaategoryProducts($id: String) {
    allStrapiProduct(filter: { category: { id: { eq: $id } } }) {
      edges {
        node {
          strapiId
          name
          variants {
            color
            id
            price
            size
            style
            images {
              url
            }
          }
        }
      }
    }
  }
`
