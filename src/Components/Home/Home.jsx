import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Events from "./Event/Events";
import FeatureSection from "./FeatureSection/FeatureSection";

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Roomsy Nest | Home</title>
    </Helmet>
    
      <Banner></Banner>

      <Events></Events>
      <FeatureSection></FeatureSection>
    </>
  );
};

export default Home;
