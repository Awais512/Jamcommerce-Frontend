import React from "react"
import { Grid, Typography, makeStyles } from "@material-ui/core"
import FunctionContainer from "./FunctionContainer"
import DescriptionContainer from "./DescriptionContainer"

const useStyles = makeStyles(theme => ({
  toolbar: {
    border: `5px solid ${theme.palette.primary.main}`,
    borderRadius: 25,
    width: "95%",
    height: "auto",
  },
}))

const DynamicToolbar = ({ filterOptions, name, description }) => {
  const classes = useStyles()
  return (
    <Grid item container direction="column" classes={{ root: classes.toolbar }}>
      <FunctionContainer filterOptions={filterOptions} />
      <DescriptionContainer name={name} description={description} />
    </Grid>
  )
}

export default DynamicToolbar
