import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "styles/global";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import React from "react";
import { UserContextProvider } from "hooks/userContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <Head>
          <title>Boillerplate Henrique</title>
          <link
            rel="shortcut icon"
            href="https://res.cloudinary.com/defnibbpl/image/upload/v1635695141/a61237_orkfde_816831fe5f.png"
          />
          <link
            rel="apple-touch-icon"
            href="https://res.cloudinary.com/defnibbpl/image/upload/v1635695141/a61237_orkfde_816831fe5f.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="My Boyllerplate/ Template for Projects React | Next.js"
          />
        </Head>
        <Component {...pageProps} />
        <GlobalStyles />
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
