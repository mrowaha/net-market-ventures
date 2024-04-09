import { ThemeProvider, createTheme } from "@mui/material";
import { type PropsWithChildren } from "react";

declare module '@mui/material/styles' {
  interface PaletteColor {
    navItem: string;
  }

  interface SimplePaletteColorOptions {
    navItem: string;
  }
}


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
      navItem: "rgba(0, 0, 0, 0.6)"
    }
  }
})
 
interface AppThemeProviderProps extends PropsWithChildren {};

export default function AppThemeProvider(props : AppThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}
