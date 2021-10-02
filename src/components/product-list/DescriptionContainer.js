import React from "react"
import {
  Grid,
  makeStyles,
  Typography,
  ButtonGroup,
  Button,
} from "@material-ui/core"
import background from "../../images/toolbar-background.svg"
import ListIcon from "../../images/List"
import GridIcon from "../../images/Grid"

const useStyles = makeStyles(theme => ({
  description: {
    color: "#fff",
  },
  descriptionContainer: {
    backgroundColor: theme.palette.primary.main,
    height: "15rem",
    width: "60rem",
    borderRadius: 25,
    padding: "1rem",
  },
  mainContainer: {
    padding: "3rem",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  button: {
    border: `2px solid ${theme.palette.primary.main}`,
    borderRightColor: `${theme.palette.primary.main} !important`,
    borderRadius: 25,
  },
}))

const DescriptionContainer = ({ name, description }) => {
  const classes = useStyles()
  return (
    <Grid
      item
      container
      classes={{ root: classes.mainContainer }}
      justifyContent="center"
    >
      <Grid item classes={{ root: classes.descriptionContainer }}>
        <Typography align="center" variant="h4" paragraph gutterBottom>
          {name}
        </Typography>
        <Typography
          align="center"
          variant="body1"
          classes={{ root: classes.description }}
        >
          {description}
        </Typography>
      </Grid>
      <Grid item>
        <ButtonGroup>
          <Button classes={{ outlined: classes.button }}>
            <ListIcon />
          </Button>
          <Button classes={{ outlined: classes.button }}>
            <GridIcon />
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  )
}

export default DescriptionContainer
