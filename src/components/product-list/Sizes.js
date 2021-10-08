import React from "react"
import { Grid, Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  size: {
    color: "#fff",
  },
}))

export default function Sizes({ sizes }) {
  const classes = useStyles()

  return (
    <Grid item container justifyContent="space-between">
      {sizes.map(size => (
        <Grid item>
          <Button>
            <Typography variant="h3" classes={{ root: classes.size }}>
              {size}
            </Typography>
          </Button>
        </Grid>
      ))}
    </Grid>
  )
}
