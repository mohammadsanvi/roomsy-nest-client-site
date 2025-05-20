import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Events from "./Eventa/Events";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Events></Events>
    </>
  );
};

export default Home;
