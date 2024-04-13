import {useEffect, useRef} from "react";

import { AppBar, Avatar, Box, Button, ButtonGroup } from "@mui/material";
import {styled} from "@mui/system";
import { useScroll, useTransform } from "framer-motion";
import Logo from "@/assets/logo-large.webp";


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
        <Box>
          <Button sx={{textTransform: "none", fontSize: "1em"}} href="#home">Home</Button>
          <Button sx={{textTransform: "none", fontSize: "1em"}} href="#about">About Us</Button>
          <Button sx={{textTransform: "none", fontSize: "1em"}} href="#services">Services</Button>
          <Button sx={{textTransform: "none", fontSize: "1em"}}>Contact Us</Button>
        </Box>
      </Box>
    </NavbarContainer>
  )
}