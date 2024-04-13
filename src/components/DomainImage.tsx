import Image from "next/image";
import React from "react";
import {styled} from "@mui/material";

export interface DomainImageProps {
  src : string;
  alt : string;
  imageStyles? : React.CSSProperties;
}

const StyledImage = styled(Image)<DomainImageProps>(({imageStyles : styles}) => ({
  ...styles,
  height : "100%",
  width: "100%"
}))

export function DomainImage(props : DomainImageProps) {
  return (
    <StyledImage
      alt={props.alt}
      src={props.src}
      width={0}
      height={0}
      sizes="100vw"
      imageStyles={props.imageStyles}
    />
  )
}