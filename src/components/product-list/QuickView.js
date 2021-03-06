import React, { useState } from "react"
import {
  Grid,
  Typography,
  Dialog,
  DialogContent,
  makeStyles,
  Button,
  Chip,
} from "@material-ui/core"
import Rating from "../home/Rating"
import frame from "../../images/selected-frame.svg"
import explore from "../../images/explore.svg"
import Sizes from "./Sizes"

const useStyles = makeStyles(theme => ({
  selectedFrame: {
    backgroundImage: `url(${frame})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "60.4rem",
    width: "73.5rem",
    padding: "0 !important",
  },
  dialog: {
    maxWidth: "100%",
  },
  productImage: {
    height: "30rem",
    width: "30rem",
    marginTop: "5rem",
  },
  toolbar: {
    backgroundColor: theme.palette.primary.main,
    height: "15rem",
    marginTop: "2rem",
    padding: "0.5rem 1rem",
    position: "relative",
  },
  stock: {
    color: "#fff",
  },
  details: {
    color: "#fff",
    textTransform: "none",
    fontSize: "1.5rem",
  },
  exploreIcon: {
    height: "1.5rem",
    width: "2rem",
    marginLeft: "0.5rem",
  },
  detailButton: {
    padding: 0,
  },
  infoContainer: {
    height: "100%",
  },
  chipRoot: {
    transform: "scale(1.5)",
  },
  chipContainer: {
    display: "flex",
    alignItems: "center",
  },
  qtyContainer: {
    marginTop: "2.25rem",
  },
  infoItem: {
    position: "absolute",
    left: "1rem",
    height: "calc(100% - 1rem)",
  },
  actionsItem: {
    position: "absolute",
    right: "1rem",
  },
}))

const QuickView = ({ open, setOpen, url, name, price, product }) => {
  const classes = useStyles()
  var sizes = []
  product.node.variants.map(variant => sizes.push(variant.size))

  console.log(sizes)

  return (
    <Dialog
      classes={{ paper: classes.dialog }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogContent classes={{ root: classes.selectedFrame }}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <img
              src={url}
              alt="Product Image"
              className={classes.productImage}
            />
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            classes={{ root: classes.toolbar }}
          >
            <Grid item classes={{ root: classes.infoItem }}>
              <Grid
                container
                direction="column"
                justify="space-between"
                classes={{ root: classes.infoContainer }}
              >
                <Grid item>
                  <Typography variant="h4">{name}</Typography>
                  <Rating number={4} />
                </Grid>
                <Grid item>
                  <Typography variant="h3" classes={{ root: classes.stock }}>
                    12 Currently in Stock
                  </Typography>
                  <Button classes={{ root: classes.detailButton }}>
                    <Typography
                      variant="h3"
                      classes={{ root: classes.details }}
                    >
                      Details
                    </Typography>
                    <img
                      src={explore}
                      className={classes.exploreIcon}
                      alt="go to product details"
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item classes={{ root: classes.chipContainer }}>
              <Chip label={price} classes={{ root: classes.chipRoot }} />
            </Grid>
            <Grid item classes={{ root: classes.actionsItem }}>
              <Grid container direction="column">
                <Sizes sizes={sizes} />
                {/* <Swatches
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                  colors={colors}
                /> 
                 <span className={classes.qtyContainer}>
                  <QtyButton
                    variants={product.node.variants}
                    name={name}
                    stock={stock}
                    selectedVariant={selectedVariant}
                  />
                </span>  */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default QuickView

// return (
//     <Dialog
//       classes={{ paper: classes.dialog }}
//       open={open}
//       onClose={() => setOpen(false)}
//     >
//       <DialogContent classes={{ root: classes.selectedFrame }}>
//         <Grid container direction="column" alignItems="center">
//           <Grid item>
//             <img
//               src={url}
//               alt="Product Image"
//               className={classes.productImage}
//             />
//           </Grid>
//           <Grid item container classes={{ root: classes.toolbar }}></Grid>
//         </Grid>
//       </DialogContent>
//     </Dialog>
//   )
