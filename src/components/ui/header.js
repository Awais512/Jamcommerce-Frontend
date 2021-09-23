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
import { Link } from "gatsby"

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
  logoContainer: {
    [theme.breakpoints.down("md")]: {
      marginRight: "auto",
    },
  },
  tabs: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  listItemText: {
    color: "#fff",
  },
  tab: {
    ...theme.typography.body1,
    fontWeight: 600,
  },
}))

const Header = ({ categories }) => {
  const routes = [
    ...categories,
    { node: { name: "Contact Us", strapiId: "contact", link: "/contact" } },
  ]

  const [drawerOpen, setDrawerOpen] = useState(false)

  const classes = useStyles()
  const matchesMd = useMediaQuery(theme => theme.breakpoints.down("md"))

  const tabs = (
    <Tabs
      value={0}
      classes={{ indicator: classes.coloredIndicator, root: classes.tabs }}
    >
      {routes.map(route => (
        <Tab
          component={Link}
          to={route.node.link || `/${route.node.name.toLowerCase()}`}
          classes={{ root: classes.tab }}
          key={route.node.strapiId}
          label={route.node.name}
        />
      ))}
    </Tabs>
  )

  const drawer = (
    <SwipeableDrawer
      open={drawerOpen}
      onOpen={() => setDrawerOpen(true)}
      onClose={() => setDrawerOpen(false)}
      classes={{ paper: classes.drawer }}
    >
      <List disablePadding>
        {routes.map(route => (
          <ListItem
            component={Link}
            to={route.node.link || `/${route.node.name.toLowerCase()}`}
            divider
            button
            key={route.node.strapiId}
          >
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={route.node.name}
            />
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  )

  const actions = [
    {
      icon: search,
      alt: "search",
      visible: true,
      onClick: () => console.log("Search"),
    },
    { icon: cart, alt: "cart", visible: true, link: "/cart" },
    { icon: account, alt: "account", visible: !matchesMd, link: "/account" },
    {
      icon: menu,
      alt: "menu",
      visible: matchesMd,
      onClick: () => setDrawerOpen(true),
    },
  ]

  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button
          component={Link}
          to="/"
          classes={{ root: classes.logoContainer }}
        >
          <Typography variant="h1">
            {" "}
            <span className={classes.logoText}>Var</span> X
          </Typography>
        </Button>
        {matchesMd ? drawer : tabs}
        {actions.map((action, i) => {
          if (action.visible) {
            return (
              <IconButton
                key={i}
                onClick={action.onClick}
                component={action.onClick ? undefined : Link}
                to={action.onClick ? undefined : action.link}
              >
                <img src={action.icon} alt={action.alt} />
              </IconButton>
            )
          }
        })}
      </Toolbar>
    </AppBar>
  )
}

export default Header
