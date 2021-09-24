import React from "react"
import { Grid, Typography, IconButton, makeStyles } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import featuredAdornment from "../../images/featured-adornment.svg"
import frame from "../../images/product-frame-grid.svg"

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${featuredAdornment})`,
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "120rem",
  },
  featured: {
    height: "20rem",
    width: "20rem",
  },
  frame: {
    backgroundImage: `url(${frame})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: 0,
    height: "25rem",
    width: "25rem",
  },
}))

const FeaturedProducts = () => {
  const data = useStaticQuery(graphql`
    query GetFeatured {
      allStrapiProduct(filter: { featured: { eq: true } }) {
        edges {
          node {
            name
            strapiId
            variants {
              price
              images {
                url
              }
            }
          }
        }
      }
    }
  `)

  const classes = useStyles()

  console.log(data)
  return (
    <Grid container direction="column" classes={{ root: classes.background }}>
      {data.allStrapiProduct.edges.map(({ node }, i) => (
        <Grid item container key={node.strapiId}>
          <Grid item>
            <IconButton classes={{ root: classes.frame }}>
              <img
                className={classes.featured}
                src={"http://localhost:1337" + node.variants[0].images[0].url}
                alt={node.name}
              />
            </IconButton>
            {/* <Grid container direction='column'>

                  </Grid> */}
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}

export default FeaturedProducts
