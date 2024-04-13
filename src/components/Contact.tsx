import { ArrowForward, ArrowForwardIosRounded, Instagram, Mail } from "@mui/icons-material";
import { Stack, Typography, useTheme, Box, FilledInput, TextField, Grid, Button, Collapse, SvgIcon, IconButton } from "@mui/material";
import * as React from "react";

import LogoWhite from "@/assets/logo-white.png";
import { DomainImage } from "./DomainImage";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/icons";
import ContactLink from "./ContactLink";
import Link from "next/link";

export default function Contact() {

  const theme = useTheme();
  const [showSubmitIcon, setShowSubmitIcon] = React.useState(false);

  return (
    <>
    <Box
      sx={{
        paddingBlock: "3rem",
        background: theme.palette.background.default,
      }}
    >
      <Stack gap={2} sx={{
        margin: "auto",
        width: {
          md: "50%",
          xs: "80%"
        }}}
      >
        <Typography color="#fff" variant="h4">Get In Touch With Us</Typography>
        <Grid container gap={2} justifyContent="space-between">
          <Grid item xs={12} md={5.5}>
          <FilledInput
            placeholder="First Name"
            sx={{background: "#fff", width: "100%"}}
          />
          </Grid>
          <Grid item xs={12} md={5.5}>
          <FilledInput
            placeholder="Last Name"
            sx={{background: "#fff", width: "100%"}}
          />
          </Grid>
        </Grid>
        
        <FilledInput
          placeholder="Email"
          sx={{background: "#fff"}}
        />
        <TextField 
          placeholder="Your Message"
          sx={{background: "#fff"}}
          minRows={3}
          multiline
        />
        <Button 
          onMouseEnter={() => setShowSubmitIcon(true)}
          onMouseLeave={() => setShowSubmitIcon(false)}
          sx={{textTransform: "none", borderRadius: "15px", backgroundColor: "#514339", border: "1px solid rgba(18, 19, 22, 0.68)", width: "fit-content", alignSelf: "flex-end"}} variant="contained"
        >
          Submit
          <Collapse in={showSubmitIcon} orientation="horizontal" sx={{position: "relative", transform: "translateY(10%)"}}>
            <ArrowForwardIosRounded />
          </Collapse>
        </Button>
      </Stack>
    </Box>

    {/* Links */}
    <Box sx={{backgroundColor: "#352f2f", paddingBlock: "3.5rem"}}>
      <Grid container sx={{width: {xs: "80%", md: "50%"}, margin: "auto"}} justifyContent="space-between" gap={3}>
        <Grid item xs={12} md={4}>
          <Box sx={{
            width: "50%",
            margin: "auto",
            aspectRatio: `${LogoWhite.width} / ${LogoWhite.height}`,
            "&:after": {
              content: '""',
              display: "block",
              height: "0.5px",
              width: "100%",
              background: "#ff3131",
              marginBlock: "1rem"
            }
          }}>
            <DomainImage 
              src={LogoWhite.src}
              alt="NetVentures White Logo"
            />  
          </Box>
          <Stack direction="row" gap={1} sx={{
            justifyContent: "center"
          }}>
            <ContactLink 
              icon={<FacebookIcon style={{fill: "#fff"}}/>}
              href="https://www.facebook.com/netmarketventures/"
              sx={{background: "#3b5998"}}
            />
            <ContactLink 
              icon={<InstagramIcon style={{fill: "#fff"}} />}
              href="https://www.instagram.com/netmarketventures/"
              sx={{background: "#ff3131"}}
            />
            <ContactLink 
              icon={<XIcon style={{fill: "#fff"}} />}
              sx={{background: "black"}}
              href="https://twitter.com/NetMarket_LLC"
            />
            <ContactLink 
              href="https://www.linkedin.com/company/netmarketventures"
              sx={{background: "#007bb6"}}
              icon={<LinkedinIcon style={{fill: "#fff"}} />}
            />
          </Stack>

        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="h5" color="#fff"
            sx={{
              "&:after": {
                content: '""',
                display: "block",
                height: "0.5px",
                width: "100%",
                background: "#ff3131",
                marginBlock: "1rem"
              }
            }}
          >
            Quick Links
          </Typography>
          <Stack width="fit-content" justifyContent="left">
            <Link href="#about" style={{textDecoration: "none", color: "#fff"}}><Typography variant="body1">About Us</Typography></Link>
            <Link href="#services" style={{textDecoration: "none", color: "#fff"}}><Typography variant="body1">Our Services</Typography></Link>
            <Link href="#contact" style={{textDecoration: "none", color: "#fff"}}><Typography variant="body1">Contact</Typography></Link>
          </Stack>
          <Button
            href="mailto:contact@netmarketventures.com"
            sx={{textTransform: "none", color: "#fff"}}
            startIcon={<Mail style={{fill: "#ff3131"}} />}
          >
            <Typography>
              contact@netmarketventures.com
              </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
   </>
  )
}