import "@/styles/globals.css";

// Main
import '@fontsource/jost/300.css';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/700.css';

// MUI Default Font -- Fallback Font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Divi Default Font
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/700.css';

import type { AppProps } from "next/app";

import AppThemeProvider from "@/theme";
import Layout from "@/layout";
import { Provider } from "jotai";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <AppThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppThemeProvider>
    </Provider>
  );
}
