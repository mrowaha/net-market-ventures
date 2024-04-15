import { z } from "zod";
import { ArrowForward, ArrowForwardIosRounded, ErrorOutline, Instagram, Mail } from "@mui/icons-material";
import { Stack, Typography, useTheme, Box, FilledInput, TextField, Grid, Button, Collapse, Popover, FormControl, TextFieldProps, Badge } from "@mui/material";
import * as React from "react";

import LogoWhite from "@/assets/logo-white.png";
import { DomainImage } from "./DomainImage";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/icons";
import ContactLink from "./ContactLink";
import Link from "next/link";

import contactSchema from "@/lib/schema/contact";

type Error = {success: true} | {success: false, message: string}

type Errors = {
  firstName: Error;
  lastName:  Error;
  email: Error;
  message: Error;
}

const start : Errors = {
  firstName: {success: true},
  lastName: {success: true},
  email: {success: true},
  message: {success: true}
};

export default function Contact() {
  const theme = useTheme();
  const [showSubmitIcon, setShowSubmitIcon] = React.useState(false);

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [errors, setErrors] = React.useState<Errors>(start);

  const handleEmail = async () => {
    const validate = contactSchema.safeParse({
      firstName,
      lastName,
      email,
      message
    })
    
    if (!validate.success) {
      const newErrors : Errors = {...start};
      const {error} = validate;
      error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof Errors;
        newErrors[path] = {success: false, message: issue.message}
      })
      setErrors(newErrors);
      console.log(newErrors);
    } else {
      setErrors({...start});
    }

    // send email
    try {
      const res = await fetch('/api/contact', {
        method: "POST",
        body: JSON.stringify(validate)
      })
      if (res.status !== 200) {
        throw new Error('failed');
      }
      const json = await res.json();
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
    <Box
      sx={{
        paddingBlock: "3rem",
        background: theme.palette.background.default,
      }}
    >
      <FormControl sx={{width: "100%"}}>
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
                <ContactField 
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  variant="filled"
                  error={!errors["firstName"].success}
                  errorMessage={errors["firstName"].success === false ? errors["firstName"].message : ""}
                />
              </Grid>
              <Grid item xs={12} md={5.5}>
                <ContactField 
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  variant="filled"
                  error={!errors["lastName"].success}
                  errorMessage={errors["lastName"].success === false ? errors["lastName"].message : ""}
                />
              </Grid>
            </Grid>
            
            <ContactField
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="filled"
              error={!errors["email"].success}
              errorMessage={errors["email"].success === false ? errors["email"].message : ""}
            />

            <ContactField 
              placeholder="Your Message"
              minRows={3}
              multiline
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              variant="filled"
              error={!errors["message"].success}
              errorMessage={errors["message"].success === false ? errors["message"].message : ""}
            />

            <Button 
              onMouseEnter={() => setShowSubmitIcon(true)}
              onMouseLeave={() => setShowSubmitIcon(false)}
              sx={{textTransform: "none", borderRadius: "15px", backgroundColor: "#514339", border: "1px solid rgba(18, 19, 22, 0.68)", width: "fit-content", alignSelf: "flex-end"}} variant="contained"
              onClick={handleEmail}
            >
              Submit
              <Collapse in={showSubmitIcon} orientation="horizontal" sx={{position: "relative", transform: "translateY(10%)"}}>
                <ArrowForwardIosRounded />
              </Collapse>
            </Button>
        </Stack>
      </FormControl>
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


interface ContactFieldProps extends TextFieldProps<"filled"> {
  errorMessage? :string
}

function ContactField(props: ContactFieldProps) {
  const {sx, ...rest} = props;
  const theme = useTheme();

  return (
      <Stack sx={{position: "relative"}}>
        <TextField 
          {...rest}
          sx={{...sx, 
            background: "#fff",
          }}
          inputProps={{
            style: {color: props.error? theme.palette.error.main : theme.palette.primary.main}
          }}
          variant="filled"
          size="small"
          required
          fullWidth
        />
        {
          props.error && <Box sx={{position: "absolute", top: -10, right: 0}}>
            <Badge badgeContent={<ErrorOutline style={{fill: theme.palette.error.main}} />}>

            </Badge>
          </Box>
        }
        {
          props.error && <Typography variant="body2" sx={{padding: "0.5rem"}} color={theme.palette.error.main}>{props.errorMessage}</Typography>
        }
      </Stack>      
  )
}