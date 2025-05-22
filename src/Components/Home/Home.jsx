import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Events from "./Event/Events";
import FeatureSection from "./FeatureSection/FeatureSection";
import FeaturedRoommatePost from "./FeaturedRoommatePost/FeaturedRoommatePost";

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Roomsy Nest | Home</title>
    </Helmet>
    
      <Banner></Banner>
      <FeaturedRoommatePost></FeaturedRoommatePost>
      <Events></Events>
      <FeatureSection></FeatureSection>
    </>
  );
};

export default Home;
