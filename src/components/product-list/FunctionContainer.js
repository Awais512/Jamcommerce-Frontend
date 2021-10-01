import React, { useState } from "react"

import { Grid, Typography, IconButton, makeStyles } from "@material-ui/core"
import filter from "../../images/filter.svg"
import sort from "../../images/sort.svg"
import Sort from "./Sort"
import Filter from "./Filter"

const useStyles = makeStyles(theme => ({
  functionContainer: {
    backgroundColor: theme.palette.primary.main,
    minHeight: "6rem",
    height: "auto",
    borderRadius: "10px 10px 0px 0px",
  },
}))

const FunctionContainer = ({ filterOptions }) => {
  const [option, setOption] = useState(null)
  const classes = useStyles()

  const content = () => {
    switch (option) {
      case "sort":
        return <Sort setOption={setOption} />
      case "filter":
        return <Filter setOption={setOption} filterOptions={filterOptions} />
      default:
        const items = [
          { icon: filter, alt: "filter" },
          { icon: sort, alt: "sort" },
        ]
        return (
          <Grid
            item
            container
            justifyContent="space-around"
            alignItems="center"
          >
            {items.map(item => (
              <Grid item key={item.alt}>
                <IconButton onClick={() => setOption(item.alt)}>
                  <img src={item.icon} alt={item.alt} />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        )
    }
  }

  return (
    <Grid item container classes={{ root: classes.functionContainer }}>
      {content()}
    </Grid>
  )
}

export default FunctionContainer
