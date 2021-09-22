import React from "react"
import {
  Button,
  Typography,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
} from "@material-ui/core"

import search from "../../images/search.svg"
import cart from "../../images/cart.svg"
import account from "../../images/account-header.svg"

const useStyles = makeStyles(theme => ({
  coloredIndicator: {
    backgroundColor: "red",
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button>
          <Typography variant="h1">Var X</Typography>
        </Button>
        <Tabs value={0} classes={{ indicator: classes.coloredIndicator }}>
          <Tab label="Hats" />
          <Tab label="Hoodies" />
          <Tab label="Shirts" />
          <Tab label="Contact Us" />
        </Tabs>
        <IconButton>
          <img src={search} alt="search" />
        </IconButton>
        <IconButton>
          <img src={cart} alt="cart" />
        </IconButton>
        <IconButton>
          <img src={account} alt="account" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
