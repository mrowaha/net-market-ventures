import { Grid, Typography, Box, Button, Stack, useTheme, useMediaQuery } from "@mui/material";
import {styled} from "@mui/system";
import * as React from "react";

import Brand from "@/assets/brand.jpg";
import BrandCentered from "@/assets/brand-centered.jpg";
import { DomainImage } from "./DomainImage";
import { useAtom } from "jotai";
import { navbarAtom } from "@/layout";

const HeroStack = styled(Stack)(({theme}) => ({
  background: theme.palette.background.default,
  position: "relative",
  isolation: "isolate",
  paddingInline: "5rem",
  [theme.breakpoints.down("sm")]: {
    paddingInline: "2.5rem"
  },
  paddingBlockEnd: "5rem",
}))

function Hero() {

  const [navbar, _] = useAtom(navbarAtom);
  const theme = useTheme();
  const smallThanMid = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <HeroStack gap={2} sx={{paddingTop: `calc(${navbar.height}px + 5rem)`}}>
        <Typography
          sx={{ 
            color: "#fff", 
            textAlign: {xs: "center", sm: "center", md: "left"}, 
            typography: {lg: "h3", md: "h3", sm:"h3", xs:"h4"},
            "&:after": {
              display: "block",
              content: '""',
              height: "1px",
              backgroundColor: "#ffcc99",
              width: {
                md: "100%",
                lg: "20%"
              },
              marginBlock: "2rem"
            }
          }}>
          <strong style={{fontWeight: "500"}}>
            Boost Your <span style={{color: "#ffcc99"}}>Online<br/>Marketplace </span>Sales
          </strong>  
        </Typography>
        <Typography variant="body1" color="#fff">
          Accelerate your brand&apos;s growth by getting your products sold on<br/>the world&apos;s renowned online marketplaces.
        </Typography>
        <Typography variant="body1" color="#fff">
          Our commitment to partnership-driven success transforms online sales into<br/>a streamlined, impactful journey for every brand we collaborate with.
        </Typography>
        <Button href="#services" sx={{textTransform: "none", borderRadius: "15px", backgroundColor: "#514339", border: "1px solid rgba(18, 19, 22, 0.68)", width: "fit-content"}} variant="contained">
          Learn More
        </Button>
        <Box sx={{position: "absolute", zIndex: -1, opacity: 0.15, inset: 0}}>
          <DomainImage 
            src={smallThanMid? BrandCentered.src : Brand.src}
            alt="author"
            imageStyles={{
              objectFit: "fill"
            }}
          />
        </Box>
    </HeroStack>
  )
}

export default Hero;