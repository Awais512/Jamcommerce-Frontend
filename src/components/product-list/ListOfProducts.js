import React from "react"
import { Grid, Typography, makeStyles } from "@material-ui/core"
import ProductFrameGrid from "./ProductFrameGrid"

const useStyles = makeStyles(theme => ({
  productContainer: {
    width: "95%",
    marginBottom: "5rem",
    "& > *": {
      marginRight: "calc((100% - (25rem * 4)) / 3)",
      marginBottom: "5rem",
    },
    "& > :nth-child(4n)": {
      marginRight: 0,
    },
  },
}))

const ListOfProducts = ({ products }) => {
  const classes = useStyles()
  return (
    <Grid item container classes={{ root: classes.productContainer }}>
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
