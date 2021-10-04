import React from "react"
import { Grid, Typography, makeStyles } from "@material-ui/core"
import frame from "../../images/product-frame-grid.svg"

const useStyles = makeStyles(theme => ({
  frame: {
    backgroundImage: `url(${frame})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    height: "25rem",
    width: "25rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  product: {
    height: "20rem",
    width: "20rem",
  },
  title: {
    backgroundColor: theme.palette.primary.main,
    height: "5rem",
    width: "25rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-0.1rem",
    marginBottom: "5rem",
  },
}))

const ProductFrameGrid = ({ product, variant }) => {
  const classes = useStyles()
  return (
    <Grid item>
      <Grid container direction="column">
        <Grid item classes={{ root: classes.frame }}>
          <img
            src={`http://localhost:1337${variant.images[0].url}`}
            alt={product.node.name}
            className={classes.product}
          />
        </Grid>
        <Grid item classes={{ root: classes.title }}>
          <Typography variant="h5">
            {product.node.name.split(" ")[0]}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProductFrameGrid
