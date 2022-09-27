import React, { CSSProperties } from "react";

import Header from "../page-header/Header";
import Footer from "../page-footer/Footer";
import HomeBody from "./HomeBody";

const pageStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
};

function Home() {
  return (
    <div style={{ ...pageStyle }}>
      <Header />
      <HomeBody />
      <Footer />
    </div>
  );
}

export default Home;
