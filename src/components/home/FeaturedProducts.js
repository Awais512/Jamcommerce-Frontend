import React, { useState } from "react"
import {
  Grid,
  Typography,
  IconButton,
  makeStyles,
  Button,
  Chip,
  useMediaQuery,
} from "@material-ui/core"
import clsx from "clsx"
import { useStaticQuery, graphql } from "gatsby"
import featuredAdornment from "../../images/featured-adornment.svg"
import frame from "../../images/product-frame-grid.svg"
import explore from "../../images/explore.svg"

import Rating from "./Rating"

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${featuredAdornment})`,
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "180rem",
    padding: "0 2.5rem",
    [theme.breakpoints.down("md")]: {
      height: "220rem",
    },
  },
  featured: {
    height: "20rem",
    width: "20rem",
    [theme.breakpoints.down("md")]: {
      height: "15rem",
      width: "15rem",
    },
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
    [theme.breakpoints.down("md")]: {
      height: "19.8rem",
      width: "20rem",
    },
  },
  slide: {
    backgroundColor: theme.palette.primary.main,
    height: "20rem",
    width: "24.5rem",
    transition: "transform 0.5s ease",
    zIndex: 0,
    padding: "1rem 2rem",
    [theme.breakpoints.down("md")]: {
      height: "15.2rem",
      width: "19.5rem",
    },
  },
  slideLeft: {
    transform: "translate(-24.5rem, 0px)",
  },
  slideRight: {
    transform: "translate(24.5rem, 0px)",
  },
  slideDown: {
    transform: "translate(0px, 17rem)",
  },
  productContainer: {
    margin: "5rem 0",
  },
  exploreContainer: {
    marginTop: "auto",
  },
  exploreButton: {
    textTransform: "none",
  },
  exploreIcon: {
    height: "1.5rem",
    marginLeft: "1rem",
  },
  chipLabel: {
    ...theme.typography.h5,
  },
  chipRoot: {
    backgroundColor: theme.palette.secondary,
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
  const matchesMd = useMediaQuery(theme => theme.breakpoints.down("md"))

  return (
    <Grid
      container
      direction="column"
      justifyContent={matchesMd ? "space-between" : "center"}
      classes={{ root: classes.background }}
    >
      {data.allStrapiProduct.edges.map(({ node }, i) => {
        const alignment = matchesMd
          ? "center"
          : i === 0 || i === 3
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
                      !matchesMd && expanded === i && alignment === "flex-end",
                    [classes.slideRight]:
                      !matchesMd &&
                      expanded === i &&
                      (alignment === "flex-start" || alignment === "center"),
                    [classes.slideDown]: matchesMd && expanded === i,
                  }),
                }}
              >
                <Grid item>
                  <Typography variant="h4">
                    {node.name.split(" ")[0]}
                  </Typography>
                </Grid>
                <Grid item>
                  <Rating number={2.5} />
                </Grid>
                <Grid item>
                  <Chip
                    classes={{
                      root: classes.chipRoot,
                      label: classes.chipLabel,
                    }}
                    label={`$${node.variants[0].price}`}
                  />
                </Grid>
                <Grid item classes={{ root: classes.exploreContainer }}>
                  <Button classes={{ root: classes.exploreButton }}>
                    <Typography variant="h5">Details</Typography>
                    <img
                      className={classes.exploreIcon}
                      src={explore}
                      alt="Go to Product Details"
                    />
                  </Button>
                </Grid>
              </Grid>
            </>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default FeaturedProducts
