import { Typography } from "@mui/material";
import * as React from "react";

export default function Footer() {
  return (
    <footer style={{width: "100%", background: "black", paddingBlock: "0.75rem"}}>
      <Typography variant="body2" color="#fff" textAlign="center">
        &copy; 2024 | NETMARKET VENTURES LLC
      </Typography>
    </footer>
  )
}