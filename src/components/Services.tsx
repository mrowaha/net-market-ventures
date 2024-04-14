import { Typography, Box, Grid, Stack, Divider, Grow, useTheme, Button, Collapse, Slide } from "@mui/material";
import * as React from "react";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { AccountBalanceWallet, Call, Storefront, TrendingUp } from "@mui/icons-material";
import { useInView } from "framer-motion";
import { DomainImage } from "./DomainImage";

import ServicesImage from "@/assets/services.jpg";

export default function Services() {

  const theme = useTheme();
  const stackRef = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(stackRef);
  const [hasDisplayed, setHasDisplayed] = React.useState(false);
  const [showCallIcon, setShowCallIcon] = React.useState(false);


  React.useLayoutEffect(() => {
    if (isInView && !hasDisplayed) {
      setHasDisplayed(true);
    }
  }, [isInView, hasDisplayed]);

  return (
    <>
      <Title 
        title="Our Services"
      />
      <Stack direction="column" sx={{padding: "2em"}} ref={stackRef}>
        <Grid container justifyContent="space-evenly">
          <Grid item xs={10} sm={5} md={3} lg={3}>
            <ServiceCard
              grow={hasDisplayed}
              growTimeout={1500}
              title="Follow MAP"
              icon={<AccountBalanceWallet style={{stroke: "#ff3131", fill: "#ff3131", strokeWidth: "0.25px", fontSize: "5em"}}/>}
            >
              <Typography variant="body1" textAlign="justify">
                At NetMarket, we are fully committed to upholding the integrity of the pricing set by brands and distributors. 
                We firmly believe in respecting the Minimum Advertised Pricing (MAP) policies as a cornerstone of our operations. 
                This stance stems from our understanding and respect for the value brands place on their products and we do everything possible to 
                uphold that price.
              </Typography>
            </ServiceCard>
          </Grid>
          <Grid item xs={10} sm={5} md={3} lg={3}>
            <ServiceCard
              grow={hasDisplayed}
              growTimeout={2500}
              title="Maximizing Sales"
              icon={<TrendingUp style={{stroke: "#ff3131", fill: "#ff3131", strokeWidth: "0.25px", fontSize: "5em"}} />}
            >
              <Typography variant="body1" textAlign="justify">
                We are dedicated to maximizing sales for brands on leading online marketplaces such as Amazon, eBay, and Walmart, 
                among others. Our approach includes a strong focus on regularly updating our listings across these third-party platforms. 
                By doing so, we optimize for search engine visibility, ensuring that our brands’ products are easily discoverable by potential buyers. 
                Our belief in the power of SEO-driven strategies means we’re always working to enhance product visibility and drive more sales.
              </Typography>
            </ServiceCard>
          </Grid>
          <Grid item xs={10} sm={5} md={3} lg={3}>
            <ServiceCard
              grow={hasDisplayed}
              growTimeout={3500}
              title="Building Your Brand"
              icon={<Storefront style={{stroke: "#ff3131", fill: "#ff3131", strokeWidth: "0.25px", fontSize: "5em"}} />}
            >
              <Typography variant="body1" textAlign="justify"> 
                Our ambition goes beyond merely selling products. We are passionate about partnering with brands that captivate us, 
                those known for creating exceptional products. Our goal is to collaborate closely, leveraging our platform not just to sell, 
                but to enhance business growth and elevate brand images. We aspire to be more than a retailer; we aim to be a dedicated partner, working hand-in-hand to amplify both our successes.
              </Typography>
            </ServiceCard>
          </Grid>
        </Grid>
        <Divider sx={{backgroundColor: "#ff3131", width: "80%", alignSelf: "center"}} />
        <Stack gap={1} direction={{xs: "column", md: "row"}} justifyContent="space-between" sx={{paddingBlock: "1.5rem", overflow: "hidden", width: "80%", alignSelf: "center"}}>
          <Box sx={{display: "flex", alignItems: "center", width: {md: "45%"}}}>
            <div>
              <Typography variant="h4">
                Helping You Sell More!
              </Typography>
              <Typography paragraph color={theme.palette.primary.main} textAlign="justify">
              At NetMarket Ventures, we&apos;re not just another seller; we&apos;re here to amplify your sales and broaden your reach. Collaboration is at the heart of what we do. We work closely with brands and distributors, harnessing our expertise to boost customer engagement on some of the world’s most renowned online marketplaces.   
              <br/>Let NetMarket be your ally in the digital marketplace, where your success is our success!
              </Typography>
              <Button
                href="#contact"
                variant="contained"
                sx={{isolation:"isolate", textTransform: "none",position: "relative", background: theme.palette.background.default, borderRadius: "15px", overflow: "hidden"}}
                onMouseEnter={() => setShowCallIcon(true)}
                onMouseLeave={() => setShowCallIcon(false)}
              >
                <Typography>Contact Us Now</Typography>
                <Collapse in={showCallIcon} orientation="horizontal" sx={{position: "relative", transform: "translateY(10%)"}}>    
                  <Call fontSize="small" />
                </Collapse>
              </Button>
            </div>
          </Box>
          <Box sx={{
            width: {md: "50%"},
            aspectRatio: `${ServicesImage.width} / ${ServicesImage.height}`
          }}>
            <DomainImage 
              src={ServicesImage.src}
              alt="Selling More"
            />
          </Box>
        </Stack>
      </Stack>
    </>
  )
}