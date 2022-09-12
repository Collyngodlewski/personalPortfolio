import { Container, NextUIProvider, Text } from "@nextui-org/react";
import Head from "next/head";
import NavBar from "./navBar";




const Layout = ({ children, title }) => (
  
      <NextUIProvider>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta
            name="google-site-verification"
            content="69f2b0Gk3oWGLyWLo1U0_4is_h4TtTctIT1EVmSRyBc"
          />
        </Head>
        <NavBar />
        {children}

      </NextUIProvider>
    
  );
  
  export default Layout;
  