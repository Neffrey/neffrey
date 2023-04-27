// LIBRARIES
import React from "react";
import { type AppType } from "next/app";

// COMPONENTS
import Header from "~/components/templates/header";
import Footer from "~/components/templates/footer";
import { api } from "~/utils/api";

// STYLES
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default api.withTRPC(MyApp);
