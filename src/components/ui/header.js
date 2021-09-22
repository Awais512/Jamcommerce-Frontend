import React from "react"
import {
  Button,
  Typography,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
} from "@material-ui/core"

const Header = () => {
  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button>
          <Typography variant="h1">Var X</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
