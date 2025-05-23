import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Events from "./Event/Events";
import FeatureSection from "./FeatureSection/FeatureSection";
import FeaturedRoommatePost from "./FeaturedRoommatePost/FeaturedRoommatePost";
import AboutRoomsy from "./AboutRoomsy";

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Roomsy Nest | Home</title>
    </Helmet>
    
      <Banner></Banner>
      <FeaturedRoommatePost></FeaturedRoommatePost>
      <AboutRoomsy></AboutRoomsy>
      <Events></Events>
      <FeatureSection></FeatureSection>
    </>
  );
};

export default Home;
