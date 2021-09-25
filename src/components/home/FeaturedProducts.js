import React, { useState } from "react"
import { Grid, Typography, IconButton, makeStyles } from "@material-ui/core"
import clsx from "clsx"
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
    height: "180rem",
    padding: "0 2.5rem",
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
    height: "24.8rem",
    width: "25rem",
    boxSizing: "border-box",
    boxShadow: theme.shadows[5],
    position: "absolute",
    zIndex: 1,
  },
  slide: {
    backgroundColor: theme.palette.primary.main,
    height: "20rem",
    width: "24.5rem",
    transition: "transform 0.5s ease",
    zIndex: 0,
  },
  slideLeft: {
    transform: "translate(-24.5rem, 0px)",
  },
  slideRight: {
    transform: "translate(24.5rem, 0px)",
  },
  productContainer: {
    margin: "5rem 0",
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
  const [expanded, setExpanded] = useState(null)

  console.log(data)
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      classes={{ root: classes.background }}
    >
      {data.allStrapiProduct.edges.map(({ node }, i) => {
        const alignment =
          i === 0 || i === 3
            ? "flex-start"
            : i === 1 || i === 4
            ? "center"
            : "flex-end"
        return (
          <Grid
            item
            container
            justifyContent={alignment}
            key={node.strapiId}
            classes={{ root: classes.productContainer }}
            alignItems="center"
          >
            <>
              <IconButton
                classes={{ root: classes.frame }}
                onClick={() =>
                  expanded === i ? setExpanded(null) : setExpanded(i)
                }
              >
                <img
                  className={classes.featured}
                  src={"http://localhost:1337" + node.variants[0].images[0].url}
                  alt={node.name}
                />
              </IconButton>
              <Grid
                container
                direction="column"
                classes={{
                  root: clsx(classes.slide, {
                    [classes.slideLeft]:
                      expanded === i && alignment === "flex-end",
                    [classes.slideRight]:
                      expanded === i &&
                      (alignment === "flex-start" || alignment === "center"),
                  }),
                }}
              ></Grid>
            </>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default FeaturedProducts
