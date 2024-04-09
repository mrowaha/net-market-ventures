import { ThemeProvider, createTheme } from "@mui/material";
import { type PropsWithChildren } from "react";


const theme = createTheme({
  typography: {
    fontFamily: [
      '"Open Sans"',
      'Roboto',
      'system-ui',
      '-apple-system'
    ].join(',')
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
