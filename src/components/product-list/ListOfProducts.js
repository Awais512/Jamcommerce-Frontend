import React from "react"
import { Grid, Typography, makeStyles } from "@material-ui/core"
import ProductFrameGrid from "./ProductFrameGrid"

const useStyles = makeStyles(theme => ({}))

const ListOfProducts = ({ products }) => {
  const classes = useStyles()
  return (
    <Grid item container>
      {products.map(product =>
        product.node.variants.map(variant => (
          <ProductFrameGrid
            key={variant.id}
            variant={variant}
            product={product}
          />
        ))
      )}
    </Grid>
  )
}

export default ListOfProducts
