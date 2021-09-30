import React from "react"
import { Grid, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  toolbar: {
    border: `5px solid ${theme.palette.primary.main}`,
    borderRadius: 25,
    width: "95%",
    height: "20rem",
  },
}))

const DynamicToolbar = () => {
  const classes = useStyles()
  return (
    <Grid
      item
      container
      direction="column"
      classes={{ root: classes.toolbar }}
    ></Grid>
  )
}

export default DynamicToolbar
