import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Events from "./Event/Events";
import FeatureSection from "./FeatureSection/FeatureSection";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Events></Events>
      <FeatureSection></FeatureSection>
    </>
  );
};

export default Home;
