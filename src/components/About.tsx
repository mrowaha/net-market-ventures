import { Grid, Stack, Box, Typography, Slide, useTheme } from "@mui/material";
import * as React from "react";
import dynamic from "next/dynamic";
import { DomainImage } from "./DomainImage";
import { useInView } from "framer-motion";

import AboutImage from "@/assets/about-us.jpg";

const NoSSRTitle = dynamic(() => import("./Title"), {
  ssr: false
})

export default function About() {

  const theme = useTheme();
  const stackRef = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(stackRef);
  const [hasDisplayed, setHasDisplayed] = React.useState(false);

  React.useEffect(() => {
    if (isInView && !hasDisplayed) {
      setHasDisplayed(true);
    }
  }, [isInView, hasDisplayed]);

  return (
    <>
      <NoSSRTitle 
        title="About Us"
      />
      <Stack ref={stackRef} direction={{xs: "column", md: "row"}} justifyContent="space-between" sx={{padding: "0.5rem", overflow: "hidden", background: theme.palette.background.default}}>
        <Slide direction="right" in={hasDisplayed} timeout={2500}>
          <Box sx={{display: "flex", padding: "1rem", width: {md: "50%"}}}>
            <Typography color="white" textAlign="justify" sx={{
              alignSelf: "center",
              fontSize: {
                xs: "0.75em",
                lg: "1em"
              }
            }}>
            Discover the difference with NetMarket Ventures, where we redefine the journey of online retail. Specializing in selling products through key third-party platforms such as Amazon, eBay, and Walmart, our approach elevates the digital marketplace experience. By ensuring every product we feature authentically represents its brand, we not only enhance brand images but also improve their visibility.
            Our core lies in collaboration, working intimately with brands and distributors to ignite customer engagement across the globe&apos;s leading online marketplaces. With a robust market presence that we continuously aim to strengthen, NetMarket Ventures stands as a beacon for growth, offering unparalleled value to promising brands seeking to carve out their niche. Our suite of services is designed to foster long-term benefits, propelling both our partners and us towards mutual success. Choose NetMarket Ventures, where your brand’s potential is limitless, and success is a shared journey.
            </Typography>
          </Box>
        </Slide>
        <Slide direction="left" in={hasDisplayed} timeout={2500}>
          <Box sx={{
            width: {md: "50%"},
            aspectRatio: `${AboutImage.width} / ${AboutImage.height}`
          }}>
            <DomainImage 
              src={AboutImage.src}
              alt={"about image"}
            />
          </Box>
        </Slide>
      </Stack>
    </>
  )
}