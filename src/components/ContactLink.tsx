import { IconButton, type IconButtonProps } from "@mui/material";
import * as React from "react";

export interface ContactLinkProps {
  sx?: IconButtonProps["sx"];
  icon: React.ReactNode;
  href: string;
}

export default function ContactLink(props: ContactLinkProps) {

  return (
    <IconButton size="small" sx={{...props.sx, borderRadius: 2, boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)"}} href={props.href}>
      {props.icon}
    </IconButton>
  )
}