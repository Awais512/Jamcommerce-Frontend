import React from "react"
import { Grid, Typography, Button, makeStyles } from "@material-ui/core"
import Layout from "../components/ui/layout"
import { Link } from "gatsby"

import address from "../images/address.svg"
import phone from "../images/phone-adornment.svg"
import email from "../images/email-adornment.svg"
import send from "../images/send.svg"

const ContactPage = () => {
  return (
    <Layout>
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4">Contact Us</Typography>
            </Grid>
            <Grid item>
              <Button>
                <Typography variant="h4">Send Message</Typography>
                <img src={send} alt="Send Message" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item container>
              <Grid item>
                <img src={address} alt="address" />
              </Grid>
              <Grid item>
                <Typography variant="h2">
                  1234 S Example Street, Pakistan
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item>
                <img src={phone} alt="phone" />
              </Grid>
              <Grid item>
                <Typography variant="h2">(555) 555-5555</Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item>
                <img src={email} alt="email" />
              </Grid>
              <Grid item>
                <Typography variant="h2">awais@mail.com</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ContactPage
