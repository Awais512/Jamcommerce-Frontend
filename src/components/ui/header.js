import React, { useState } from "react"
import {
  Button,
  Typography,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  useMediaQuery,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"

import search from "../../images/search.svg"
import cart from "../../images/cart.svg"
import account from "../../images/account-header.svg"
import menu from "../../images/menu.svg"

const useStyles = makeStyles(theme => ({
  coloredIndicator: {
    backgroundColor: "#fff",
  },
  logoText: {
    color: theme.palette.common.offBlack,
  },
  tabs: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}))

const Header = ({ categories }) => {
  const routes = [
    ...categories,
    { node: { name: "Contact Us", strapiId: "contact" } },
  ]

  const [drawerOpen, setDrawerOpen] = useState(false)

  const classes = useStyles()
  const matchesMd = useMediaQuery(theme => theme.breakpoints.down("md"))

  const tabs = (
    <Tabs
      value={0}
      classes={{ indicator: classes.coloredIndicator, root: classes.tabs }}
    >
      {routes.map((route, i) => (
        <Tab key={route.node.strapiId} label={route.node.name} />
      ))}
    </Tabs>
  )

  const drawer = (
    <SwipeableDrawer
      open={drawerOpen}
      onOpen={() => setDrawerOpen(true)}
      onClose={() => setDrawerOpen(false)}
    >
      <List disablePadding>
        {routes.map(route => (
          <ListItem divider button key={route.node.strapiId}>
            <ListItemText primary={route.node.name} />
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  )

  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button>
          <Typography variant="h1">
            {" "}
            <span className={classes.logoText}>Var</span> X
          </Typography>
        </Button>
        {matchesMd ? drawer : tabs}
        <IconButton>
          <img src={search} alt="search" />
        </IconButton>
        <IconButton>
          <img src={cart} alt="cart" />
        </IconButton>
        <IconButton onClick={() => (matchesMd ? setDrawerOpen(true) : null)}>
          <img
            src={matchesMd ? menu : account}
            alt={matchesMd ? "menu" : "account"}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
