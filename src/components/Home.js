import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import AboutMe from "./AboutMe";

const Home = () => {
  var ref = useRef(null);

  return (
    <div>
      <Header />
      <Body />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default Home;
