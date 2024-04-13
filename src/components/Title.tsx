import { Typography, Fade } from "@mui/material";
import { useInView } from "framer-motion";
import React from "react";

export interface TitleProps {
  title: string;
}

export default function Title(props : TitleProps) {
  const titleRef = React.useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(titleRef);

  return (
      <Typography ref={titleRef} variant="h4" sx={{backgroundColor: "#49494b", color: "#fff", paddingBlock: "2.25rem"}} textAlign="center">
        <Fade in={isInView} timeout={1500}>
          <span>
            {props.title}
          </span>
        </Fade>
      </Typography>


  )
}