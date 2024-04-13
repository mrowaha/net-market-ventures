import Link from "next/link";
import {useEffect, useRef, useState} from "react";

import { AppBar, Avatar, Box, Button, useTheme, useMediaQuery, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import {styled} from "@mui/system";
import { useScroll, useTransform } from "framer-motion";
import Logo from "@/assets/logo-large.webp";
import MenuIcon from '@mui/icons-material/Menu';

const NavbarContainer = styled(AppBar)(({theme}) => ({
  backgroundColor: "white",
  fontSize: "1rem",
  overflowY: "hidden",
}))



export default function NavBar({onHeightChange} : {onHeightChange : (newHeight : number) => void}) {

  const navbarRef = useRef<HTMLElement | null>(null);
  const avatarRef = useRef<HTMLDivElement | null>(null);

  const {scrollYProgress} = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], [80, 50]);
  const font = useTransform(scrollYProgress, [0, 1], [1, 0.75]);

  const theme = useTheme();
  const isSmallViewport = useMediaQuery(theme.breakpoints.down("sm"));

  const menuELRef = useRef<HTMLDivElement | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setAnchorEl(navbarRef.current);
    setOpenMenu(true);
  }

  useEffect(() => {
    height.on("change", (latest) => {
      if (navbarRef.current) {
        navbarRef.current.style.height = latest.toString() + "px";
        requestAnimationFrame(() => onHeightChange(latest));
        if (avatarRef.current) {
          avatarRef.current.style.width = (latest - 10).toString() + "px";
          avatarRef.current.style.height = (latest - 10).toString() + "px";
        }
      }
    })

    font.on("change", (latest) => {
      if (navbarRef.current) {
        navbarRef.current.style.fontSize = latest.toString() + "rem";
      }
    });
  }, []);


  return (
    <NavbarContainer ref={navbarRef}>
      <Box sx={{width: "70%", margin: "auto", display: "flex", justifyContent:"space-between", alignItems: "center"}}>
        <Avatar
          ref={avatarRef}
          src={Logo.src}
          sx={{
            borderRadius: 0,
            height: "70px",
            width: "70px"
          }}
        />
        {
          isSmallViewport?
          <>
            <IconButton onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={openMenu}
              onClose={() => setOpenMenu(false)}
              marginThreshold={0}
              PaperProps={{
                style: {
                      width: "80%",
                      left: 0,
                      right: 0,
                      borderRadius: 0,
                      marginInline: "auto"
                    }
              }}
            >
              <MenuItem><Link href="#home" style={{textDecoration: "none", color: theme.palette.primary.main}}>Home</Link></MenuItem>
              <MenuItem><Link href="#about" style={{textDecoration: "none", color: theme.palette.primary.main}}>About Us</Link></MenuItem>
              <MenuItem><Link href="#services" style={{textDecoration: "none", color: theme.palette.primary.main}}>Services</Link></MenuItem>
              <MenuItem><Link href="#contact" style={{textDecoration: "none", color: theme.palette.primary.main}}>Contact Us</Link></MenuItem>
            </Menu>
          </>
          : // else
          <Box>
            <NavBarLink href="#home" title="Home" />
            <NavBarLink href="#about" title="About Us" />
            <NavBarLink href="#services" title="Services" />
            <NavBarLink href="#contact" title="Contact Us" />
          </Box>
        }
      </Box>
    </NavbarContainer>
  )
}

interface NavBarLinkProps {
  title: string;
  href: string;
}

function NavBarLink(props: NavBarLinkProps) {
  return (
    <Button sx={{textTransform: "none", fontSize: "1em"}} href={props.href}>
      <Typography sx={{typography: {sm: "body2", lg: "body1"}}}>
        {props.title}
      </Typography>
    </Button>    
  )
}