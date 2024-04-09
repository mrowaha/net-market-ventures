import "@/styles/globals.css";

// MUI Default Font -- Fallback Font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Divi Default Font -- Main Theme Font
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/700.css';

import type { AppProps } from "next/app";

import AppThemeProvider from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <Component {...pageProps} />
    </AppThemeProvider>
  );
}
