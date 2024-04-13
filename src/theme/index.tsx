import { ThemeProvider, createTheme } from "@mui/material";
import { type PropsWithChildren } from "react";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Jost',
      '"Open Sans"',
      'Roboto',
      'system-ui',
      '-apple-system'
    ].join(',')
  },
  palette: {
    primary: {
      main: "rgba(0, 0, 0, 0.6)",
    },
    background: {
      default: 'linear-gradient(90deg, #ff3131 1%, #ff914d 80%)',
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 475,
      md: 735,
      lg: 1075,
      xl: 1536,
    },
  },
})
 
interface AppThemeProviderProps extends PropsWithChildren {};

export default function AppThemeProvider(props : AppThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}
